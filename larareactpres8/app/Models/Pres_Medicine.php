<?php

namespace App\Models;

use App\Models\Prescription;
use App\Models\Medicine;

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

    protected $with =['medicine','prescription'];

    public function medicine()
    {
    	return $this->belongsTo(Medicine::class, 'medicine_id','id');
    }

    public function prescription()
    {
    	return $this->belongsTo(Prescription::class, 'prescription_id','id');
    }
}
