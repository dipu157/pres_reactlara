<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function allSupplier()
    {
        $suppliers = Supplier::all();

        return $suppliers;
    }

    public function addSupplier(Request $request)
    {

        try{

            $name = $request->input('name');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $address = $request->input('address');
            $contact_person_details = $request->input('contact_person_details');
            $user_id = $request->input('user_id');

            $result = Supplier::insert([

                'supplier_code' => 'S'. rand(1000,5000),
                'name' => $name,
                'email' => $email,
                'phone' => $phone,
                'address' => $address,
                'contact_person_details' => $contact_person_details,
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

    public function updateSupplier(Request $request)
    {
        try{

        $id = $request->id;

        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $address = $request->input('address');
        $contact_person_details = $request->input('contact_person_details');
        $user_id = $request->input('user_id');

        $result = Supplier::where('id', $id)->update([

            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'address' => $address,
            'contact_person_details' => $contact_person_details,
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
