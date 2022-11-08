<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\GeneralAdvice;
use Illuminate\Http\Request;

class GeneralAdviseController extends Controller
{
    public function allGeneralAdvice()
    {
        $general_Advices = GeneralAdvice::all();

        return $general_Advices;
    }

    public function searchAdvice($key)
    {
        $general_Advices = GeneralAdvice::query()
                    ->where('general_advice','Like',"%$key%")
                    ->get();

        return response([
            'message' => "Successfull",
            'result' => $general_Advices
        ],200);
    }

    public function addGeneralAdvice(Request $request)
    {
        try{
            $general_advice = $request->input('general_advice');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = GeneralAdvice::insert([
                'general_advice' => $general_advice,
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

    public function updateAdvice(Request $request)
    {
        try{
            $id = $request->id;

            $general_advice = $request->input('general_advice');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = GeneralAdvice::where('id',$id)->update([
                'general_advice' => $general_advice,
                'remarks' => $remarks,
                'user_id' => $user_id,
            ]);

            return response([
                'message' => "Successfully Updated"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }
    }
}
