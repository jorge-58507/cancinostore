<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDescriptionCsArticleproducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cs_articleproducts', function (Blueprint $table) {
            $table->string('tx_articleproduct_value')->after('articleproduct_ai_user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cs_articleproducts', function (Blueprint $table) {
            $table->dropColumn('tx_articleproduct_value');
        });
    }
}
