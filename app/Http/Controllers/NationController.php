<?php

namespace App\Http\Controllers;

use App\Libraries\Factory\AbstractFactory;
use App\Http\Requests\NationRequest;
use Illuminate\Http\Request;

class NationController extends Controller
{
    private $factory;
    private $dao;
    public function __construct()
    {
        $this->factory = AbstractFactory::getFactory('DAO');
        $this->dao = $this->factory->getDAO('NationDao');
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
     * 
     * Returns true if the nation with the received slug exists.
     *
     * @return \Illuminate\Http\Response
     */
    public function exists($slug)
    {
        $exists = $this->dao->exists($slug);
        return response()->json(['status'=>'ok','exists'=>$exists],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NationRequest $request)
    {
        $nation = $this->dao->insert($request->all());

        return response()->json(['status'=>'ok','data'=>$nation],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $nation = $this->dao->get($id);
        return response()->json(['status'=>'ok','data'=>$nation],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(NationRequest $request, $id)
    {
        $nation = $this->dao->update($request->all(),$id);

        return response()->json(['status'=>'ok','data'=>$nation],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $nation = $this->dao->delete($id);

        return response()->json(['status'=>'ok','data'=>null],200);
    }
}
