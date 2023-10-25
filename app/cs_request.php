<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cs_request extends Model
{
    protected $primaryKey = 'ai_request_id';
}


// tx_request_status => [0: anulado, 1: no recibido, 2: confirmado, 3: listo, 4: cerrado]


