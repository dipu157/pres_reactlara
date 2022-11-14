<?php

namespace App\Models;

use App\Models\Prescription;
use App\Models\Investigation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pres_Investigation extends Model
{
    use HasFactory;

    protected $table= 'pres_investigations';

    protected $guarded = ['id', 'created_at','updated_at'];


    protected $with =['investigation','prescription'];

    public function investigation()
    {
    	return $this->belongsTo(Investigation::class, 'investigation_id','id');
    }

    public function prescription()
    {
    	return $this->belongsTo(Prescription::class, 'prescription_id','id');
    }

}
