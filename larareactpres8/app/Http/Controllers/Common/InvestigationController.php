<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Investigation;
use Illuminate\Http\Request;

class InvestigationController extends Controller
{
    public function allInvestigation()
    {
        $investigations = Investigation::all();

        return $investigations;
    }

    public function addInvestigation(Request $request)
    {
        try{
            $test_name = $request->input('test_name');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = Investigation::insert([
                'test_name' => $test_name,
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

    public function updateInvestigation(Request $request)
    {
        try{
            $id = $request->id;

            $test_name = $request->input('test_name');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = Investigation::where('id',$id)->update([
                'test_name' => $test_name,
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
