<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Strength;
use Illuminate\Http\Request;

class StrengthController extends Controller
{
    public function allStrength()
    {
        $strength = Strength::all();

        return $strength;
    }

    public function addStrength(Request $request)
    {
        try{

        $name = $request->input('name');
        $user_id = $request->input('user_id');

        $result = Strength::insert([
            'name' => $name,
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

    public function updateStrength(Request $request)
    {
        try{
            $id = $request->id;

        $name = $request->input('name');
        $user_id = $request->input('user_id');

        $result = Strength::where('id', $id)->update([
            'name' => $name,
            'user_id' => $user_id,
        ]);

            return response([
                'message' => "Successfully Edited"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }

    }
}
