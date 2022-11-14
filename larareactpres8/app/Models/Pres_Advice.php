<?php

namespace App\Models;

use App\Models\Prescription;
use App\Models\GeneralAdvice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pres_Advice extends Model
{
    use HasFactory;

    protected $table= 'pres_advice';

    protected $guarded = ['id', 'created_at','updated_at'];

    protected $with =['advice','prescription'];

    public function advice()
    {
    	return $this->belongsTo(GeneralAdvice::class, 'advice_id','id');
    }

    public function prescription()
    {
    	return $this->belongsTo(Prescription::class, 'prescription_id','id');
    }
}
