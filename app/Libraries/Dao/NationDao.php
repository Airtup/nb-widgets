<?php

namespace App\Libraries\Dao;

use App\Models\Nation;

class NationDao
{
    public function select()
    {
        $nations = Nation::where('status', '1')->get();

        return $nations;
    }
    public function insert($request)
    {
        $nation = Nation::updateOrCreate(['slug'=>$request['slug']],$request);

        return $nation;
    }

    public function get($id)
    {
        $nation = Nation::where('id', $id)->where('status', '1')->get();

        return $nation;
    }
    public function update($request, $id)
    {
        $nation = Nation::find($id);
        
        return $nation->update($request);
    }
    public function delete($id)
    {
        $nation = Nation::find($id);

        return $nation->update(['status' => 0]);
    }

    public function exists($slug)
    {
        return Nation::where('slug', $slug)->exists();
    }
}
