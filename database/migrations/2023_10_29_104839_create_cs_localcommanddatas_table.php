<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsLocalcommanddatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_localcommanddatas', function (Blueprint $table) {
            $table->bigIncrements('ai_localcommanddata_id');

            $table->integer('localcommanddata_ai_user_id');
            $table->integer('localcommanddata_ai_localrequest_id');
            $table->integer('localcommanddata_ai_presentation_id');
            $table->integer('localcommanddata_ai_article_id');

            $table->float('tx_localcommanddata_quantity');
            $table->float('tx_localcommanddata_price');
            $table->float('tx_localcommanddata_taxrate');
            $table->float('tx_localcommanddata_discountrate');

            $table->longtext('tx_localcommanddata_description');
            $table->longtext('tx_localcommanddata_presentation');
            $table->longtext('tx_localcommanddata_option')->nullable();
            $table->longtext('tx_localcommanddata_recipe');

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
        Schema::dropIfExists('cs_localcommanddatas');
    }
}
