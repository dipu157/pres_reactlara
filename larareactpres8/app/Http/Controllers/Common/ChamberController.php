<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Models\ChamberAddress;
use Illuminate\Http\Request;

class ChamberController extends Controller
{
    public function index()
    {
        $chambers = ChamberAddress::all();

        return $chambers;
    }

    public function storechamber(Request $request)
    {

        try{
            $name = $request->input('name');
            $address = $request->input('address');
            $phone = $request->input('phone');
            $email = $request->input('email');
            $city = $request->input('city');
            $country = $request->input('country');
            $website = $request->input('website');
            $logo = $request->input('logo');
            $user_id = $request->input('user_id');

            $result = ChamberAddress::insert([
                'name' => $name,
                'address' => $address,
                'phone' => $phone,
                'email' => $email,
                'city' => $city,
                'country' => $country,
                'website' => $website,
                'logo' => $logo,
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
