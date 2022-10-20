<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function allDoctors()
    {
        $doctors = Doctor::all();

        return $doctors;
    }

    public function addDoctor(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $department_id = $request->input('department_id');
        $designation_id = $request->input('designation_id');
        $dob = $request->input('dob');
        $about_me = $request->input('about_me');
        $image = $request->input('image');
        $experience = $request->input('experience');
        $speciality = $request->input('speciality');
        $degrees = $request->input('degrees');
        $user_id = $request->input('user_id');

        $result = Doctor::insert([

            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'department_id' => $department_id,
            'designation_id' => $designation_id,
            'dob' => $dob,
            'about_me' => $about_me,
            'image' => $image,
            'experience' => $experience,
            'speciality' => $speciality,
            'degrees' => $degrees,
            'user_id' => $user_id, 

        ]);

        return $result;
    }

    public function updateDoctor(Request $request)
    {
        $id = $request->id;
        
        $name = $request->input('name');
        $email = $request->input('email');
        $phone = $request->input('phone');
        $department_id = $request->input('department_id');
        $designation_id = $request->input('designation_id');
        $dob = $request->input('dob');
        $about_me = $request->input('about_me');
        $image = $request->input('image');
        $experience = $request->input('experience');
        $speciality = $request->input('speciality');
        $degrees = $request->input('degrees');
        $user_id = $request->input('user_id');

        $result = Doctor::where('id', $id)->update([

            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'department_id' => $department_id,
            'designation_id' => $designation_id,
            'dob' => $dob,
            'about_me' => $about_me,
            'image' => $image,
            'experience' => $experience,
            'speciality' => $speciality,
            'degrees' => $degrees,
            'user_id' => $user_id, 

        ]);

        return $result;
    }
}
