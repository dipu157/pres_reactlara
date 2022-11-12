<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pres_Investigation extends Model
{
    use HasFactory;

    protected $table= 'pres_investigations';

    protected $guarded = ['id', 'created_at','updated_at'];

}
