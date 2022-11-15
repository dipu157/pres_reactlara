<?php

namespace App\Models;

use App\Models\Patient;
use App\Models\Doctor;
use App\Models\Pres_Medicine;
use App\Models\Pres_Investigation;
use App\Models\Pres_Advice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    use HasFactory;

    protected $table= 'prescriptions';

    protected $guarded = ['id', 'created_at','updated_at'];


    // protected $with =['patient','doctor','pmedicine','pinvestigation','padvice'];
   // protected $with =['patient','doctor'];

    public function patient()
    {
    	return $this->belongsTo(Patient::class, 'patient_id','id');
    }

    public function doctor()
    {
    	return $this->belongsTo(Doctor::class, 'doctor_id','id');
    }

    public function pmedicines()
    {
        return $this->hasMany(Pres_Medicine::class);
    }

    public function pinvestigations()
    {
        return $this->hasMany(Pres_Investigation::class);
    }

    public function padvices()
    {
        return $this->hasMany(Pres_Advice::class);
    }

}
