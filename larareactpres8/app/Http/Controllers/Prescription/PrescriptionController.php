<?php

namespace App\Http\Controllers\Prescription;

use App\Http\Controllers\Controller;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{
    public function newPrescription(Request $request)
    {
        date_default_timezone_set("Asia/Dhaka");
        $date  =   date("Y-m-d");
        $user_id = 1;
        $doctor_id = 1;
        $patient_id = 1;

        try{

            $result = Prescription::insert([
            'patient_id' => $patient_id,
            'doctor_id' => $doctor_id,
            'name'  => $request->name,
            'date'  => $date,
            'bp'  => $request->bp,
            'pulse'  => $request->pulse,
            'temp'  => $request->temp,
            'weight'  => $request->weight,
            'spo2'  => $request->spo2,
            'sugar'  => $request->sugar,
            'complain'  => $request->complain,
            'diagnosis'  => $request->diagnosis,
            'past_history'  => $request->past_history,
            'drug_history'  => $request->drug_history,
            'follow_up'  => $request->follow_up,
            'others1'  => $request->others1,
            'others2'  => $request->others2,
            'others3'  => $request->others3,
            'others4'  => $request->others4,
            'others5'  => $request->others5,
            'user_id' => $user_id,
            ]);

            return response([
                'message' => "Successfully Added"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }
    }
}
