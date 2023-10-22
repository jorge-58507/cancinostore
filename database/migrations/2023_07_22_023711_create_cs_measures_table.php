<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsMeasuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_measures', function (Blueprint $table) {
            $table->bigIncrements('ai_measure_id');
            $table->integer('measure_ai_user_id');
            $table->string('tx_measure_value');
            $table->integer('tx_measure_status');
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
        Schema::dropIfExists('cs_measures');
    }
}
