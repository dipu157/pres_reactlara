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
        $name = $request->input('name');
        $user_id = $request->input('user_id');

        $result = Strength::insert([
            'name' => $name,
            'user_id' => $user_id,
        ]);

        return $result;
    }

    public function updateStrength(Request $request)
    {
        $id = $request->id;
        
        $name = $request->input('name');
        $user_id = $request->input('user_id');

        $result = Strength::where('id', $id)->update([
            'name' => $name,
            'user_id' => $user_id,
        ]);

        return $result;
    }
}
