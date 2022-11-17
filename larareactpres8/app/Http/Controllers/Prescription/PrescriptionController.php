<?php

namespace App\Http\Controllers\Prescription;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use App\Models\Patient;
use App\Models\Pres_Advice;
use App\Models\Pres_Investigation;
use App\Models\Pres_Medicine;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{

    public function allPrescription()
    {
       // $prescription = Prescription::all();

        $prescription = Prescription::with(['patient','doctor','pmedicines', 'pinvestigations', 'padvices'])->get();

        return $prescription;
    }

    public function prescriptionByPatientId(Request $request)
    {
        $id = $request->id;

        $prescription = Prescription::where('id',$id)
                        ->with(['patient','doctor','pmedicines', 'pinvestigations', 'padvices'])
                        ->first();

        return $prescription;
    }

    public function newPrescription(Request $request)
    {
        date_default_timezone_set("Asia/Dhaka");
        $date  =   date("Y-m-d");

        $userID = $request->user_id;

        $medicines = $request->allmedids;
        $investigations = $request->allinvids;
        $advices = $request->alladvids;

        $data = [
            'patient_id' => $request->pid,
            'doctor_id' => $request->did,
            'date'  => $date,
            'bp'  => $request->bp,
            'pulse'  => $request->pulse,
            'temp'  => $request->temp,
            'weight'  => $request->weight,
            'spo2'  => $request->spo2,
            'sugar'  => $request->sugar,
            'complain'  => $request->cc,
            'diagnosis'  => $request->diagnosis,
            'past_history'  => $request->past_history,
            'drug_history'  => $request->drug_history,
            'follow_up'  => $request->followUp,
            'user_id' => $userID,
        ];

        try{
            $prescriptionID = Prescription::insertGetId($data);

        $invCollection = collect($investigations)->map(function ($inv) use ($prescriptionID,$userID) {

            return [
                                'prescription_id' => $prescriptionID,
                                'investigation_id' => $inv['id'],
                                'investigation' => $inv['name'],
                                'user_id' => $userID
                    ];
        })->toArray();


        Pres_Investigation::insert($invCollection);

        $medCollection = collect($medicines)->map(function ($med) use ($prescriptionID,$userID) {

            return [
                        'prescription_id' => $prescriptionID,
                        'medicine_id' => $med['id'],
                        'dose' => $med['dose'],
                        'duration' => $med['duration'],
                        'm_advice' => $med['madvice'],
                        'user_id' => $userID
                    ];
        })->toArray();


        Pres_Medicine::insert($medCollection);

        $advCollection = collect($advices)->map(function ($adv) use ($prescriptionID,$userID) {

            return [
                                'prescription_id' => $prescriptionID,
                                'advice_id' => $adv['id'],
                                'advice' => $adv['name'],
                                'user_id' => $userID
                    ];
        })->toArray();

        Pres_Advice::insert($advCollection);

        return response([
            'message' => "Successfully Added",
            'prescriptionId' => $prescriptionID
        ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }

    }
}
