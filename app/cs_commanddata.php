<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;


class cs_commanddata extends Model
{
    protected function serializeDate(DateTimeInterface $date)

    {

        return $date->format('Y-m-d H:i:s');

    }
    //
}
