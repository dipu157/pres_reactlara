<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('patient_code',100)->unique();
            $table->string('first_name',50)->nullable();
            $table->string('last_name',50)->nullable();
            $table->string('full_name',50);
            $table->string('email',20)->nullable();
            $table->string('phone',20)->nullable();
            $table->string('address',150);
            $table->string('city',30)->nullable();
            $table->string('state',30)->nullable();
            $table->string('post_code',15)->nullable();
            $table->string('district',30)->nullable();
            $table->string('nid',30)->nullable();
            $table->date('dob')->nullable();
            $table->char('blood_group',30)->nullable();
            $table->char('gender',10);
            $table->string('image',200)->nullable();         
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
        Schema::dropIfExists('patients');
    }
}
