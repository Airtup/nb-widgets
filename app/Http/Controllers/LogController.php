<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Factory\AbstractFactory;

class LogController extends Controller
{

    private $factory;
    private $dao;
    public function __construct()
    {
        $this->factory = AbstractFactory::getFactory('DAO');
        $this->dao = $this->factory->getDAO('LogDao');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $logs = $this->dao->select();
        return response()->json(['status' => 'ok', 'data' => $logs], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $log = $this->dao->delete($id);

        return response()->json(['status'=>'ok','data'=>$log],200);
    }
}
