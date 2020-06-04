<?php

namespace App\Libraries\Dao;

use App\Models\People;

class PeopleDao
{
    public function select()
    {
        $people = People::all();

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
        
        return $person->update($request);
    }
    public function update_image($data)
    {
       $person = People::where([['nation_id','=',$data['nation_id']],['email','=',$data['email']]])->get();
        $person->profile_image = $data['image_profile'];
        $person->save();
        return $person;
    }
    public function delete($id)
    {
       $person = People::find($id);

        return $person->update(['status' => 0]);
    }
}
