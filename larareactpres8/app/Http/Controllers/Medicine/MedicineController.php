<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use Illuminate\Http\Request;

class MedicineController extends Controller
{
    public function allMedicine()
    {
        $medicine = Medicine::all();

        return $medicine;
    }

    public function addMedicine(Request $request)
    {
        try{

            $name = $request->input('name');
            $supplier_id = $request->input('supplier_id');
            $generic_id = $request->input('generic_id');
            $strength_id = $request->input('strength_id');
            $medicine_type_id = $request->input('medicine_type_id');
            $details = $request->input('details');
            $side_effect = $request->input('side_effect');
            $user_id = $request->input('user_id');

            $result = Medicine::insert([

            'medicine_code' => 'M'. rand(1000,5000),
            'name'  => $name,
            'supplier_id' => $supplier_id,
            'generic_id' => $generic_id,
            'strength_id' => $strength_id,
            'medicine_type_id' => $medicine_type_id,
            'details' => $details,
            'side_effect' => $side_effect,
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

    public function updateMedicine(Request $request)
    {
        try{

        $id = $request->id;

        $name = $request->input('name');
        $supplier_id = $request->input('supplier_id');
        $generic_id = $request->input('generic_id');
        $strength_id = $request->input('strength_id');
        $medicine_type_id = $request->input('medicine_type_id');
        $details = $request->input('details');
        $side_effect = $request->input('side_effect');
        $user_id = $request->input('user_id');

        $result = Medicine::where('id', $id)->update([

        'name'  => $name,
        'supplier_id' => $supplier_id,
        'generic_id' => $generic_id,
        'strength_id' => $strength_id,
        'medicine_type_id' => $medicine_type_id,
        'details' => $details,
        'side_effect' => $side_effect,
        'user_id' => $user_id,
        ]);

            return response([
                'message' => "Medicine Successfully Update"
            ],200); // States Code

        }
        catch(Exception $exception){
            return response([
                'message' => $exception->getMessage()
            ],400);
        }


    }
}
