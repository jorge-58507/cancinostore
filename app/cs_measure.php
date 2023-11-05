<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;


class cs_measure extends Model
{
    protected $primaryKey = 'ai_measure_id';
    protected function serializeDate(DateTimeInterface $date)

    {

        return $date->format('Y-m-d H:i:s');

    }
}
