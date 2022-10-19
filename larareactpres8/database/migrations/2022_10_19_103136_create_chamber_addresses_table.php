<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChamberAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chamber_addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',20);
            $table->string('address',100);
            $table->string('phone',20)->nullable();
            $table->string('email',40)->nullable();
            $table->string('city',20)->nullable();
            $table->string('country',20)->nullable();
            $table->string('website',50)->nullable();
            $table->string('logo')->nullable();
            $table->boolean('status')->default(1);
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
        Schema::dropIfExists('chamber_addresses');
    }
}
