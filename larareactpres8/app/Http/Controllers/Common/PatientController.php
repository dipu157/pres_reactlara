<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function allPatients()
    {
        $patients = Patient::all();

        return $patients;
    }

    public function addPatient(Request $request)
    {

        try{

            $first_name = $request->input('first_name');
            $last_name = $request->input('last_name');
            $full_name = $request->input('full_name');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $address = $request->input('address');
            $city = $request->input('city');
            $state = $request->input('state');
            $post_code = $request->input('post_code');
            $district = $request->input('district');
            $nid = $request->input('nid');
            $dob = $request->input('dob');
            $blood_group = $request->input('blood_group');
            $gender = $request->input('gender');
            $image = $request->input('image');
            $user_id = $request->input('user_id');

            $result = Patient::insert([

                'patient_code' => 'P'. rand(1000,5000),
                'first_name' => $first_name,
                'last_name' => $last_name,
                'full_name' => $full_name,
                'email' => $email,
                'phone' => $phone,
                'address' => $address,
                'city' => $city,
                'state' => $state,
                'post_code' => $post_code,
                'district' => $district,
                'nid' => $nid,
                'dob' => $dob,
                'blood_group' => $blood_group,
                'gender' => $gender,
                'image' => $image,
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

    public function updatepatient(Request $request)
    {

        try{

            $id = $request->id;

            $first_name = $request->input('first_name');
            $last_name = $request->input('last_name');
            $full_name = $request->input('full_name');
            $email = $request->input('email');
            $phone = $request->input('phone');
            $address = $request->input('address');
            $city = $request->input('city');
            $state = $request->input('state');
            $post_code = $request->input('post_code');
            $district = $request->input('district');
            $nid = $request->input('nid');
            $dob = $request->input('dob');
            $blood_group = $request->input('blood_group');
            $gender = $request->input('gender');
            $image = $request->input('image');
            $user_id = $request->input('user_id');

            $result = Patient::where('id', $id)->update([

                'first_name' => $first_name,
                'last_name' => $last_name,
                'full_name' => $full_name,
                'email' => $email,
                'phone' => $phone,
                'address' => $address,
                'city' => $city,
                'state' => $state,
                'post_code' => $post_code,
                'district' => $district,
                'nid' => $nid,
                'dob' => $dob,
                'blood_group' => $blood_group,
                'gender' => $gender,
                'image' => $image,
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
