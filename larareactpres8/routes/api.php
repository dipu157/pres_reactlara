<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UserController;

use App\Http\Controllers\Common\ChamberController;
use App\Http\Controllers\Common\DepartmentController;
use App\Http\Controllers\Common\DesignationController;
use App\Http\Controllers\Common\DoctorController;
use App\Http\Controllers\Common\PatientController;
use App\Http\Controllers\Common\InvestigationController;
use App\Http\Controllers\Common\GeneralAdviseController;
use App\Http\Controllers\Common\VisitingFeeController;


use App\Http\Controllers\Medicine\GenericController;
use App\Http\Controllers\Medicine\MedicineController;
use App\Http\Controllers\Medicine\MedicineTypeController;
use App\Http\Controllers\Medicine\StrengthController;
use App\Http\Controllers\Medicine\SupplierController;
use App\Http\Controllers\Medicine\DoseDurationAdviceController;

use App\Http\Controllers\Prescription\PrescriptionController;

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

  // Current User Route
Route::get('/user',[UserController::class, 'User']);


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
 Route::get('/searchpatients/{key}',[PatientController::class, 'searchPatients']);
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
 Route::get('/searchmedicines/{key}',[MedicineController::class, 'searchMedicines']);


 Route::get('/alldoseDurationAdvice',[DoseDurationAdviceController::class, 'allDoseDuration']);
 Route::post('/adddoseDurationAdvice',[DoseDurationAdviceController::class, 'addDoseDuration']);

 Route::get('/allinvestigation',[InvestigationController::class, 'allInvestigation']);
 Route::post('/addinvestigation',[InvestigationController::class, 'addInvestigation']);
 Route::post('/updateinvestigation/{id}',[InvestigationController::class, 'updateInvestigation']);
 Route::get('/searchinvestigations/{key}',[InvestigationController::class, 'searchInvestigations']);

 Route::get('/allgeneralAdvice',[GeneralAdviseController::class, 'allGeneralAdvice']);
 Route::post('/addgeneralAdvice',[GeneralAdviseController::class, 'addGeneralAdvice']);
 Route::post('/updateadvice/{id}',[GeneralAdviseController::class, 'updateAdvice']);
 Route::get('/searchadvices/{key}',[GeneralAdviseController::class, 'searchAdvice']);

 Route::get('/allVisitingFees',[VisitingFeeController::class, 'allVisitingFees']);
 Route::post('/addVisitingFees',[VisitingFeeController::class, 'addVisitingFees']);
 Route::post('/updateVisitingFees/{id}',[VisitingFeeController::class, 'updateVisitingFees']);

 Route::post('/createPrescription',[PrescriptionController::class, 'newPrescription']);
 Route::get('/allPrescription',[PrescriptionController::class, 'allPrescription']);
 Route::get('/prescriptionByPatient/{id}',[PrescriptionController::class, 'prescriptionByPatientId']);
