<?php

use Illuminate\Http\Request;

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


Route::post('/APIregister', 'Auth\AuthController@register');
Route::post('/APIlogin', 'Auth\AuthController@login');


// PROTECTED ROUTES
Route::middleware(['jwt.verify'])->group(function () {
    Route::get('/APIrequest/all/{param}','requestController@get_all');
    Route::get('/APIrequest/anuled/{param}','requestController@get_anuled');
    Route::get('/APIrequest/pendant','requestController@get_pendant');
    Route::get('/APIrequest/confirmed','requestController@get_confirmed');
    Route::get('/APIrequest/ready','requestController@get_ready');
    Route::get('/APIrequest/closed/{param}','requestController@get_closed');
    Route::get('/APIrequest/show/{param}','requestController@json_show');
    Route::get('/APIrequest/next/{param}','requestController@next_status');

    Route::post('/APIrequest/{param}/confirm','requestController@confirm');

    Route::put('/APIrequest/{param}/closeit','requestController@closeit');
});