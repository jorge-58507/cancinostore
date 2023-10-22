<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsCommanddatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_commanddatas', function (Blueprint $table) {
            $table->bigIncrements('ai_commanddata_id');
            $table->integer('commanddata_ai_user_id');
            $table->integer('commanddata_ai_request_id');
            $table->integer('commanddata_ai_presentation_id');
            $table->integer('commanddata_ai_article_id');
            $table->float('tx_commanddata_quantity',15,5);
            $table->float('tx_commanddata_price');
            $table->float('tx_commanddata_taxrate');
            $table->float('tx_commanddata_discountrate');
            $table->longtext('tx_commanddata_description');
            $table->integer('tx_commanddata_modified');
            $table->integer('tx_commanddata_status')->default(1);
            $table->longtext('tx_commanddata_option')->defaut('');
            $table->longtext('tx_commanddata_recipe');
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
        Schema::dropIfExists('cs_commanddatas');
    }
}
