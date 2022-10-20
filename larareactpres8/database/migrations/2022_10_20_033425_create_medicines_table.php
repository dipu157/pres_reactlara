<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('medicine_code',50);
            $table->string('name',50);
            $table->integer('supplier_id')->unsigned();
            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('RESTRICT');
            $table->integer('generic_id')->unsigned();
            $table->foreign('generic_id')->references('id')->on('generics')->onDelete('RESTRICT');
            $table->integer('strength_id')->unsigned();
            $table->foreign('strength_id')->references('id')->on('strengths')->onDelete('RESTRICT');
            $table->integer('medicine_type_id')->unsigned();
            $table->foreign('medicine_type_id')->references('id')->on('medicine_types')->onDelete('RESTRICT');
            $table->string('details',150)->nullable();
            $table->string('side_effect',50)->nullable();
            $table->boolean('favourite')->default(1);
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
        Schema::dropIfExists('medicines');
    }
}
