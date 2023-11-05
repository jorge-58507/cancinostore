<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;


class cs_table extends Model
{
    protected $primaryKey = 'ai_table_id';
    protected function serializeDate(DateTimeInterface $date)

    {

        return $date->format('Y-m-d H:i:s');

    }
}
