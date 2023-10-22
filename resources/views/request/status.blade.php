@extends('layouts.app')
@section('title','Estado del Pedido')
@section('css')
@endsection
@section('content')

  <div class="row">
    <div class="col-sm-12 p-0 text-center">
      <h4>Estado del pedido</h4>
      <input type="hidden" id="request_slug" value="{{ $data['request_info']['tx_request_slug'] }}">
    </div>
  </div>
  <div class="row py-3 d-flex justify-content-center">

    <div class="col-sm-6 text-center">

      <div class="text-center py-2">
        <p>
          <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </p>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div id="status_progress" class="progress-bar progress-bar-striped" style="width: 30%"></div>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="request_pending">Su pedido se ha enviado al restaurante.</li>
        <li class="list-group-item" id="request_confirmed"></li>
        <li class="list-group-item" id="request_ready"></li>
      </ul>
  
      <p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Ver Pedido
        </a>
        <button id="btn_updstatus" class="btn btn-info" type="button">
         Actualizar
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <ol class="list-group">
            @php
              foreach ($data['commanddata'] as $key => $command) {
                $content_recipe = '<ul>';
                foreach (json_decode($command['tx_commanddata_recipe'],true) as $index => $ingredient) {
                  $content_recipe .= `<li><small>${index}</small></li>`;
                }
                $content_recipe .= `</ul>`;

                echo "
                  <li class='list-group-item d-flex justify-content-between align-items-start'>
                    <div class='ms-2 me-auto'>
                      <div class='fw-bold'>".$command['tx_commanddata_quantity']." - ".$command['tx_commanddata_description']." (".$command['tx_presentation_value'].")</div>
                      ".$content_recipe."
                    </div>
                    <span class='badge bg-primary rounded-pill text-truncate'>B/ ".number_format($command['tx_commanddata_price'],2)."</span>
                  </li>
                ";
              }
            @endphp
          </ol>
        </div>
      </div>



    </div>
  </div>

@endsection
@section('javascript')
	<script src="{{ asset('attached/js/request.js') }}"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  <script type="text/javascript">
    var cls_request = new class_request();

    var raw_requestinfo = JSON.parse('<?php echo json_encode($data['request_info']) ?>');
    cls_request.set_status(raw_requestinfo);

    document.getElementById('btn_updstatus').addEventListener('click', () => {  cls_request.get_status(document.getElementById('request_slug').value);  });
  </script>


@endsection