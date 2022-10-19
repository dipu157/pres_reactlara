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
}
