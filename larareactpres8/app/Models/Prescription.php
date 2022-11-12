<?php

namespace App\Models;

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
}
