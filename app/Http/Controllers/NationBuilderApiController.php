<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Factory\AbstractFactory;
use App\Models\Log;

class NationBuilderApiController extends Controller
{
    private $factory;
    private $api;
    private $dao;
    public function __construct()
    {
        $this->factory = AbstractFactory::getFactory('Api');
        $this->api = $this->factory->getDAO('NationApiConexion');
        $this->dao = AbstractFactory::getFactory('DAO')->getDAO('NationDao');
    }

    /**
     * Generate Nation Token
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function generate_token(Request $request)
    {
        $params = array(
            'code' => $request->nation["access_token"],
            'redirect_uri' => 'https://stage.nbwidgets.com/nbcallback',
            'client_id' => $request->client["id"],
            'client_secret' => $request->client["secret"],
            'grant_type' => 'authorization_code'
        );

        $url = 'https://' .  $request->nation["slug"] . '.nationbuilder.com/oauth/token';

        $response = $this->api->post($url,$params);

        return response()->json(['status' => 'ok', 'data' => $response->access_token], 200);
    }

    public function clear_cache(Request $request)
    {
        $nation_id = $request->all()['nation_id'];
        $user_id = $request->all()['user_id'];
        $nation = $this->dao->get($nation_id)[0]; 


        $this->dao->deleteCache($nation_id);


        $mytag = str_replace(' ', '%20', $nation->nation_details->tag);
        $temp_url = 'https://'.$nation->slug.'.nationbuilder.com';
        $next = '/api/v1/tags/'.$mytag.'/people?limit=50';
        $page = 1;
        $daoPage = AbstractFactory::getFactory('DAO')->getDAO('NationPagesDao');
        $daoPeople = AbstractFactory::getFactory('DAO')->getDAO('PeopleDao');
        while($next != null){
            $daoPage->insert(['nation_id'=>$nation->id,'nation_tag'=>$nation->nation_details->tag,'number_page'=>$page,'page_url'=>$next]);
            $url =  $temp_url.$next.'&access_token='.$nation->access_token;
            $response = $this->api->get($url);
            if(!empty($response)){
                foreach($response->results as $person){
                    $city = null;
                    $country = '';
                    $home_address = null;
                    $address2 = null;
                    $address3 = null;
                    $zip = null;
                    $state = '';
                    $country_code = null;
                    $industry = null;
                    if ($person->primary_address != null){
                        $city = $person->primary_address->city;
                        $country = $person->primary_address->country_code;
                        $home_address = $person->primary_address->address1;
                        $state = $person->primary_address->state;
                        $address2 = $person->primary_address->address2;
                        $address3 = $person->primary_address->address3;
                        $zip = $person->primary_address->zip;
                        $country_code = $person->primary_address->country_code;
                    }
                    $insertData = array(
                        'nation_id' => $nation->id,
                        'nation_tag' => $nation->nation_details->tag,
                        'number_page' => $page,
                        'first_name' => $person->first_name,
                        'last_name' => $person->last_name,
                        'industry' => $industry,
                        'city' => $city,
                        'country' => $country,
                        'state' => $state,
                        'profile_image' => $person->profile_image_url_ssl,
                        'occupation' => $person->occupation,
                        'employer' => $person->employer,
                        'email' => $person->email,
                        'twitter' => $person->twitter_id,
                        'linkedin' => $person->linkedin_id,
                        'facebook' => $person->has_facebook,
                        'person_id' => $person->id,
                        'phone' => $person->phone,
                        'work_phone' => $person->work_phone_number,
                        'mobile' => $person->mobile,
                        'primary_address' => $home_address,
                        'secondary_address' => $address2,
                        'tertiary_address' => $address3,
                        'zip' => $zip,
                        'country_code' => $country_code,
                        'tags' => json_encode($person->tags)
                    );

                    $daoPeople->insert($insertData);
                }
                $next = $response->next;
            }else{
                $next = null;
            }
            $page ++;
        }

        Log::create(["user_id" => $user_id, "nation_id" => $nation->id, 'description' => 'Cache Refreshed Nation "' . $nation->name . '"']);
        return response()->json(['status' => 'ok'], 200);
    }
    public function sync_image(Request $request){
        $nation_id = $request->all()['nation_id'];
        $user_id = $request->all()['user_id'];
        $nation = $this->dao->get($nation_id)[0];
        $next = '/api/v1/people?limit=50';
        $url = 'https://'.$nation->slug.'.nationbuilder.com'.$next.'&access_token='.$nation->access_token;
        $daoPeople = AbstractFactory::getFactory('DAO')->getDAO('PeopleDao');
        while($next != null){
            $url = $url;
            $response = $this->api->get($url);
            if(!empty($response)){
                foreach($response->results as $person){
    
                    $updateData = array(
                        'nation_id' => $nation->id,
                        'profile_image' => $person->profile_image_url_ssl,
                        'email' => $person->email,
                    );
                    $daoPeople->update_image($updateData);
                }
                $next = $response->next;
            }else{
                $next = null;
            }
        }
        Log::create(["user_id" => $user_id, "nation_id" => $nation->id, 'description' => 'Sync Image Refreshed Nation "' . $nation->name . '"']);
        return response()->json(['status' => 'ok'], 200);
    }
}
