<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50);
            $table->string('email',20)->nullable();;
            $table->string('phone',20)->nullable();;
            $table->integer('department_id')->unsigned();
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('RESTRICT');
            $table->integer('designation_id')->unsigned();
            $table->foreign('designation_id')->references('id')->on('designations')->onDelete('RESTRICT');
            $table->date('dob')->nullable();
            $table->char('blood_group',30)->nullable();
            $table->string('about_me',250)->nullable();;
            $table->string('image',200)->nullable();;
            $table->string('experience',200)->nullable();;
            $table->string('speciality',200)->nullable();;
            $table->string('degrees',200);            
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('RESTRICT');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctors');
    }
}
