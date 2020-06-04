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

// Routes for Authentication trough API and JWT

Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => 'auth:api',
], function(){
});

// Routes to nations resources

Route::resource('/nations', 'NationController');
Route::resource('/nation/details', 'NationDetailsController');

// Routes to list and delete log entries

Route::get('/logs', 'LogController@index');
Route::delete('/logs/{log}', 'LogController@destroy');

// Routes that connect with NationBuilderAPI

Route::post('/nation/generate/token', 'NationBuilderApiController@generate_token');
Route::post('/nation/clear/cache', 'NationBuilderApiController@clear_cache');
Route::post('/nation/sync/imagen', 'NationBuilderApiController@sync_image');


Route::get('/users','UserController@index');
Route::post('/users','UserController@store');
Route::delete('/users/{user}','UserController@destroy');
Route::get('/roles','RoleController@index');