<?php

namespace App\Models;


use App\Models\MedicineType;
use App\Models\Strength;
use App\Models\Supplier;
use App\Models\Generic;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'medicines';
    protected $guarded = ['id', 'created_at','updated_at'];
    protected $fillable = [
        'medicine_code',
        'name',
        'supplier_id',
        'generic_id',
        'strength_id',
        'medicine_type_id',
        'details',
        'side_effect',
        'favourite',
        'user_id',
        'status',
    ];

    protected $with =['medicinetype','strength','generic','supplier'];

    public function medicinetype()
    {
    	return $this->belongsTo(MedicineType::class, 'medicine_type_id','id');
    }

    public function strength()
    {
    	return $this->belongsTo(Strength::class, 'strength_id','id');
    }

    public function generic()
    {
    	return $this->belongsTo(Generic::class, 'generic_id','id');
    }

    public function supplier()
    {
    	return $this->belongsTo(Supplier::class, 'supplier_id','id');
    }
}
