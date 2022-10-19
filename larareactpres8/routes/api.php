<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\User\AuthController;

use App\Http\Controllers\Common\ChamberController;
use App\Http\Controllers\Common\DepartmentController;
use App\Http\Controllers\Common\DesignationController;
use App\Http\Controllers\Common\DoctorController;

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

 // Register Routes
 Route::post('/register',[AuthController::class, 'Register']);


 // Login Routes
 Route::post('/login',[AuthController::class, 'Login']);


 Route::get('/chamberaddress',[ChamberController::class, 'index']);
 Route::post('/storechamberaddress',[ChamberController::class, 'storechamber']);

 Route::get('/getdepartments',[DepartmentController::class, 'allDepartments']);
 Route::post('/storedepartment',[DepartmentController::class, 'storedepartment']);


 Route::get('/getdesignations',[DesignationController::class, 'allDesignations']);
 Route::post('/storedesignation',[DesignationController::class, 'storedesignation']);

 Route::get('/getalldoctors',[DoctorController::class, 'allDoctors']);