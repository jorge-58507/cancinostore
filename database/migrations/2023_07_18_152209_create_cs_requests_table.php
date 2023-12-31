<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_requests', function (Blueprint $table) {
            $table->bigIncrements('ai_request_id');
            $table->integer('request_ai_table_id')->nullable();
            $table->integer('request_ai_user_id')->nullable();
            $table->integer('request_ai_charge_id')->nullable();
            $table->string('tx_request_code');
            $table->string('tx_request_paymentmethod');
            $table->integer('tx_request_status')->default(0);
            $table->string('tx_request_closedby')->nullable();
            $table->string('tx_request_slug');
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
        Schema::dropIfExists('cs_requests');
    }
}
