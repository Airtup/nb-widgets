<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// API Routes 

Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::resource('/nations', 'NationController');
Route::resource('/nation/details', 'NationDetailsController');
Route::post('/nation/generate/token', 'NationBuilderApiController@generate_token');
Route::get('/nation/exists/{slug}','NationController@exists');
Route::post('/nation/clear/cache', 'NationBuilderApiController@clear_cache');
