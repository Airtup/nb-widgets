<?php

namespace App\Libraries\Dao;

use App\Models\NationDetails;
use App\Models\Nation;

class NationDetailsDao
{
    public function select()
    {
        $nations = NationDetails::join('nations', 'nations.id', '=', 'nation_details.nation_id')->select()->get();
        return $nations;
    }
    public function insert($request)
    {
        $nation = NationDetails::create($request);

        return $nation;
    }

    public function get($id)
    {
        $nation = Nation::leftjoin('nation_details', 'nations.id','=', 'nation_details.nation_id')
                    ->select('nation_details.*','nations.*')
                    ->where('nations.id',$id)->get();

        return $nation;
    }
    public function update($request, $id)
    {
        $nation = NationDetails::find($id);

        return $nation->update($request);
    }
}
