<?php

namespace App\Http\Controllers\Medicine;

use App\Http\Controllers\Controller;
use App\Models\Duration;
use Illuminate\Http\Request;

class DurationController extends Controller
{
    public function allDuration()
    {
        $durations = Duration::all();

        return $durations;
    }

    public function addDuration(Request $request)
    {
        try{
            $duration = $request->input('duration');
            $remarks = $request->input('remarks');
            $user_id = $request->input('user_id');

            $result = Duration::insert([
                'duration' => $duration,
                'remarks' => $remarks,
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
}
