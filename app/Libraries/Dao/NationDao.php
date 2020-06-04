<?php

namespace App\Libraries\Dao;

use App\Models\Nation;
use App\Models\People;
use App\Models\NationPages;

class NationDao
{
    public function select()
    {
        $nations = Nation::where('status', '1')->get();
        return $nations;
    }
    public function insert($request)
    {
        $nation = Nation::updateOrCreate(['slug' => $request['slug'],'status' => 1], $request);

        return $nation;
    }

    public function get($id)
    {
        $nation = Nation::where('id', $id)->where('status', '1')->get();

        return $nation;
    }

    public function get_hq_nations()
    {
        $nations = Nation::where('status', '1')
            ->join('nation_details', 'nation_details.nation_id', '=', 'nations.id')
            ->where('hq', 1)
            ->get();

        return $nations;    
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

    public function deleteCache($id)
    {
        $nation = Nation::find($id);
        $tag = $nation->nation_details->tag;
        $people = People::where([['nation_id', $nation->id], ['nation_tag', $tag]]);
        $nation->update(['people_count' => 0]);
        $pages = NationPages::where([['nation_id', $nation->id], ['nation_tag', $tag]]);
        $people->delete();
        $pages->delete();
    }

    public function syncNations(){
        $nations = Nation::where('status', '1')
            ->join('nation_details', 'nation_details.nation_id', '=', 'nations.id')
            ->where('membership_sync','!=','')
            ->get();

        return $nations; 
    }

    public function getNationBySlug($slug){
        $nation = Nation::where('slug', $slug)
            ->join('nation_details', 'nation_details.nation_id', '=', 'nations.id')
            ->get()
            ->first();

        return $nation;    
    }

    public function getAllNationCache($slug,$tag,$forum){
        $nations = [];
        if($forum){
        $nations = People::where([['nation_id',$slug],['nation_tag',$tag],['tags','like','%'.json_encode($forum).'%']])
            ->orderBy('last_name', 'asc')
            ->get();
        }
        else{
            $nations = People::where([['nation_id',$slug],['nation_tag',$tag]])
            ->orderBy('last_name', 'asc')
            ->get();
        }
        return $nations;
    }

    public function getAllNationCacheByPage($slug,$tag,$page){

        $nations = People::where([['nation_id',$slug],['nation_tag',$tag],['number_page',$page]])
                    ->orderBy('last_name', 'asc')
                    ->get();
        return $nations;
    }
}
