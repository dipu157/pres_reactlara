<?php

namespace App\Http\Controllers\Prescription;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use App\Models\Patient;
use App\Models\Pres_Investigation;
use App\Models\Pres_Medicine;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{

    public function newPrescription(Request $request)
    {
       // dd($request->all());


        date_default_timezone_set("Asia/Dhaka");
        $date  =   date("Y-m-d");

        $userID = $request->user_id;

        $medicines = $request->allmedids;
        $investigations = $request->allinvids;
        $advices = $request->alladvids;

       // dd($investigations);

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
            'complain'  => $request->complain,
            'diagnosis'  => $request->diagnosis,
            'past_history'  => $request->past_history,
            'drug_history'  => $request->drug_history,
            'follow_up'  => $request->follow_up,
            'user_id' => $userID,
        ];

        $prescriptionID = Prescription::insertGetId($data);

        $invCollection = collect($investigations)->map(function ($inv) use ($prescriptionID,$userID) {

            return [
                                'prescription_id' => $prescriptionID,
                                'investigation_id' => $inv['id'],
                                'investigation' => $inv['name'],
                                'user_id' => $userID
                    ];
        });


        $Pres_Investigation = Pres_Investigation::insert($invCollection->toArray());

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


        $Pres_Investigation = Pres_Medicine::insert($medCollection);

       // $prescriptionID = $prescription->id();

       // return $prescriptionID;


        // if(is_array($investigations) || is_object($investigations)){

        //    // dd($investigations);
        //     foreach($investigations as $row){
        //         if(!empty($row)){
        //             //dd($investigations);
        //             $investigation = [
        //                 'prescription_id' => $prescriptionID,
        //                 'investigation_id' => $row->id,
        //                 'investigation' => $row->name,
        //                 'user_id' => $userID
        //             ];

        //             $pres_medicineInsert = Pres_Medicine::create($investigation);
        //         }
        //     }
        // }



    }
}
