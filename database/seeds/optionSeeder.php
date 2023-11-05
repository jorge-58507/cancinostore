<?php

use Illuminate\Database\Seeder;

use App\cs_option;

class optionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tm = new cs_option;
        $tm->tx_option_title = 'URL';
        $tm->tx_option_value = '';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'TITULO';
        $tm->tx_option_value = 'Jade Café';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'RUC';
        $tm->tx_option_value = '155732387-2-2023';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'DV';
        $tm->tx_option_value = '14';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'DIRECCION';
        $tm->tx_option_value = 'Boulevard Penonomé, Feria, Local #50';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'TELEFONO';
        $tm->tx_option_value = '909-7100';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'CEL';
        $tm->tx_option_value = '6890-7358';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'EMAIL';
        $tm->tx_option_value = 'jadecoffeshop@gmail.com';
        $tm->save();

        $tm = new cs_option;
        $tm->tx_option_title = 'TAX';
        $tm->tx_option_value = 7;
        $tm->save();
    }
}
