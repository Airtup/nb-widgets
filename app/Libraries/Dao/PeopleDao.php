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

        return $person;
    }

    public function get($id)
    {
        $person = People::where('id', $id)->where('status', '1')->get();

        return $person;
    }
    public function update($request, $id)
    {
        $person = People::find($id);

        return $person->update($request);
    }
    public function update_image($data)
    {
        $person = People::where([['nation_id', '=', $data['nation_id']] ,['person_id', '=', $data['person_id']]])->get()->first();
        if ($person) {
            $person->profile_image = $data['profile_image'];
            $person->save();
            return $person;
        }
        return;
    }
    public function delete($id)
    {
        $person = People::find($id);

        return $person->update(['status' => 0]);
    }
}
