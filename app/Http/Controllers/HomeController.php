<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nation;
use App\Models\NationDetails;
use App\Models\Log;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('layouts.app');
    }

    public function authcode_callback(Request $request, $slug, $name, $id, $secret,$user_id)
    {
        $params = array(
            'code' => $request->code,
            'redirect_uri' => "/",
            'client_id' => $id,
            'client_secret' => $secret,
            'grant_type' => 'authorization_code'
        );


        $url = 'https://' . $slug . '.nationbuilder.com/oauth/token?' . http_build_query($params);


        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt_array($curl, array(
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $url,
            CURLOPT_USERAGENT => 'From Front End',
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => json_encode($params)
        ));
        // Send the request & save response to $resp
        $resp = curl_exec($curl);
        curl_close($curl);
        $nation = Nation::updateOrCreate(["slug" => $slug], ['access_token' => $resp->access_token, 'name' => $name]);
        //$nation = Nation::updateOrCreate(["slug" => $slug], ['access_token' => "123", 'name' => $name]);
        
        if ($nation->id) {
            Log::create(["user_id"=>$user_id,"nation_id"=>$nation->id,'description'=>'Add new Nation "'.$nation->name.'"']);
            NationDetails::updateOrCreate(["nation_id" => $nation->id], ['tag' => $nation->name]);
        }
    }
}
