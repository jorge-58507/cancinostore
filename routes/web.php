<?php

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

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

// Auth::routes();
// Auth::routes(['verify' => true]);
// Route::get('/home', 'HomeController@index')->name('home');

Route::get('prefix/{prefix}', 'ubicationController@getPrefix');
Route::get('price/{param}/article', 'priceController@showByArticle');
Route::get('recipe/{param}/article', 'articleproductController@showByArticle');
Route::get('recipe/{param_a}/{param_b}', 'articleproductController@showRecipe');
Route::get('request/{param_a}', 'requestController@index');
// Route::get('request/{param_a}', 'requestController@index')->middleware('verified');
Route::get('request/{param_a}/status', 'requestController@json_show');
Route::get('status/{param_a}', 'requestController@show');
Route::get('commanddata/{param_a}', 'commandController@get_commanddata');

Route::post('/table_upd/', 'tableController@renovate')->middleware('auth');
Route::post('/article_upd/', 'articleController@renovate')->middleware('auth');
Route::post('product/{slug}/measure', 'measureproductController@save')->middleware('auth');
Route::post('/articleproduct/', 'articleproductController@store');

Route::delete('product/{param}/measure', 'measureproductController@delete')->middleware('auth');



Route::resource('request', 'requestController');
Route::resource('configuration', 'configurationController')->middleware('auth');
Route::resource('ubication', 'ubicationController')->middleware('auth');
Route::resource('table', 'tableController')->middleware('auth');
Route::resource('article', 'articleController');
Route::resource('price', 'priceController')->middleware('auth');
Route::resource('product', 'productController')->middleware('auth');
Route::resource('command', 'commandController');

