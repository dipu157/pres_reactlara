<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePresAdviceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pres_advice', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('prescription_id')->unsigned();
            $table->foreign('prescription_id')->references('id')->on('prescriptions')->onDelete('RESTRICT');
            $table->integer('advice_id')->unsigned();
            $table->foreign('advice_id')->references('id')->on('general_advice')->onDelete('RESTRICT');
            $table->string('advice',200)->nullable();
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
        Schema::dropIfExists('pres__advice');
    }
}
