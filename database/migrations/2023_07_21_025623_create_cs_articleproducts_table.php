<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsArticleproductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_articleproducts', function (Blueprint $table) {
            $table->bigIncrements('ai_articleproduct_id');
            $table->integer('articleproduct_ai_user_id');
            $table->integer('articleproduct_ai_article_id');
            $table->integer('articleproduct_ai_presentation_id');
            $table->longtext('tx_articleproduct_ingredient');
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
        Schema::dropIfExists('cs_articleproducts');
    }
}
