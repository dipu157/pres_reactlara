<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Dose;
use Illuminate\Http\Request;

class DoseController extends Controller
{
    public function allDoses()
    {
        $doses = Dose::all();

        return $doses;
    }

    public function addDoses(Request $request)
    {
        try{
            $dose = $request->input('dose');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = Dose::insert([
                'dose' => $dose,
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
