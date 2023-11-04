<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsLocalrequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_localrequests', function (Blueprint $table) {
            $table->bigIncrements('ai_localrequest_id');
            $table->integer('localrequest_ai_table_id');
            $table->integer('localrequest_ai_request_id');
            $table->string('tx_localrequest_code');
            $table->string('tx_localrequest_title');
            $table->string('tx_localrequest_slug');
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
        Schema::dropIfExists('cs_localrequests');
    }
}
