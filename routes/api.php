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

Route::post('upload', "Yandex\\FileUploaderController@upload");
Route::get('get/file/{file_name}', "Yandex\\FileRetrieveController@retrieve")
->name("api.yandex.file.retrieve");
