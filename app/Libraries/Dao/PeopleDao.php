<?php

namespace App\Libraries\Dao;

use App\Models\People;

class PeopleDao
{
    public function select()
    {
        $people = People::where('status', '1')->get();

        return $people;
    }
    public function insert($params)
    {
       $person = People::create($params);

        return$person;
    }

    public function get($id)
    {
       $person = People::where('id', $id)->where('status', '1')->get();

        return$person;
    }
    public function update($request, $id)
    {
       $person = People::find($id);
        
        return$person->update($request);
    }
    public function delete($id)
    {
       $person = People::find($id);

        return$person->update(['status' => 0]);
    }
}
