<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


// admin login/logpout
Route::get('/', 'Admin\AdminController@login');
Route::get('/logout', 'Admin\AdminController@logout');

Route::post('/post_admin_form', 'Admin\AdminController@post_admin_form');


// admin adshboard
Route::get('/dashboard', 'Admin\AdminController@dashboard');
Route::post('/post_upload_products', 'Admin\AdminController@post_upload_products');

// client side
Route::get('/index', 'Admin\AdminController@index');
Route::get('/why_us', 'Admin\AdminController@why_us');
Route::get('/design_studio', 'Admin\AdminController@design_studio');

// products edit/delete
Route::get('/edit_product', 'Admin\AdminController@edit_product');
Route::get('/delete_product', 'Admin\AdminController@delete_product');

Route::get('/individual_products/{product_id}', 'Admin\AdminController@individual_products');
