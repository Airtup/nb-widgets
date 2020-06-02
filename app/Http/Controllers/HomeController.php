<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nation;
use App\Models\NationDetails;
use App\Models\Log;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('layouts.app');
    }

    public function authcode_callback(Request $request)
    {
    }
}
