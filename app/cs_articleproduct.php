<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class cs_articleproduct extends Model
{
    protected $primaryKey = 'ai_articleproduct_id';

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

}
