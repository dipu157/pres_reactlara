<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\VisitingFees;
use Illuminate\Http\Request;

class VisitingFeeController extends Controller
{
    public function allVisitingFees()
    {
        $visiting_Fees = VisitingFees::all();

        return $visiting_Fees;
    }

    public function addVisitingFees(Request $request)
    {
        try{
            $doctor_id = $request->input('doctor_id');
            $visit_types = $request->input('visit_types');
            $visit_fees = $request->input('visit_fees');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = VisitingFees::insert([
                'doctor_id' => $doctor_id,
                'visit_types' => $visit_types,
                'visit_fees' => $visit_fees,
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


    public function updateVisitingFees(Request $request)
    {
        try{
            $id = $request->id;

            $doctor_id = $request->input('doctor_id');
            $visit_types = $request->input('visit_types');
            $visit_fees = $request->input('visit_fees');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = VisitingFees::where('id', $id)->update([
                'doctor_id' => $doctor_id,
                'visit_types' => $visit_types,
                'visit_fees' => $visit_fees,
                'remarks' => $remarks,
                'user_id' => $user_id,
            ]);

            return response([
                'message' => "Fees Successfully Updated"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }
    }
}
