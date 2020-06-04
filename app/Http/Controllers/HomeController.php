<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nation;
use App\Models\NationDetails;
use App\Models\Log;

class HomeController extends Controller
{

    public function __construct()
    {
        ini_set('max_execution_time', 1000);
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /*
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        return view('layouts.app');
    }

    public function authcode_callback(Request $request)
    {
    }
}
