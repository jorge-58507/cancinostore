<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class cs_request extends Model
{
    protected $primaryKey = 'ai_request_id';

    protected function serializeDate(DateTimeInterface $date)

    {

        return $date->format('Y-m-d H:i:s');

    }
}


// tx_request_status => [0: anulado, 1: no recibido, 2: confirmado, 3: listo, 4: cerrado]


