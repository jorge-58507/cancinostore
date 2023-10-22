// JavaScript Document
/*DEVELOPED BY JORGE SALDAÑA*/
// ___________________________
// _____****_________****_____
// ____******_______******____
// __***********_***********__
// __***********************__
// __*****_____________*****__
// ___****_____________****___
// ___***____*******____***___
// ___***____**___***___***___
// ____**____*******____**____
// ____**____**_________**____
// ____*_____**__________*____
// ___________________________
/*####MOUSTACHED##PILOT####*/

// class class_table {
//   constructor(raw_table) {
//     this.table_list = raw_table;
//   }
//   render(table_list) {
//     var content_tab = '';
//     var ubication_str = '';
//     var content_tab_container = '';
//     table_list.map((table, index) => {
//       if (table.tx_ubication_value != ubication_str) {
//         content_tab += (index === 0) ? `
//           <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#${table.tx_ubication_prefix}" type="button" role="tab" aria-controls="nav-home" aria-selected="true">${table.tx_ubication_value}</button>
//         `: `
//           <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#${table.tx_ubication_prefix}" type="button" role="tab" aria-controls="nav-home" aria-selected="true">${table.tx_ubication_value}</button>
//         `;
//         ubication_str = table.tx_ubication_value;
//         if (index != 0) {
//           content_tab_container += `
//             </div>
//           </div>
//           `;
//         }
//         content_tab_container += (index === 0) ? `
//           <div class="tab-pane fade show active" id="${table.tx_ubication_prefix}" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
//             <div class="row">
//         `: `
//           <div class="tab-pane fade" id="${table.tx_ubication_prefix}" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
//             <div class="row">
//         `;
//       }
//       if (table.tx_table_type === 2) {
//         var img_button = (cls_general.is_empty_var(table['tx_table_image']) === 1) ? `<img src="attached/image/table/${table['tx_table_image']}" width="70px"></img>` : `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.001 58.001" width="70" height="70" xml:space="preserve">
//             <path style="fill:#88C057;" d="M29,19.5c-0.552,0-1-0.447-1-1v-8c0-0.553,0.448-1,1-1s1,0.447,1,1v8C30,19.053,29.552,19.5,29,19.5z"></path><path style="fill:#88C057;" d="M29,17.5c-0.256,0-0.512-0.098-0.707-0.293l-2-2c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l2,2c0.391,0.391,0.391,1.023,0,1.414C29.512,17.403,29.256,17.5,29,17.5z"></path><path style="fill:#88C057;" d="M29,15.5c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2-2c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2,2C29.512,15.403,29.256,15.5,29,15.5z"></path><path style="fill:#553323;" d="M57,54.5c-0.426,0-0.82-0.273-0.954-0.702l-5-16c-0.165-0.526,0.129-1.088,0.656-1.252c0.525-0.166,1.088,0.128,1.253,0.656l5,16c0.165,0.526-0.129,1.088-0.656,1.252C57.199,54.486,57.099,54.5,57,54.5z"></path><path style="fill:#553323;" d="M47.001,54.5c-0.081,0-0.162-0.01-0.244-0.03c-0.536-0.134-0.861-0.677-0.728-1.212l4-16c0.135-0.536,0.68-0.86,1.213-0.728c0.536,0.134,0.861,0.677,0.728,1.212l-4,16C47.857,54.198,47.449,54.5,47.001,54.5z"></path><path style="fill:#553323;" d="M11,54.5c-0.426,0-0.82-0.273-0.954-0.702l-5-16c-0.165-0.526,0.129-1.088,0.656-1.252c0.525-0.166,1.088,0.128,1.253,0.656l5,16c0.165,0.526-0.129,1.088-0.656,1.252C11.199,54.486,11.099,54.5,11,54.5z"></path><path style="fill:#553323;" d="M1.001,54.5c-0.081,0-0.162-0.01-0.244-0.03c-0.536-0.134-0.861-0.677-0.728-1.212l4-16c0.134-0.536,0.678-0.86,1.213-0.728c0.536,0.134,0.861,0.677,0.728,1.212l-4,16C1.857,54.198,1.449,54.5,1.001,54.5z"></path><path style="fill:#C7CAC7;" d="M18,53.5h22c-4.971,0-9-4.029-9-9v-9h3v-4H24v4h3v9C27,49.471,22.971,53.5,18,53.5z"></path><path style="fill:#553323;" d="M48.043,27.5H9.958c1.152,1.147,2.091,2.504,2.779,4h32.526C45.952,30.004,46.89,28.648,48.043,27.5z"></path><rect x="13" y="24.5" style="fill:#C7CAC7;" width="6" height="3"></rect><path style="fill:#C7CAC7;" d="M21,25.5H11c-0.552,0-1-0.447-1-1s0.448-1,1-1h10c0.552,0,1,0.447,1,1S21.552,25.5,21,25.5z"></path><rect x="39" y="24.5" style="fill:#C7CAC7;" width="6" height="3"></rect><path style="fill:#C7CAC7;" d="M47,25.5H37c-0.552,0-1-0.447-1-1s0.448-1,1-1h10c0.552,0,1,0.447,1,1S47.552,25.5,47,25.5z"></path><path style="fill:#C7CAC7;" d="M26.025,18.5C25.39,20.093,25,20.192,25,22.5c0,4.97,1.791,5,4,5s4-0.03,4-5c0-2.308-0.39-2.407-1.025-4H26.025z"></path><path style="fill:#DD352E;" d="M29,3.5h-3v4c0,1.65,1.35,3,3,3V3.5z"></path><path style="fill:#B02721;" d="M29,4.5h3v3c0,1.65-1.35,3-3,3V4.5z"></path><path style="fill:#BFA380;" d="M14,37.5H4.366C1.955,37.5,0,35.546,0,33.135V23.5h0.274C7.855,23.5,14,29.646,14,37.226V37.5z"></path><path style="fill:#BFA380;" d="M44,37.5h9.634c2.411,0,4.366-1.955,4.366-4.366V23.5h-0.274C50.146,23.5,44,29.646,44,37.226V37.5z"></path><path style="fill:#839594;" d="M44,54.5H14c-0.552,0-1-0.447-1-1s0.448-1,1-1h30c0.552,0,1,0.447,1,1S44.552,54.5,44,54.5z"></path><rect x="24" y="32.5" style="fill:#839594;" width="10" height="3"></rect><path style="fill:#E7ECED;" d="M30,52.5h-3l0.112-2.014c0.033-0.591,0.172-1.167,0.349-1.732C27.818,47.62,28,46.436,28,45.244V35.5h1v9.744c0,1.192,0.182,2.376,0.538,3.511c0.177,0.565,0.316,1.141,0.349,1.732L30,52.5z"></path>
//           </svg>`;
//         content_tab_container += `
//         <div class="col-sm-6 col-lg-3 text-center">
//           <button class="btn btn-success btn-lg my_20" onclick="cls_request.showByTable('${table.tx_table_slug}','${table.tx_table_type}');" style="width: 120px">
//             ${img_button}<br/>
//             <p class="fs-6 mb_0 text-truncate">${table.tx_table_value}</p>
//           </button>
//         </div>`;
//       } else {
//         var img_button = (cls_general.is_empty_var(table['tx_table_image']) === 1) ? `<img src="attached/image/table/${table['tx_table_image']}" width="70px"></img>` : `<svg height="70" width="70" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
//             <g id="SVGRepo_bgCarrier" stroke-width="0"/>
//             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
//             <g id="SVGRepo_iconCarrier"> <path style="fill:#025037;" d="M406.261,155.826h-11.13V11.13h11.13V155.826z M261.565,11.13h-11.13v144.696h11.13V11.13z M116.87,11.13h-11.13v144.696h11.13V11.13z"/> <path style="fill:#F7F2CD;" d="M467.478,278.261H333.913l55.652-133.565h22.261L467.478,278.261z M267.13,144.696H244.87 l-55.652,133.565h133.565L267.13,144.696z M122.435,144.696h-22.261L44.522,278.261h133.565L122.435,144.696z"/> <path style="fill:#FFFCE3;" d="M446.609,278.261h-91.826l40.812-122.435h10.203L446.609,278.261z M261.101,155.826h-10.203 l-40.811,122.435h91.826L261.101,155.826z M116.405,155.826h-10.203L65.391,278.261h91.826L116.405,155.826z"/> <path style="fill:#F5D470;" d="M369.212,155.826c-1.231-3.483-1.908-7.227-1.908-11.13c0-18.442,14.949-33.391,33.391-33.391 s33.391,14.949,33.391,33.391c0,3.903-0.677,7.648-1.908,11.13H369.212z M287.484,155.826c1.231-3.483,1.908-7.227,1.908-11.13 c0-18.442-14.949-33.391-33.391-33.391s-33.391,14.949-33.391,33.391c0,3.903,0.677,7.648,1.908,11.13H287.484z M142.788,155.826 c1.231-3.483,1.908-7.227,1.908-11.13c0-18.442-14.949-33.391-33.391-33.391s-33.391,14.949-33.391,33.391 c0,3.903,0.677,7.648,1.908,11.13H142.788z"/> <path style="fill:#D19B3F;" d="M434.087,144.696c0,3.903-0.677,7.648-1.908,11.13h-20.353v-11.13c0-6.147-4.983-11.13-11.13-11.13 c-6.147,0-11.13,4.983-11.13,11.13v11.13h-20.353c-1.231-3.483-1.908-7.227-1.908-11.13c0-18.442,14.949-33.391,33.391-33.391 S434.087,126.254,434.087,144.696z M256,111.304c-18.442,0-33.391,14.949-33.391,33.391c0,3.903,0.677,7.648,1.908,11.13h20.353 v-11.13c0-6.147,4.983-11.13,11.13-11.13s11.13,4.983,11.13,11.13v11.13h20.353c1.231-3.483,1.908-7.227,1.908-11.13 C289.391,126.254,274.442,111.304,256,111.304z M111.304,111.304c-18.442,0-33.391,14.949-33.391,33.391 c0,3.903,0.677,7.648,1.908,11.13h20.353v-11.13c0-6.147,4.983-11.13,11.13-11.13c6.147,0,11.13,4.983,11.13,11.13v11.13h20.353 c1.231-3.483,1.908-7.227,1.908-11.13C144.696,126.254,129.746,111.304,111.304,111.304z"/> <path style="fill:#57544C;" d="M500.87,22.261H11.13C4.983,22.261,0,17.278,0,11.13l0,0C0,4.983,4.983,0,11.13,0H500.87 C507.017,0,512,4.983,512,11.13l0,0C512,17.278,507.017,22.261,500.87,22.261z"/> <path style="fill:#D3C6A8;" d="M434.087,489.739L434.087,489.739c0,12.295-9.966,22.261-22.261,22.261H100.174 c-12.295,0-22.261-9.966-22.261-22.261l0,0c0-12.295,9.966-22.261,22.261-22.261h311.652 C424.121,467.478,434.087,477.444,434.087,489.739z"/> <path style="fill:#CA4653;" d="M478.609,467.478H33.391V267.13h445.217V467.478z"/> <path style="fill:#323030;" d="M500.87,478.609H11.13c-6.147,0-11.13-4.983-11.13-11.13l0,0c0-6.147,4.983-11.13,11.13-11.13H500.87 c6.147,0,11.13,4.983,11.13,11.13l0,0C512,473.626,507.017,478.609,500.87,478.609z M512,267.13L512,267.13 c0-6.147-4.983-11.13-11.13-11.13H11.13C4.983,256,0,260.983,0,267.13l0,0c0,6.147,4.983,11.13,11.13,11.13H500.87 C507.017,278.261,512,273.278,512,267.13z"/> <path style="fill:#C6984F;" d="M125.217,500.87h-22.261l38.957-166.957h22.261L125.217,500.87z M347.826,333.913h-22.261 L286.609,500.87h22.261L347.826,333.913z"/> <path style="fill:#AA8144;" d="M164.174,333.913h22.261l38.957,166.957H203.13L164.174,333.913z M386.783,500.87h22.261 l-38.957-166.957h-22.261L386.783,500.87z"/> <path style="fill:#025037;" d="M208.696,356.174h-89.043c-6.147,0-11.13-4.983-11.13-11.13v-22.261c0-6.147,4.983-11.13,11.13-11.13 h89.043c6.147,0,11.13,4.983,11.13,11.13v22.261C219.826,351.191,214.843,356.174,208.696,356.174z M403.478,345.043v-22.261 c0-6.147-4.983-11.13-11.13-11.13h-89.043c-6.147,0-11.13,4.983-11.13,11.13v22.261c0,6.147,4.983,11.13,11.13,11.13h89.043 C398.495,356.174,403.478,351.191,403.478,345.043z"/> <path style="fill:#D3C6A8;" d="M108.522,322.783L108.522,322.783c0-6.147,4.983-11.13,11.13-11.13h89.043 c6.147,0,11.13,4.983,11.13,11.13l0,0H108.522z M403.478,322.783L403.478,322.783c0-6.147-4.983-11.13-11.13-11.13h-89.043 c-6.147,0-11.13,4.983-11.13,11.13l0,0H403.478z"/> <path style="fill:#92393C;" d="M66.783,256c0,6.147-4.983,11.13-11.13,11.13h-11.13c-6.147,0-11.13-4.983-11.13-11.13v-33.391 h33.391V256z"/> <path style="fill:#DB6D53;" d="M50.087,256L50.087,256c-3.073,0-5.565-2.492-5.565-5.565v-27.826h11.13v27.826 C55.652,253.508,53.16,256,50.087,256z"/> <path style="fill:#C6984F;" d="M178.087,250.435v11.13c0,3.073-2.492,5.565-5.565,5.565h-66.783c-3.073,0-5.565-2.492-5.565-5.565 v-11.13c0-3.073,2.492-5.565,5.565-5.565h66.783C175.595,244.87,178.087,247.362,178.087,250.435z"/> <path style="fill:#AA8144;" d="M178.087,250.435V256h-77.913v-5.565c0-3.073,2.492-5.565,5.565-5.565h66.783 C175.595,244.87,178.087,247.362,178.087,250.435z"/> </g>
//           </svg>
//         `;
//         content_tab_container += `
//         <div class="col-sm-6 col-lg-3 text-center">
//           <button class="btn btn-success btn-lg my_20" onclick="cls_request.showByTable('${table.tx_table_slug}','${table.tx_table_type}');" style="width: 120px">
//             ${img_button}<br/>
//             <p class="fs-6 mb_0 text-truncate">${table.tx_table_value}</p>
//           </button>
//         </div>`;
//       }
//     });
//     content_tab_container += `</div>`;
//     document.getElementById('nav-tab').innerHTML = content_tab;
//     document.getElementById('nav-tabContent').innerHTML = content_tab_container;
//   }
// }
// class class_request {
//   constructor(open_request, closed_request, canceled_request) {
//     this.open_request = open_request;
//     this.closed_request = closed_request;
//     this.canceled_request = canceled_request;
//   }
//   index() {
//     var content = `
//       <div class="col-lg-7">
//         <div class="row">
//           <div class="col-xs-12 v_scrollable bb_1 border_gray" style="height: 100vh;">
//             <nav>
//               <div class="nav nav-tabs" id="nav-tab" role="tablist">
//               </div>
//             </nav>
//             <div class="tab-content" id="nav-tabContent">
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="col-lg-5">
//         <div class="row" style="height: 15vh">
//           <h5>Pedidos</h5>
//           <div class="col-xs-12 col-md-7 pt-2">
//             <div class="input-group mb-3">
//               <input type="text" id="requestFilter" class="form-control" placeholder="Buscar por C&oacute;digo o Cliente" onkeyup="cls_request.filter(this.value)">
//               <button class="btn btn-outline-secondary" type="button" id="" onclick="cls_request.filter(document.getElementById('requestFilter').value)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div class="col-md-8 col-lg-3 pt-2">
//             <select class="form-select" id="requestStatus">
//               <option value="0" selected>Abierto</option>
//               <option value="1">Cerrado</option>
//               <option value="2">Cobrada</option>
//             </select>
//           </div>
//           <div class="col-md-4 col-lg-2 pt-2">
//             <button class="btn btn-info" type="button" id="btn_reloadrequest" onclick="cls_request.reload()">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
//                 <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div class="row">
//           <div id="container_requestlist" class="col-xs-12 bx_1 by_1 border_gray radius_5 v_scrollable" style="height: 80vh; padding: 0;">

//           </div>
//         </div>
//       </div>
//     `;
//     document.getElementById('container_request').innerHTML = content;
//   }
//   render(target, raw) {
//     switch (target) {
//       case 'open':
//         var content = cls_request.generate_openrequest(raw);
//         break;
//       case 'closed':
//         var content = cls_request.generate_closedrequest(raw);
//         break;
//       case 'cancelled':
//         var content = cls_request.generate_cancelledrequest(raw);
//         break;
//     }
//     document.getElementById('container_requestlist').innerHTML = content;
//   }
//   generate_openrequest(open) {
//     var content = '<ul class="list-group">';
//     open.map((request) => {
//       content += `<li class="list-group-item cursor_pointer" onclick="cls_request.showByRequest('${request.tx_request_slug}')"><h5>${request.tx_request_code} - ${request.tx_client_name}</h5><small>${request.tx_request_title} - ${request.tx_table_value} (${cls_general.time_converter(request.created_at)})</small></li>`;
//     })
//     content += '</ul>';
//     return content;
//   }
//   generate_closedrequest(open) {
//     var content = '<ul class="list-group">';
//     open.map((request) => {
//       content += `<li class="list-group-item cursor_pointer"><h5>${request.tx_request_code} - ${request.tx_client_name}</h5><small>${request.tx_request_title} - ${request.tx_table_value} (${cls_general.time_converter(request.created_at)})</small></li>`;
//     })
//     content += '</ul>';
//     return content;
//   }
//   generate_cancelledrequest(open) {
//     var content = '<ul class="list-group">';
//     open.map((request) => {
//       content += `<li class="list-group-item cursor_pointer"><h5>${request.tx_request_code} - ${request.tx_client_name}</h5><small>${request.tx_request_title} - ${request.tx_table_value} (${cls_general.time_converter(request.created_at)})</small></li>`;
//     })
//     content += '</ul>';
//     return content;
//   }

//   showByTable(table_slug, type) {
//     if (type == 1) {
//       cls_request.showByBar(table_slug)
//     } else {
//       var url = '/request/' + table_slug + '/table'; var method = 'GET';
//       var body = "";
//       var funcion = function (obj) {
//         cls_command.command_procesed = obj.data.command_procesed;
//         cls_request.render_request(obj.data.request, table_slug);
//       }
//       cls_general.async_laravel_request(url, method, funcion, body);
//     }
//   }
//   showByBar(bar_slug) {
//     var url = '/request/' + bar_slug + '/bar'; var method = 'GET';
//     var body = "";
//     var funcion = function (obj) {
//       var content_request = cls_request.generate_openrequest(obj.data.request);
//       var content = `
//           <div class="row">
//             <div class="col-sm-12 text-center py-2">
//               <button type="button" class="btn btn-primary btn-lg" data-bs-dismiss="modal" onclick="cls_request.render_request(null,'${bar_slug}')">Nuevo Pedido</button>
//             </div>
//             <div class="col-sm-12">
//               ${content_request}
//             </div>
//           </div>
//       `;
//       var footer = `
//         <div class="row">
//           <div class="col-sm-12">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//           </div>
//         </div>
//       `;
//       document.getElementById('requestModal_title').innerHTML = '<h5>Pedidos en Barra </h5 > ';
//       document.getElementById('requestModal_content').innerHTML = content;
//       document.getElementById('requestModal_footer').innerHTML = footer;

//       const modal = new bootstrap.Modal('#requestModal', {})
//       modal.show();
//     }
//     cls_general.async_laravel_request(url, method, funcion, body);
//   }
//   showByRequest(request_slug) {
//     var url = '/request/' + request_slug; var method = 'GET';
//     var body = "";
//     var funcion = function (obj) {
//       if (obj.data.command_procesed.length === 0) {
//         cls_general.shot_toast_bs('El pedido ya fue cerrado.', { bg: 'text-bg-warning' }); return false;
//       }
//       var table_slug = obj.data.table.tx_table_slug;
//       cls_command.command_procesed = obj.data.command_procesed;
//       cls_request.render_request(obj.data.request, table_slug);
//     }
//     cls_general.async_laravel_request(url, method, funcion, body);
//   }
//   render_request(request_info, table_slug) {
//     cls_command.index(request_info, table_slug);
//   }
//   update_info(request_slug) {
//     var client = document.getElementById('requestClient').name;
//     var table = document.getElementById('requestTable').value;

//     var url = '/request/' + request_slug + '/client/table/';
//     var method = 'PUT';
//     var body = JSON.stringify({ a: client, b: table });
//     var funcion = function (obj) {
//       if (obj.status === 'success') {
//         cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-success' });
//       } else {
//         cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
//       }
//     }
//     cls_general.async_laravel_request(url, method, funcion, body);
//   }
//   look_for(str, status) {
//     return new Promise(resolve => {
//       clearTimeout(this.timer);
//       this.timer = setTimeout(function () {
//         switch (status) {
//           case "0":
//             var haystack = cls_request.open_request;
//             break;
//           case "1":
//             var haystack = cls_request.closed_request;
//             break;
//           case "2":
//             var haystack = cls_request.canceled_request;
//             break;
//         }
//         var needles = str.split(' ');
//         var raw_filtered = [];
//         for (var i in haystack) {
//           var ocurrencys = 0;
//           for (const a in needles) {
//             if (haystack[i]['tx_request_code'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1 || haystack[i]['tx_client_name'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1 || haystack[i]['tx_request_title'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1 || haystack[i]['tx_table_value'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1) { ocurrencys++ }
//           }
//           if (ocurrencys === needles.length) {
//             raw_filtered.push(haystack[i]);
//           }
//         }
//         resolve(raw_filtered)
//       }, 500)
//     });
//   }
//   async filter(str) {
//     var status = document.getElementById('requestStatus').value;
//     var filtered = await cls_request.look_for(str, status);
//     switch (status) {
//       case "0":
//         var content = cls_request.generate_openrequest(filtered)
//         break;
//       case "1":
//         var content = cls_request.generate_closedrequest(filtered)
//         break;
//       case "2":
//         var content = cls_request.generate_cancelledrequest(filtered)
//         break;
//     }
//     document.getElementById('container_requestlist').innerHTML = content;
//   }
//   close(btn) {
//     var request_slug = document.getElementById('btn_commandprocess').name;
//     if (cls_general.is_empty_var(request_slug) === 0) {
//       cls_general.shot_toast_bs('No hay elementos para cerrar.', { bg: 'text-bg-warning' }); return false;
//     }
//     swal({
//       title: "¿Desea cerrar este pedido?",
//       text: "Ya no podrán agregarle comandas.",
//       icon: "info",

//       buttons: {
//         si: {
//           text: "Si, cerrarlo",
//           className: "btn btn-success btn-lg"
//         },
//         no: {
//           text: "No",
//           className: "btn btn-warning btn-lg",
//         },
//       },
//       dangerMode: true,
//     })
//       .then((ans) => {
//         switch (ans) {
//           case 'si':
//             cls_general.disable_submit(btn);
//             var url = '/request/' + request_slug + '/close';
//             var method = 'PUT';
//             var body = JSON.stringify({ a: 1 });;
//             var funcion = function (obj) {
//               if (obj.status === 'success') {
//                 cls_request.open_request = obj.data.open_request;

//                 cls_request.index(); //MUESTRA LA INTERFAZ PEDIDO
//                 cls_table.render(cls_table.table_list); //MUESTRA LAS MESAS
//                 cls_request.render('open', cls_request.open_request); //MUESTRA LOS PEDIDOS ABIERTOS

//                 cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-success' });
//               } else {
//                 cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
//               }
//             }
//             cls_general.async_laravel_request(url, method, funcion, body);
//             break;
//           case 'no':

//             break;
//         }
//       });

//   }
//   reload() {
//     var url = '/request/reload';
//     var method = 'GET';
//     var body = '';
//     var funcion = function (obj) {
//       if (obj.status === 'success') {
//         cls_request.open_request = obj.data.open_request;
//         cls_request.closed_request = obj.data.closed_request;
//         cls_request.canceled_request = obj.data.canceled_request;
//       } else {
//         cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
//       }
//     }
//     cls_general.async_laravel_request(url, method, funcion, body);

//   }

// }

class class_article {
  constructor(article_list) {
    this.article_list = article_list;
  }
  look_for(str, limit) {
    var haystack = cls_article.article_list;
    var needles = str.split(' ');
    var raw_filtered = [];
    var counter = 0;
    for (var i in haystack) {
      if (counter >= limit) { break; }
      var ocurrencys = 0;
      for (const a in needles) {
        if (haystack[i]['tx_article_code'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1 || haystack[i]['tx_article_value'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1) { ocurrencys++ }
      }
      if (ocurrencys === needles.length) {
        raw_filtered.push(haystack[i]);
        counter++;
      }
    }
    return raw_filtered;
  }
  look_for_category(str) {
    var haystack = cls_article.article_list;
    var needles = str.split(' ');
    var raw_filtered = [];
    var counter = 0;
    for (var i in haystack) {
      var ocurrencys = 0;
      for (const a in needles) {
        if (haystack[i]['tx_category_value'].toLowerCase().indexOf(needles[a].toLowerCase()) > -1) { ocurrencys++ }
      }
      if (ocurrencys === needles.length) {
        raw_filtered.push(haystack[i]);
        counter++;
      }
    }
    return raw_filtered;
  }
}

class class_command {
  constructor(table_info) {
    this.command_list = [];
    this.table = table_info;
  }
  index() {
    var raw_category = [];
    cls_article.article_list.map((article) => {
      var cat = raw_category.find((category) => { return category === article.tx_category_value })
      if (cls_general.is_empty_var(cat) === 0) {
        raw_category.push(article.tx_category_value);
      }
    })
    var content_category = '';
    raw_category.map((category) => {
      content_category += `<button class="btn btn-outline-success" style="height: 8vh;" onclick="cls_command.filter_articlethumbnail_category('${category}');">${category}</button>&nbsp;`;
    })
    document.getElementById('container_articlecategory').innerHTML = content_category;
    cls_command.filter_articlethumbnail('');

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    cls_request.render_lastest();
  }

  filter_articlethumbnail(str) {
    var filtered = cls_article.look_for(str, 40);
    var content = cls_command.generate_articlethumbnail_list(filtered)
    document.getElementById('container_articlethumbnail').innerHTML = content;
  }
  filter_articlethumbnail_category(category) {
    var filtered = cls_article.look_for_category(category);
    var content = cls_command.generate_articlethumbnail_list(filtered)
    document.getElementById('container_articlethumbnail').innerHTML = content;
  }

  generate_articlethumbnail_list(filtered) {
    var content = '<div class="row">';
    filtered.map((article) => {
      var bg = '';
      var promo_str = '';
      if (article.tx_article_promotion == 1) {
        bg = 'csjade_bg f_white';
        promo_str = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        `;
      }
      var img = (cls_general.is_empty_var(article['tx_article_thumbnail']) === 1) ? `<img src="../attached/image/article/${article['tx_article_thumbnail']}" class="card-img-top article_image img-fluid rounded-start"></img>` : `
      <svg width="80px" height="80px" class="" viewBox="0 0 108 108" id="Layeri" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="cls-2 ${bg}">
          <g id="Line">
            <path d="M85.5,2h-63a7,7,0,0,0,0,14h.61q2.3,41.22,4.58,82.44a8,8,0,0,0,8,7.56H72.32a8,8,0,0,0,8-7.56Q82.61,57.22,84.89,16h.61a7,7,0,0,0,0-14ZM76.32,98.22a4,4,0,0,1-4,3.78H35.68a4,4,0,0,1-4-3.78L30.56,78H77.44ZM77.67,74H30.33L28.39,39H79.61ZM85.5,12H48v4H80.89L79.83,35H28.17L27.11,16H36V12H22.5a3,3,0,0,1,0-6h63a3,3,0,0,1,0,6Z"/><path d="M24.33,38.11A2,2,0,0,1,24,37a2,2,0,0,1,.22-.91Z"/><path d="M84,37a2,2,0,0,1-.33,1.11l.11-2A2,2,0,0,1,84,37Z"/><path d="M42.66,64.3c0,.11-.08.21-.12.3-2.8-4.3-1.41-11.1,3.52-16,4.32-4.32,10.06-5.92,14.31-4.37a21.45,21.45,0,0,0-2.16,4.55,12.17,12.17,0,0,1-2.15,4.17,12.17,12.17,0,0,1-4.17,2.15A16.17,16.17,0,0,0,46,58.36,16.17,16.17,0,0,0,42.66,64.3Z"/><path d="M60.91,63.42c-4.3,4.3-10,5.9-14.26,4.39.25-.58.48-1.17.69-1.74a12.17,12.17,0,0,1,2.15-4.17,12.17,12.17,0,0,1,4.17-2.15,16.17,16.17,0,0,0,5.94-3.3,16.17,16.17,0,0,0,3.3-5.94,19.87,19.87,0,0,1,1.45-3.26C67.26,51.54,65.9,58.44,60.91,63.42Z"/><rect height="4" rx="2" ry="2" width="4" x="40" y="12"/>
          </g>
        </g>
      </svg>`;
      var description = (cls_general.is_empty_var(article.tx_article_description) === 0) ? '' : article.tx_article_description;
      content += `
        <div class="col-6 col-lg-4" onclick="cls_command.show_article('${article.tx_article_slug}','${article.tx_article_value}')">
          <div class="card mb-3 cursor_pointer ${bg} ">
            <div class="row g-0 h_100">
              <div class="col-9 col-sm-10 col-md-8">
                <div class="card-body" style="padding: 0 5px 5px 10px;">
                  <h5 class="card-title text-truncate">${promo_str + ' ' + article.tx_article_value}</h5>
                  <p class="card-text"><small class="fs_12">${description.slice(0,96)}</small></p>
                </div>
              </div>
              <div class="col-3 col-sm-2 col-md-4 d-flex align-items-center justify-content-center px-1">
                ${img}
              </div>

            </div>
          </div>
        </div>
      `;
    })
    content += '</div>';
    return content;
  }

  
  // filter_article(str) {
  //   var filtered = cls_article.look_for(str, 40);
  //   var content = cls_command.generate_article_list(filtered)
  //   document.getElementById('article_list').innerHTML = content;
  // }
  // filter_article_category(category) {
  //   var filtered = cls_article.look_for_category(category);
  //   var content = cls_command.generate_article_list(filtered)
  //   document.getElementById('article_list').innerHTML = content;
  // }
  // generate_article_list(filtered) {
  //   var content = '<ul class="list-group">';
  //   filtered.map((article) => {
  //     var bg = '';
  //     var promo_str = '';
  //     if (article.tx_article_promotion == 1) {
  //       bg = 'tmred_bg f_white';
  //       promo_str = `
  //       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  //         <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
  //       </svg>
  //       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  //         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  //       </svg>`;
  //     }
  //     content += `<li class="list-group-item cursor_pointer fs_20 text-truncate ${bg}" onclick="cls_command.show_article('${article.tx_article_slug}','${article.tx_article_value}')">${article.tx_article_code} - ${promo_str + ' ' + article.tx_article_value}</li>`;
  //   })
  //   content += '</ul>';
  //   return content;
  // }
  generate_recipe_option(article_product) {
    console.log(article_product);
    var content_recipe = (article_product.length > 0) ? '<hr><div class="col-12 text-center"><h5>Ingredientes</h5></div>' : '';
    article_product.map((ap, i) => {
      var raw_ingredient = JSON.parse(ap.tx_articleproduct_ingredient);
      if (raw_ingredient.length > 1) {
        content_recipe += `
            <div class="col-md-12 col-lg-6">
              <label for="ingredient_${i}">${i + 1}.- Ingrediente</label>
              <select class="form-select" id="ingredient_${i}">`;
          raw_ingredient.map((ingredient) => {
            content_recipe += `<option value="${ingredient.quantity},${ingredient.measure_id},${ingredient.product_id}">${ingredient.product_value}</option>`;
          })
          content_recipe += `</select></div>`;
      }
    })
    return content_recipe;
  }
  show_article(article_slug, description) {
    var url = '/article/' + article_slug; var method = 'GET';
    var body = "";
    var funcion = function (obj) {

      var raw_option = JSON.parse(obj.data.article.tx_article_option);
      var content_option = '';
      if (raw_option.length > 0) {
        content_option += `
          <hr/>
          <h5>Opciones</h5>
          <div id="articleOption" class="row">
        `;
        for (const a in raw_option) {
          var option = raw_option[a];
          var key = Object.keys(option);
          content_option += `<div class="col-md-12 col-lg-6"><label for="article_${key[0]}">${key[0]}</label> <select class="form-select" id="${key[0]}">`;
          for (const b in option[key[0]]) {
            content_option += `<option value="${option[key[0]][b]}">${option[key[0]][b]}</option>`;
          }
          content_option += `</select></div>`;
        }
        content_option += `</div>`;
      }
      var option_presentation = ``; //OPTION PARA LAS PRESENTACIONES DEL ARTICULO, AL CAMBIAR CAMBIAR LOS PRECIOS
      obj.data.price.map((price) => {
        option_presentation += `<option alt="${price.tx_price_three},${price.tx_price_two},${price.tx_price_one}" value="${price.ai_presentation_id}">${price.tx_presentation_value}</option>`;
      })

      var tax_rate = obj.data.article.tx_article_taxrate;

      var content = `
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <label for="articlePresentation">Presentation</label>
            <select class="form-select" id="articlePresentation" onchange="cls_command.modal_set_price(this.options[this.selectedIndex].getAttribute('alt'), this.value, '${article_slug}')">
              ${option_presentation}
            </select>
          </div>
          <div class="col-6 col-lg-4">
            <label for="articleQuantity">Cantidad</label>
            <input type="number" class="form-control" id="articleQuantity" value="1" onfocus="cls_general.validFranz(this.id, ['number'])" >
          </div>
          <div id="container_price" class="col-6 col-lg-4">
          </div>
          <div class="col-sm-12">
            <div id="container_recipe" class="row">
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <input type="hidden" class="form-control" id="articleDiscountrate" value="${obj.data.article.tx_article_discountrate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
            <input type="hidden" class="form-control" id="articleTaxrate" value="${tax_rate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
          </div>
          ${content_option}
        </div>
      `;
      var footer = `
        <div class="row">
          <div class="col-sm-12">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="cls_general.disable_submit(this); cls_command.add_article('${article_slug}','${description}','${obj.data.article.ai_article_id}');">Guardar</button>
          </div>
        </div>
      `;

      document.getElementById('commandModal_title').innerHTML = 'Agregar al Pedido';
      document.getElementById('commandModal_content').innerHTML = content;
      document.getElementById('commandModal_footer').innerHTML = footer;


      cls_command.modal_set_price(obj.data.price[0].tx_price_three + ',' + obj.data.price[0].tx_price_two + ',' + obj.data.price[0].tx_price_one, obj.data.price[0].ai_presentation_id, article_slug); //OPTION PARA Los PRECIOS DEL ARTICULO

      const Modal = bootstrap.Modal.getInstance('#modalArticleList');
      if (Modal) {
        Modal.hide();
      }

      const modal = new bootstrap.Modal('#commandModal', {})
      modal.show();
    }
    cls_general.async_laravel_request(url, method, funcion, body);
  }
  modal_set_price(str, presentation_id, article_slug) {
    var url = '/recipe/' + presentation_id + '/' + article_slug;
    var method = 'GET';
    var body = '';
    var funcion = function (obj) {
      if (obj.status === 'success') {

        var raw = str.split(',');
        var content = `<label for="articlePrice">Precio</label>
        <select class="form-select" id="articlePrice">`;
        raw.map((price) => {
          var p = parseFloat(price);
          if (price > 0.1) {
            content += `<option value="${p}">${p.toFixed(2)}</option>`;
          }
        })
        document.getElementById('container_price').innerHTML = content + '</select>';
        document.getElementById('container_recipe').innerHTML = cls_command.generate_recipe_option(obj.data.recipe);;

      } else {
        cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
      }
    }
    cls_general.async_laravel_request(url, method, funcion, body);

  }
  add_article(article_slug, description, article_id) {
    var quantity = document.getElementById('articleQuantity').value;
    if (isNaN(quantity) || quantity < 1) {
      cls_general.shot_toast_bs('Corrija la cantidad.', { bg: 'text-bg-warning' });
      return false;
    }
    var option = '';
    $('#articleOption').find('select').each(function () {
      option += `${$(this).attr('id')}: ${$(this).val()},`;
    });
    var raw_recipe = [];
    $('#container_recipe').find('select').each(function () {
      var index = $(this.selectedOptions).text();
      raw_recipe.push({ [index]: $(this).val() })
    });
    var select_presentation = document.getElementById('articlePresentation');
    cls_command.command_list.push({
      'article_slug': article_slug,
      'article_id': article_id,
      'article_description': description,
      'quantity': quantity,
      'option': option.slice(0, -1),
      'presentation_id': select_presentation.value,
      'presentation_value': select_presentation.options[select_presentation.selectedIndex].text,
      'price': document.getElementById('articlePrice').value,
      'tax_rate': document.getElementById('articleTaxrate').value,
      'discount_rate': document.getElementById('articleDiscountrate').value,
      'recipe': raw_recipe
    });
    const Modal = bootstrap.Modal.getInstance('#commandModal');
    Modal.hide();
    // cls_general.shot_toast_bs('Su producto se ha agregado al pedido.',{bg: 'text-bg-success'});
    cls_command.check_articleselected();
  }
  check_articleselected() {
    if (cls_command.command_list.length > 0) {
      document.getElementById('btn_shopcart').classList.remove('display_none');

      var content = cls_command.generate_articleselected(cls_command.command_list);
      document.getElementById('btn_shopcart').innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16" width="30" height="30">
          <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"></path>
        </svg><br/>
        <span class="fs_12">B/ ${content.price_sale.total}<span>`;
    }else{
      if (document.getElementById('btn_shopcart').classList.contains('display_none') === false) {
        document.getElementById('btn_shopcart').classList.add('display_none');
      }
    }
  }
  open_shopcart(){
    cls_command.render_articleselected();
    const modal = new bootstrap.Modal('#shopcartModal', {})
    modal.show();
  }
  render_articleselected() {
    var content = cls_command.generate_articleselected(cls_command.command_list);
    document.getElementById('shopcartModal_content').innerHTML = content.content;
    document.getElementById('shopcartModal_title').innerHTML = '<h5>Total del Pedido: B/ ' + cls_general.val_price(content.price_sale.total,2,1,1) + '</h5>';
  }
  generate_articleselected(command_list) {
    var content = '<ul class="list-group">';
    var raw_price = [];
    command_list.map((article, index) => {
      var splited_option = article.option.split(',');
      var option = ``
      if (splited_option.length > 1) {
        option += `<ul>`
        splited_option.map((opt) => {
          option += `<li>${opt}</li>`;
        })
        option += `</ul>`
      }

      var content_recipe = '<ul>';
      article.recipe.map((ingredient) => {
        for (const index in ingredient) {
          content_recipe += `<li><small>${index}</small></li>`;
        }
      })
      content_recipe += '</ul>';
      content += `
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${article.quantity} - ${article.article_description} ${article.presentation_value}</div>
            ${content_recipe}
          </div>
          <span class="badge bg-primary rounded-pill text-truncate">B/ ${cls_general.val_price(article.price, 2, 1, 1)}</span> &nbsp;&nbsp;
          <button class="btn btn-warning" type="button" onclick="cls_command.delete_articleselected(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
          </button>
          
        </li>
      `;

      //[{PRICE,discount,tax, quantity}]
      raw_price.push({ price: article.price, discount: article.discount_rate, tax: article.tax_rate, quantity: article.quantity })

    })
    var price_sale = cls_general.calculate_sale(raw_price);
    content += '</ul>';
    return { 'content': content, 'price_sale': price_sale };
  }
  // generate_articleprocesed(command_procesed) {
  //   var raw_price = [];
  //   var content_command_procesed = `<div class="list-group">`;
  //   command_procesed.map((command) => {
  //     var raw_command = command.tx_commanddata_option.split(',');
  //     if (raw_command.length > 1) {
  //       var option = '<ul>';
  //       raw_command.map((opt) => { option += `<li>${opt}</li>` });
  //       option += '</ul>';
  //     } else {
  //       var option = '';
  //     }
  //     var observation = (cls_general.is_empty_var(command.tx_command_observation) === 1) ? ', <strong>Obs.</strong> ' + command.tx_command_observation : '';
  //     if (command.tx_commanddata_status === 0) {
  //       var bg_status = 'text-bg-warning text-body-tertiary';
  //       var btn = ``;
  //     } else {
  //       // [{ PRICE, discount, tax, quantity }]
  //       raw_price.push({ price: command.tx_commanddata_price, discount: command.tx_commanddata_discountrate, tax: command.tx_commanddata_taxrate, quantity: command.tx_commanddata_quantity });
  //       var bg_status = '';
  //       var btn = `
  //         <button type="button" class="btn btn-secondary" onclick="event.preventDefault(); cls_command.cancel(${command.ai_commanddata_id})">Anular</button>
  //       `;
  //     }
  //     var recipe = JSON.parse(command.tx_commanddata_recipe);
  //     var content_recipe = '<ul>';
  //     recipe.map((ingredient) => {
  //       for (const index in ingredient) {
  //         content_recipe += `<li><small>${index}</small></li>`;
  //       }
  //     })
  //     content_recipe += `</ul>`;

  //     content_command_procesed += `
  //       <a href="#" class="list-group-item list-group-item-action ${bg_status}" aria-current="true" onclick="event.preventDefault();">
  //         <div class="d-flex w-100 justify-content-between">
  //           <h5 class="mb-1">${command.tx_commanddata_quantity} - ${command.tx_commanddata_description} (${command.tx_presentation_value})</h5>
  //           <br/>
  //         </div>
  //         ${content_recipe}
  //         <p class="mb-1">${option}</p>
  //         <small>Consumo: ${command.tx_command_consumption}${observation}</small><br/>
  //         <div class="text-center">
  //           ${btn}
  //         </div>
  //       </a>
  //     `;
  //   })
  //   content_command_procesed += `</div>`;
  //   return { 'content': content_command_procesed, 'price': raw_price };
  // }
  delete_articleselected(index) {
    var command_list = cls_command.command_list;
    command_list.splice(index, 1);
    cls_command.command_list = command_list;
    cls_command.render_articleselected();
    cls_command.check_articleselected();
  }
  save() { //ESTA FUNCION SOLO ABRE EL MODAL
    const Modal = bootstrap.Modal.getInstance('#shopcartModal');
    Modal.hide();

    var command_list = cls_command.command_list;
    if (command_list.length < 1) {
      cls_general.shot_toast_bs('Seleccione algún producto.', { bg: 'text-bg-warning' });
      return false;
    }
    var content = `
      <div class="row">
        <div class="col-sm-12">
          <label for="commandConsumption">Consumo</label>
          <select id="commandConsumption" class="form-select">
            <option value="Local">En el local</option>
            <option value="Retira">Pasa a Retirar</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <label>Hora</label>
          <select name="consumptionHour" id="consumptionHour" class="form-select">
            <option value="01">01</option>
            <option value='02'>02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div class="col-4">
          <label>Minutos</label>
          <select name="consumptionMinute" id="consumptionMinute" class="form-select">
            <option value="00">00</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div class="col-4">
          <label>Meridiano</label>
          <select id="consumptionMeridian" class="form-select">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select
        </div>
      </div>

        <hr>
      <div class="row">

        <div class="col-md-12">
          <span for="">Forma de Pago</span>
          <div class="form-check">
            <input class="form-check-input" type="radio" id="paymentmethod" name="paymentmethod" value="cash" checked>
            <label class="form-check-label" for="cash">
              Pago directo en el local
            </label>
          </div>
        </div>
        <hr>
        <div class="col-md-12">
          <label for="commandTelephone">Confirme su Numero de Teléfono</label>
          <input type="text" id="commandTelephone" class="form-control" onfocus="cls_general.validFranz(this.id, ['number'])">
        </div>
        <div class="col-md-12">
          <label for="commandObservation">Observaciones</label>
          <textarea id="commandObservation" class="form-control" onfocus="cls_general.franz_textarea(this,this.value)" onkeyup="cls_general.limitText(this,120,1)" onblur="cls_general.limitText(this,120,1)"></textarea>
        </div>
      </div>
    `;
          // <div class="form-check">
          //   <input class="form-check-input" type="radio" id="paymentmethod" name="paymentmethod" id="yappy">
          //   <label class="form-check-label" for="yappy">
          //     Yappy
          //   </label>
          // </div>        
          // <div class="form-check">
          //   <input class="form-check-input" type="radio" id="paymentmethod" name="paymentmethod" id="creditcard">
          //   <label class="form-check-label" for="creditcard">
          //     Tarjeta Credito/Debito
          //   </label>
          // </div>

    var footer = `
      <div class="row">
        <div class="col-sm-12">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" onclick="cls_general.disable_submit(this,1); cls_command.process()">Guardar</button>
        </div>
      </div>
    `;

    document.getElementById('commandModal_title').innerHTML = 'Despacho';
    document.getElementById('commandModal_content').innerHTML = content;
    document.getElementById('commandModal_footer').innerHTML = footer;

    var today = new Date();
    var hour = today.getHours();
    var meridian = (hour > 11) ? 'PM' : 'AM';
    var minute = today.getMinutes();
    for (let x = minute; x < minute+10; x++) {
      if (x%10 === 0) {
        minute = x;
        break;
      }
    }
    if(minute === 60) { minute = 0; hour++};
    minute = (minute < 10) ? "0" + minute : minute;
    if (hour > 12) {
      if (hour > 21) {
        hour = (hour - 12)
      }else{
        hour = "0" + (hour - 12)
      }
    }
    document.getElementById('consumptionHour').value = hour;
    document.getElementById('consumptionMinute').value = minute;
    document.getElementById('consumptionMeridian').value = meridian;
    setTimeout(() => {
      document.getElementById('commandTelephone').focus();
    }, 500);
    const modal = new bootstrap.Modal('#commandModal', {})
    modal.show();
  }
  process() {
    var command_list = cls_command.command_list;
    var consumption = document.getElementById('commandConsumption').value;

    var consumptionHour = document.getElementById('consumptionHour').value;
    var consumptionMinute = document.getElementById('consumptionMinute').value;
    var consumptionMeridian = document.getElementById('consumptionMeridian').value;

    var paymentmethod = document.getElementById('paymentmethod').value;
    var telephone = document.getElementById('commandTelephone').value;
    var observation = document.getElementById('commandObservation').value;

    if (cls_general.is_empty_var(consumptionHour) === 0 || cls_general.is_empty_var(consumptionMinute) === 0 || cls_general.is_empty_var(consumptionMeridian) === 0) {
      cls_general.shot_toast_bs('Verifique el tiempo de consumo.'); return false;
    }
    if (cls_general.is_empty_var(telephone) === 0 || /\d{8}/gm.test(telephone) === false) {
      cls_general.shot_toast_bs('Debe ingresar el numero de teléfono correctamente.'); return false;
    }

    var content = cls_command.generate_articleselected(command_list);

    var request_total = content.price_sale.total*1;
    if (consumption === 'Retira' && paymentmethod === 'cash' && request_total > 20) {
      return swal("El monto no puede ser mayor a B/ 20.00.");
      return false;
    }

    var url = '/command/'; var method = 'POST';
    var body = JSON.stringify({ a: command_list, b: cls_command.table, c: consumptionHour + ':' + consumptionMinute + ' ' + consumptionMeridian, d: paymentmethod, e: consumption, f: observation, g: telephone });
    var funcion = function (obj) {
      if (obj.status === 'success') {
        window.location.href = "../status/"+obj.data.request.tx_request_slug;
        const Modal = bootstrap.Modal.getInstance('#commandModal');
        Modal.hide();
      } else {
        cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
      }
    }
    cls_general.async_laravel_request(url, method, funcion, body);
  }

}

class class_request {
  constructor(lastest=[]){
    this.lastest = lastest
  }
  // STATUS
  get_status(request_slug) {
    var url = '/request/' + request_slug + '/status'; var method = 'GET';
    var body = '';
    var funcion = function (obj) {
      if (obj.status === 'success') {
        cls_request.set_status(obj.data.request_info)
      } else {
        cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
      }
    }
    cls_general.async_laravel_request(url, method, funcion, body);
  }
  set_status(request_info) {
    switch (request_info.tx_request_status) {
      case 1:
        document.getElementById('request_pending').innerHTML = 'Su pedido se ha enviado al restaurante.';
        document.getElementById('request_confirmed').innerHTML = '';
        document.getElementById('request_ready').innerHTML = '';
        document.getElementById('status_progress').style.width = '30%';
        break;
      case 2:
        document.getElementById('request_pending').innerHTML = 'Su pedido se ha enviado al restaurante.';
        document.getElementById('request_pending').classList.add('text-bg-primary');
        document.getElementById('request_confirmed').innerHTML = 'Su pedido se ha confirmado.';
        document.getElementById('request_ready').innerHTML = '';
        document.getElementById('status_progress').style.width = '60%';
        break;
      case 3:
        document.getElementById('request_pending').innerHTML = 'Su pedido se ha enviado al restaurante.';
        document.getElementById('request_pending').classList.add('text-bg-primary');
        document.getElementById('request_confirmed').innerHTML = 'Su pedido se ha confirmado.';
        document.getElementById('request_confirmed').classList.add('text-bg-primary');
        document.getElementById('request_ready').innerHTML = 'Su pedido esta listo.';
        document.getElementById('status_progress').style.width = '100%';
        break;
      case 4:
        window.location.href = "../request/";
      break;
    }
  }
  render_lastest(){
    var content = cls_request.generate_lastest(cls_request.lastest);
    if (content.length > 0) {
      document.getElementById('container_articlelastest').innerHTML = content;
    }
  }
  generate_lastest(raw_lastest){
    var content = '';
    raw_lastest.map((article) => {
      content += `
        <div class="col-3 col-lg-2">
          <div class="card cursor_pointer pt-2" onclick="cls_command.show_article('${article.tx_article_slug}','${article.tx_article_value}')">
            <div class="col-sm-12 text-center">
              <img src="../attached/image/article/${article.tx_article_thumbnail}" class="article_last">
            </div>
            <div class="card-body">
              <span class="article_title text-truncate">${article.tx_commanddata_description}</span>
              <span class="badge rounded-pill text-bg-secondary">B/ ${cls_general.val_price(article.tx_commanddata_price,2,1,1)}</span>
            </div>
          </div>
        </div>
      `;
    })
    return content;
  }
}