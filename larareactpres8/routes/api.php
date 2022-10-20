<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\User\AuthController;

use App\Http\Controllers\Common\ChamberController;
use App\Http\Controllers\Common\DepartmentController;
use App\Http\Controllers\Common\DesignationController;
use App\Http\Controllers\Common\DoctorController;
use App\Http\Controllers\Common\PatientController;


use App\Http\Controllers\Medicine\GenericController;
use App\Http\Controllers\Medicine\MedicineController;
use App\Http\Controllers\Medicine\MedicineTypeController;
use App\Http\Controllers\Medicine\StrengthController;
use App\Http\Controllers\Medicine\SupplierController;

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
 Route::post('/addnewdoctor',[DoctorController::class, 'addDoctor']);
 Route::post('/updatedoctor/{id}',[DoctorController::class, 'updateDoctor']);


 Route::get('/getallpatients',[PatientController::class, 'allPatients']);
 Route::post('/addnewpatient',[PatientController::class, 'addPatient']);
 Route::post('/updatepatient/{id}',[PatientController::class, 'updatePatient']);


 Route::get('/getGenerics',[GenericController::class, 'allGenerics']);
 Route::post('/addgeneric',[GenericController::class, 'addGeneric']);
 Route::post('/updategeneric/{id}',[GenericController::class, 'updateGeneric']);

 Route::get('/getMedicineTypes',[MedicineTypeController::class, 'allMedicineTypes']);
 Route::post('/addMedicineTypes',[MedicineTypeController::class, 'addMedicineTypes']);
 Route::post('/updateMedicineTypes/{id}',[MedicineTypeController::class, 'updateMedicineTypes']);

 Route::get('/getStrength',[StrengthController::class, 'allStrength']);
 Route::post('/addStrength',[StrengthController::class, 'addStrength']);
 Route::post('/updateStrength/{id}',[StrengthController::class, 'updateStrength']);

 Route::get('/getsupplier',[SupplierController::class, 'allSupplier']);
 Route::post('/addsupplier',[SupplierController::class, 'addSupplier']);
 Route::post('/updatesupplier/{id}',[SupplierController::class, 'updateSupplier']);

 Route::get('/getMedicines',[MedicineController::class, 'allMedicine']);
 Route::post('/AddMedicines',[MedicineController::class, 'addMedicine']);
 Route::post('/updateMedicines/{id}',[MedicineController::class, 'updateMedicine']);