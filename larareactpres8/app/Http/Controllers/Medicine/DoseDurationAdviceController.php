<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\DoseDurationAdvice;
use Illuminate\Http\Request;

class DoseDurationAdviceController extends Controller
{
    public function allDoseDuration()
    {
        $doseduration = DoseDurationAdvice::all();

        return $doseduration;
    }

    public function addDoseDuration(Request $request)
    {
        try{
            $name = $request->input('name');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = DoseDurationAdvice::insert([
                'name' => $name,
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
