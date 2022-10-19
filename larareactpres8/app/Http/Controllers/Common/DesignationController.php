<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\Designation;
use Illuminate\Http\Request;

class DesignationController extends Controller
{
    public function allDesignations()
    {
        $designations = Designation::all();

        return $designations;
    }

    public function storedesignation(Request $request)
    {

         $result = Designation::insert([
            'designation_code' => rand(1000,5000),
            'name' => $request->input('name'),
            'short_name' => $request->input('short_name'),
            'description' => $request->input('description'),
            'user_id' => $request->input('user_id'),

         ]);
         return $result;
    }
}
