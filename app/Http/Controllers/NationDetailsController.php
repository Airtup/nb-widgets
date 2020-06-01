<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Factory\AbstractFactory;

class NationDetailsController extends Controller
{
    private $factory;
    private $dao;
    public function __construct()
    {
        $this->factory = AbstractFactory::getFactory('DAO');
        $this->dao = $this->factory->getDAO('NationDetailsDao');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nations = $this->dao->select();
        return response()->json(['status'=>'ok','data'=>$nations],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\nation_details  $nation_details
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $nations = $this->dao->get($id);
        return response()->json(['status'=>'ok','data'=>$nations],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\nation_details  $nation_details
     * @return \Illuminate\Http\Response
     */
    public function edit(nation_details $nation_details)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\nation_details  $nation_details
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, nation_details $nation_details)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\nation_details  $nation_details
     * @return \Illuminate\Http\Response
     */
    public function destroy(nation_details $nation_details)
    {
        //
    }
}
