<?php

use Illuminate\Database\Seeder;
use App\cs_presentation;

class presentationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'No presentacion';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'Plato';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'Botella';
        $tm->tx_presentation_status	= 1;
        $tm->save();


        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'Copa';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'Caja';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= 'Bandeja';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= '4oz';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= '8oz';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= '12oz';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= '16oz';
        $tm->tx_presentation_status	= 1;
        $tm->save();

        $tm = new cs_presentation;
        $tm->presentation_ai_user_id = 1;		
        $tm->tx_presentation_value	= '20oz';
        $tm->tx_presentation_status	= 1;
        $tm->save();
    }
}
