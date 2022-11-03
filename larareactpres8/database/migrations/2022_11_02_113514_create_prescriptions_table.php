<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_id')->unsigned();
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('RESTRICT');
            $table->integer('doctor_id')->unsigned();
            $table->foreign('doctor_id')->references('id')->on('doctors')->onDelete('RESTRICT');
            $table->string('date',50);
            $table->string('bp',50)->nullable();
            $table->string('pulse',50)->nullable();
            $table->string('temp',50)->nullable();
            $table->string('weight',50)->nullable();
            $table->string('spo2',50)->nullable();
            $table->string('sugar',50)->nullable();
            $table->string('complain',200)->nullable();
            $table->string('diagnosis',200)->nullable();
            $table->string('past_history',200)->nullable();
            $table->string('drug_history',200)->nullable();
            $table->string('follow_up',200)->nullable();
            $table->string('others1',200)->nullable();
            $table->string('others2',200)->nullable();
            $table->string('others3',200)->nullable();
            $table->string('others4',200)->nullable();
            $table->string('others5',200)->nullable();
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
        Schema::dropIfExists('prescriptions');
    }
}
