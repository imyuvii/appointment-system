<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->datetime('start_time');
            $table->datetime('end_time');
            $table->string('notes')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
