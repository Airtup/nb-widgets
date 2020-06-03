<?php

namespace App\Libraries\Dao;

use App\Models\Log;

class LogDao
{
    public function select()
    {
       $logs = Log::join('users','users.id','=','logs.user_id')
                    ->leftJoin('nations','nations.id','=','logs.nation_id')
                    ->select('logs.*','users.name as user_name','nations.name as nation_name')
                    ->get();
        return $logs;
    }
    public function insert($request)
    {
        $log = Log::updateOrCreate(['slug'=>$request['slug']],$request);

        return $log;
    }

    public function get($id)
    {
        $log = Log::where('id', $id)->where('status', '1')->get();

        return $log;
    }
    public function update($request, $id)
    {
        $log = Log::find($id);
        
        return $log->update($request);
    }
    public function delete($id)
    {
        return Log::find($id)->delete();
    }
}
