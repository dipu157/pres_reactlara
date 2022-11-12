<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pres_Medicine extends Model
{
    use HasFactory;

    protected $table= 'pres_medicines';

    protected $guarded = ['id', 'created_at','updated_at'];

    protected $fillable = [
    	'prescription_id',
        'medicine_id',
        'dose',
        'duration',
        'm_advice',
        'user_id',
    ];
}
