<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Generic;
use Illuminate\Http\Request;

class GenericController extends Controller
{
    public function allGenerics()
    {
        $generics = Generic::all();

        return $generics;
    }

    public function addgeneric(Request $request)
    {

        try{
            $name = $request->input('name');
        $user_id = $request->input('user_id');

        $result = Generic::insert([
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

    public function updateGeneric(Request $request)
    {

        try{

            $id = $request->id;

            $name = $request->input('name');
            $user_id = $request->input('user_id');

            $result = Generic::where('id', $id)->update([
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
