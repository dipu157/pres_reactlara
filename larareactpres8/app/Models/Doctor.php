<?php

namespace App\Models;

use App\Models\Department;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    protected $table = 'doctors';
    protected $guarded = ['id', 'created_at','updated_at'];
    protected $fillable = [
        'name',
        'email',
        'phone',
        'department_id',
        'designation_id',
        'dob',
        'blood_group',
        'about_me',
        'image',
        'experience',
        'speciality',
        'degrees',
        'user_id',
        'status',
    ];


    protected $with =['department','designation'];
    public function department()
    {
    	return $this->belongsTo(Department::class, 'department_id','id');
    }

    public function designation()
    {
    	return $this->belongsTo(Designation::class, 'designation_id','id');
    }
}
