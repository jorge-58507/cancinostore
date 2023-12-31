<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCsArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cs_articles', function (Blueprint $table) {
            $table->bigIncrements('ai_article_id');
            $table->integer('article_ai_user_id');
            $table->integer('article_ai_category_id');
            $table->string('tx_article_code');
            $table->string('tx_article_value');
            $table->string('tx_article_description');
            $table->longtext('tx_article_option')->default('{}');
            $table->integer('tx_article_promotion')->default(0);
            $table->float('tx_article_taxrate');
            $table->float('tx_article_discountrate');
            $table->string('tx_article_thumbnail')->nullable();
            $table->string('tx_article_status')->default(0);
            $table->string('tx_article_slug');
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
        Schema::dropIfExists('cs_articles');
    }
}
