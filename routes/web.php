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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 'Admin\AdminController@login');
Route::post('/post_admin_form', 'Admin\AdminController@post_admin_form');

Route::get('/dashboard', 'Admin\AdminController@dashboard');
Route::post('/post_upload_products', 'Admin\AdminController@post_upload_products');


Route::get('/index', 'Admin\AdminController@index');
Route::get('/why_us', 'Admin\AdminController@why_us');
Route::get('/design_studio', 'Admin\AdminController@design_studio');
