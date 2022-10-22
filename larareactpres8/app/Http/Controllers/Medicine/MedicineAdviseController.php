<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\MedicineAdvice;
use Illuminate\Http\Request;

class MedicineAdviseController extends Controller
{
    public function allMedicineAdvise()
    {
        $medicine_advices = MedicineAdvice::all();

        return $medicine_advices;
    }

    public function addMedicineAdvise(Request $request)
    {
        try{
            $medicine_advise = $request->input('medicine_advise');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = MedicineAdvice::insert([
                'medicine_advise' => $medicine_advise,
                'remarks' => $remarks,
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
