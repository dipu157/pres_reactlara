<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePresMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pres_medicines', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('prescription_id')->unsigned();
            $table->foreign('prescription_id')->references('id')->on('prescriptions')->onDelete('RESTRICT');
            $table->integer('medicine_id')->unsigned();
            $table->foreign('medicine_id')->references('id')->on('medicines')->onDelete('RESTRICT');
            $table->string('dose',50)->nullable();
            $table->string('duration',50)->nullable();
            $table->string('m_advice',50)->nullable();
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('RESTRICT');
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
        Schema::dropIfExists('pres__medicines');
    }
}
