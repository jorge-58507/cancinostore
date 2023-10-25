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
    Route::get('/APIrequest/pendant','requestController@get_pendant');
});