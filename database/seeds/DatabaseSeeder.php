<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(categorySeeder::class);
        $this->call(measureSeeder::class);
        $this->call(optionSeeder::class);
        $this->call(presentationSeeder::class);
        $this->call(productcategorySeeder::class);
        $this->call(ubicationSeeder::class);
    }
}
