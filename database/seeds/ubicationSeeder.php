<?php

use Illuminate\Database\Seeder;
use App\cs_ubication;

class ubicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $model = new cs_ubication;
        $model->tx_ubication_value = 'Sala 1';
        $model->tx_ubication_prefix = 'S1';
        $model->tx_ubication_status = 1;
        $model->save();
    }
}
