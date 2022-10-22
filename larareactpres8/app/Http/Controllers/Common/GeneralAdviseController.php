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
}
