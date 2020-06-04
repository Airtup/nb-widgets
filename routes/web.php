<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');
Route::post('/getAllPeopleList','NationBuilderApiController@getAllPeopleList');
<<<<<<< HEAD
=======
Route::post('/getPeopleList','NationBuilderApiController@getPeopleList');
>>>>>>> cd595fd3bb7efc30e1fc5210de8918deba2644a0
Route::post('/getPersonDetail','NationBuilderApiController@getPersonDetail');

Auth::routes();

Route::get('/nbcallback', 'HomeController@authcode_callback');