@extends('layouts.app')
@section('title','Pedidos')
@section('meta_keywords','crear pedido, create an order, order, caf&eacute;, coffee shop, gourmet coffee, barista, freshly ground coffee')
@section('meta_description','Request page of jadecoffeeshop.com, to make a order')
@section('css')

@endsection
@section('content')

  <!-- Modal -->
  <div class="modal fade" id="commandModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="commandModal_title">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="commandModal_content" class="modal-body">
        </div>
        <div id="commandModal_footer" class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="shopcartModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="shopcartModal_title">Total del pedido.</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="shopcartModal_content" class="modal-body">
        </div>
        <div id="shopcartModal_footer" class="modal-footer">
          <div class="row">
            <div class="col-sm-12">
              <button type="button" id="btn_processCommand" class="btn btn-success btn-lg">Continuar</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12 px-2 text-center text-white d-flex align-items-start flex-column-reverse slide">
      <p><span>Horario de atenci&oacute;n 7:00am a 10:00pm</span></p>
      <h3 class="fw-bold">Pedidos</h3>
    </div>
  </div>
  @if (count($data['lastest']) > 0)
    {{-- MOSTRAR EL LISTADO DE REQUEST PROCESADAS, MOSTRAR LA IMAGEN DE ALGUNA ARTICULO DE ESE PEDIDO, Y AL HACER CLICK ABRIR UN MODAL CON LA INFORMACIO Y UN BOTON QUE AGREGUE EL GRUPO DE ARICULOS --}}
    <div class="row py-3">
      <div class="col-sm-12">
        <h5>Pedidos Anteriores</h5>
      </div>
      <div class="col-sm-12 py-2">
        <div id="container_articlelastest" class="row">
        </div
      </div>
    </div>
  @endif
  <hr>
  <div class="row">
    <div id="container_articlecategory" class="col-sm-12 p-0 h_scrollable px-2" style="height: 10vh">
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 d-none d-lg-block">
    </div>
    <div class="col-md-12 col-lg-6">
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Buscar Art&iacute;culo</span>
        <input type="text" class="form-control" onkeyup="cls_command.filter_articlethumbnail(this.value)">
      </div>
    </div>
  </div>
  <hr>
  <div id="container_articlethumbnail" class="py-1">

  </div>

@endsection
@section('javascript')
	<script src="{{ asset('attached/js/request.js') }}"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  <script type="text/javascript">
    document.getElementById('btn_processCommand').addEventListener('click', () => {  cls_command.save();  });

    var raw_article = JSON.parse('<?php echo json_encode($data['article_list']) ?>');
    var cls_article = new class_article(raw_article);

    var table_info = JSON.parse('<?php echo json_encode($data['table_info']) ?>');
    var cls_command = new class_command(table_info);

    var lastest = JSON.parse('<?php echo json_encode($data['lastest']) ?>');
    var cls_request = new class_request(lastest)

    cls_command.index();
    
  </script>


@endsection