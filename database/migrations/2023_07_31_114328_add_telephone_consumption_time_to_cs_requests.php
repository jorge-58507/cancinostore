<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTelephoneConsumptionTimeToCsRequests extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cs_requests', function (Blueprint $table) {
            $table->string('tx_request_telephone')->after('tx_request_paymentmethod');
            $table->string('tx_request_consumption')->after('tx_request_telephone');
            $table->string('tx_request_time')->after('tx_request_consumption');
            $table->string('tx_request_observation')->after('tx_request_time')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cs_requests', function (Blueprint $table) {
            $table->dropColumn('tx_request_telephone');
            $table->dropColumn('tx_request_consumption');
            $table->dropColumn('tx_request_time');
            $table->dropColumn('tx_request_observation');
        });
    }
}
