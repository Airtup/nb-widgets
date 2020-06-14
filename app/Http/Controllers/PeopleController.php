<?php

namespace App\Http\Controllers;

use App\Libraries\Factory\AbstractFactory;
use App\Models\People;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class PeopleController extends Controller
{

    private $nation_details_dao;
    private $dao;

    public function __construct()
    {
        $this->nation_details_dao  = AbstractFactory::getFactory('DAO')->getDAO('NationDetailsDao');
        $this->dao = AbstractFactory::getFactory('DAO')->getDAO('NationDao');
    }

    public function syncNationPictures(Request $request)
    {
        $nation_id = $request->nation_id;
        $nation = $this->nation_details_dao->get($nation_id)[0];
        $nation_hq_id = $nation->nation_details->picture_sync;

        $people =  $this->dao->getAllNationCache($nation_id, $nation->nation_details->tag, null, null);

        foreach ($people as $person){
            $where[] = ['first_name', $person->first_name];
            $where[] = ['last_name', $person->last_name];
            $where[] = ['email', $person->email];
            $where[] = ['nation_id', $nation_hq_id];
            $person_hq = People::where($where)->first();
            if($person_hq){
                Log::info('Se actualizo perfil');
                $person_hq->profile_image = $person->profile_image;
                $person_hq->save();
            } else{
                Log::info('No se encontro perfil');
            }
        }

        return response()->json(['success' => true ], 200);
    }

}
