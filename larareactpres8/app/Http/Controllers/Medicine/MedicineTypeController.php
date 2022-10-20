<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\MedicineType;
use Illuminate\Http\Request;

class MedicineTypeController extends Controller
{
    public function allMedicineTypes()
    {
        $medicineTypes = MedicineType::all();

        return $medicineTypes;
    }

    public function addMedicineTypes(Request $request)
    {
        $name = $request->input('name');
        $short_name = $request->input('short_name');
        $user_id = $request->input('user_id');

        $result = MedicineType::insert([
            'name' => $name,
            'short_name' => $short_name,
            'user_id' => $user_id,
        ]);

        return $result;
    }

    public function updateMedicineTypes(Request $request)
    {
        $id = $request->id;
        
        $name = $request->input('name');
        $short_name = $request->input('short_name');
        $user_id = $request->input('user_id');

        $result = MedicineType::where('id', $id)->update([
            'name' => $name,
            'short_name' => $short_name,
            'user_id' => $user_id,
        ]);

        return $result;
    }
}
