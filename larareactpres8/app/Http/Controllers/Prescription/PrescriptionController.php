<?php

namespace App\Http\Controllers\Prescription;

use App\Http\Controllers\Controller;
use App\Models\Medicine;
use App\Models\Patient;
use App\Models\Prescription;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{

    public function patientById(Request $request)
    {
        $id = $request->search;
        $patient = Patient::query()
            ->where('full_name', 'LIKE', "%{$id}%")
            ->orWhere('phone', 'LIKE', "%{$id}%")
            ->orWhere('patient_code', 'LIKE', "%{$id}%")
            ->limit(10)
            ->get();


        foreach ($patient as $row) {
            $new_row['label'] = htmlentities(stripslashes($row['full_name']));
            $new_row['value'] = htmlentities(stripslashes($row['id']));
            $new_row['p_cont'] = htmlentities(stripslashes($row['phone']));
            $row_set[] = $new_row; //build an array
        }
        echo json_encode($row_set); //format the array into json data

    }

    public function medicineTorow(Request $request)
    {
        $patient_id = $request->patient_id;
        $medicine_id = $request->medicine_id;
        $dose = $request->dose;
        $duration = $request->duration;
        $m_advice = $request->m_advice;

        if (empty($medicine_id)) {
            die();
        }

        if (empty($patient_id)) {
            die();
        }

        $medicines = Medicine::query()
            ->where('id', $medicine_id)
            ->with('medicinetype')
            ->with('strength')
            ->with('generic')
            ->first();

        echo "          <tr class='premove'>
                              <td><input type='hidden' class='medicine_id' value='$medicine_id' name='medicine_id[]'>
                              <input type='text' value='" . $medicines->medicinetype->short_name . $medicines->name . '(' . $medicines->strength->strength . ')' . "' readonly></td>
                              <td><input type='text' class='qty' value='$dose' name='dose[]' readonly>
                              <input type='text'  value='$duration' name='duration[]'></td>
                              <input type='text'  value='$m_advice' name='m_advice[]'></td>
                              <td class='text-nowrap'>
                                <a href='' id='tremove' data-original-title='Close'>
                                  <i class='fa fa-close text-danger'>Delete</i>
                                </a>
                              </td>
                            </tr>";
    }

    public function newPrescription(Request $request)
    {
        date_default_timezone_set("Asia/Dhaka");
        $date  =   date("Y-m-d");
        $user_id = 1;
        $doctor_id = 1;
        $patient_id = 1;

        try {

            $result = Prescription::insert([
                'patient_id' => $patient_id,
                'doctor_id' => $doctor_id,
                'name'  => $request->name,
                'date'  => $date,
                'bp'  => $request->bp,
                'pulse'  => $request->pulse,
                'temp'  => $request->temp,
                'weight'  => $request->weight,
                'spo2'  => $request->spo2,
                'sugar'  => $request->sugar,
                'complain'  => $request->complain,
                'diagnosis'  => $request->diagnosis,
                'past_history'  => $request->past_history,
                'drug_history'  => $request->drug_history,
                'follow_up'  => $request->follow_up,
                'others1'  => $request->others1,
                'others2'  => $request->others2,
                'others3'  => $request->others3,
                'others4'  => $request->others4,
                'others5'  => $request->others5,
                'user_id' => $user_id,
            ]);

            return response([
                'message' => "Successfully Added"
            ], 200); // States Code

        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
