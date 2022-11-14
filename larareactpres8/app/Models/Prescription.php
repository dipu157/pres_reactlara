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

    protected $fillable = [
    	'patient_id',
        'doctor_id',
        'date',
        'bp',
        'pulse',
        'temp',
        'weight',
        'spo2',
        'sugar',
        'complain',
        'diagnosis',
        'past_history',
        'drug_history',
        'follow_up',
        'others1',
        'other2',
        'others3',
        'others4',
        'others5',
        'user_id',
    ];

    // protected $with =['patient','doctor','pmedicine','pinvestigation','padvice'];
    protected $with =['patient','doctor'];

    public function patient()
    {
    	return $this->belongsTo(Patient::class, 'patient_id','id');
    }

    public function doctor()
    {
    	return $this->belongsTo(Doctor::class, 'doctor_id','id');
    }

    // public function pmedicine()
    // {
    //     return $this->belongsToMany(Pres_Medicine::class);
    // }

    // public function pinvestigation()
    // {
    //     return $this->hasMany(Pres_Investigation::class);
    // }

    // public function padvice()
    // {
    //     return $this->hasMany(Pres_Advice::class);
    // }

}
