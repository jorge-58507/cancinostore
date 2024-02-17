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
    this.currentTab = 0
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
      content_category += `<button class="btn btn-outline-warning" style="height: 8vh;" onclick="cls_command.filter_articlethumbnail_category('${category}');">${category}</button>&nbsp;`;
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
    content += `<h5 class="fw-bold pb-3 hr_category">${filtered[0].tx_category_value}</h5>`

    filtered.map((article,index) => {
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
      <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" height="80px" viewBox="0 0 54.595 54.595" xml:space="preserve"><g>
        <g>
          <path d="M3.968,42.481c0.553,1.358,2.216,2.472,3.683,2.501l29.445,0.632c1.464,0.031,3.503-0.771,4.551-1.798l9.642-9.438    c1.049-1.021,1.897-2.795,1.897-3.949c0-1.155,0-2.096,0-2.096l0.704-1.494c0.391-0.824,0.706-2.681,0.706-4.146v-4.811    l-0.957,0.816l-3.249-3.933c-0.986-1.199-1.912-1.195-2.372-1.086c-0.464,0.109-1.292,0.519-1.64,2.033l-0.155,0.678l-1.363-4.994    c-0.288-1.061-0.943-1.844-1.845-2.205c-0.899-0.364-1.917-0.252-2.856,0.311l-5.146,3.074c-1.182-1.544-3.399-2.207-5.217-1.459    l-5.844,2.396c-0.462-0.756-1.122-1.273-1.92-1.448c-0.941-0.205-1.917,0.076-2.75,0.796l-2.718,2.352l-5.823-1.696    c-1.027-0.35-2.069-0.258-2.937,0.258s-1.444,1.39-1.624,2.458l-0.917,5.425l-1.896-0.595c-1.477-0.464-2.266,0.044-2.604,0.388    c-0.337,0.344-0.831,1.139-0.341,2.609l1.987,5.975c-2.437-0.965-1.556-3.113-1.556-3.113    C-1.678,27.748,2.045,37.751,3.968,42.481z M4.995,30.495c-0.394-0.015-0.744-0.044-1.069-0.086l-0.149-0.449l1.846-1.369    c0.955-0.708,2.512-0.362,3.474,0.772l1.076,1.27C7.872,30.574,6.035,30.525,4.995,30.495z M10.512,28.983l-0.017-0.021    l0.074-0.021L10.512,28.983z M9.603,21.481c-0.193-0.637-0.128-1.206,0.182-1.601c0.308-0.396,0.846-0.597,1.534-0.563    l9.883,0.092c-0.081,0.164-0.191,0.323-0.332,0.46c-0.195,0.187-0.61,0.489-1.2,0.428c-3.008-0.31-3.491,0.245-3.697,0.482    c-0.18,0.204-0.276,0.455-0.283,0.714c-0.228,0.595-1.369,2.116-2.209,2.116c-0.702,0-1.322,0.248-1.79,0.717    c-0.44,0.441-0.669,1.002-0.788,1.474L9.603,21.481z M11.949,30.677L11.373,30l7.085-5.014c1.243-0.883,3.135-0.726,4.218,0.345    l5.815,5.751C23.191,30.954,16.849,30.799,11.949,30.677z M22.778,23.768l4.668-6.204c0.414-0.555,0.997-0.888,1.632-0.938    c0.64-0.054,1.263,0.185,1.763,0.665l4.66,4.476c-0.354-0.034-0.725-0.027-1.128,0.062l-10.929,2.426    C23.24,24.07,23.017,23.908,22.778,23.768z M30.219,31.121l0.1-0.103l-5.725-5.661l10.07-2.235    c0.635-0.14,1.149-0.049,1.448,0.255c0.303,0.305,0.385,0.822,0.235,1.454l-1.52,6.398C33.511,31.199,31.945,31.161,30.219,31.121    z M47.671,16.016c0.132-0.578,0.38-0.976,0.65-1.04c0.276-0.065,0.67,0.182,1.046,0.64l3.262,3.95l-7.186,6.126L47.671,16.016z     M30.294,12.349c1.396-0.572,3.137,0.03,3.882,1.339l1.998,3.518c-0.016,0.431,0.022,0.873,0.122,1.258    c-0.513,0.084-0.88,0.554-0.828,1.077c0.051,0.515,0.484,0.9,0.987,0.9c0.033,0,0.065-0.002,0.099-0.005    c0.272-0.026,1.2-0.17,1.644-0.906c0.251-0.421,0.277-0.924,0.069-1.418c-0.088-0.213-0.155-0.729-0.084-1.155    c0.313-0.09,1.074-0.023,1.42,0.007c0.157,0.014,0.31,0.028,0.441,0.035c1.103,0.061,1.677-0.427,1.988-0.93    c0.213,0.159,0.444,0.414,0.515,0.665c0.027,0.105,0.035,0.187-0.126,0.333c-0.413,0.365-0.453,0.995-0.086,1.405    c0.364,0.412,0.993,0.45,1.406,0.085c0.783-0.695,1.018-1.683,0.627-2.644c-0.456-1.128-1.7-2.028-2.689-1.997    c-0.622,0.029-1.117,0.413-1.296,1.001c-0.014,0.045-0.024,0.075-0.025,0.088c-0.033,0.004-0.099,0.01-0.194,0.004    c-0.115-0.006-0.244-0.018-0.387-0.03c-0.846-0.074-2.254-0.185-3.021,0.556l-1.04-1.83l5.124-3.061    c0.581-0.346,1.176-0.424,1.681-0.22c0.506,0.204,0.884,0.674,1.061,1.324l2.017,7.38l-1.845,8.004l-4.912,4.189    c0,0-0.998-0.022-2.654-0.064l1.455-6.122c0.258-1.095,0.053-2.047-0.581-2.691c-0.138-0.14-0.296-0.25-0.461-0.349l0.56-0.584    l-5.394-5.181c-0.778-0.748-1.776-1.114-2.79-1.031c-1.02,0.082-1.939,0.602-2.587,1.463L25.82,17.52l-1.277-2.814L30.294,12.349z     M20.146,13.869c0.508-0.44,1.077-0.619,1.599-0.503c0.523,0.115,0.964,0.516,1.241,1.126l1.923,4.238l-3.396,4.514    c-1.297-0.316-2.736-0.112-3.822,0.656l-6.067,4.297l-0.149-0.499c0.096,0.029,0.192,0.062,0.296,0.062c0.001,0,0.002,0,0.002,0    c0.549-0.003,0.994-0.451,0.993-1c0-0.184,0.079-0.77,0.334-1.027c0.064-0.064,0.161-0.131,0.381-0.131    c1.449,0,2.606-1.199,3.169-1.913c0.284-0.364,0.68-0.92,0.889-1.467c0.366-0.031,1.012-0.037,1.924,0.057    c1.019,0.104,2.036-0.25,2.788-0.975c0.733-0.704,1.136-1.681,1.074-2.611c-0.035-0.548-0.511-0.958-1.058-0.929    c-0.267,0.018-0.499,0.141-0.667,0.323l-6.261-0.059L20.146,13.869z M7.483,16.458c0.114-0.679,0.469-1.225,0.996-1.54    s1.177-0.364,1.858-0.132l5.027,1.464l-2.032,1.758l-1.979-0.019c-1.104-0.055-2.035,0.328-2.617,1.073    c-0.583,0.745-0.727,1.74-0.409,2.801l0.254,0.843l-2.047-0.644L7.483,16.458z M1.674,23.646c-0.19-0.576-0.179-1.047,0.031-1.261    c0.21-0.214,0.682-0.233,1.259-0.052l6.082,1.911l1.407,4.669l-0.347-0.411c-1.403-1.657-3.771-2.098-5.276-0.979l-1.496,1.113    L1.674,23.646z" />
          <rect x="5.227" y="24.357" width="1.675" height="0.553" /><rect x="14.351" y="29.252" width="1.675" height="0.553" /><rect x="26.459" y="19.835" width="1.674" height="0.552" /><rect x="19.287" y="16.626" width="1.676" height="0.553" /><rect x="32.502" y="14.154" width="1.675" height="0.553" /><rect x="39.707" y="12.116" width="1.675" height="0.552" /><rect x="38.334" y="27.009" width="1.676" height="0.554" /><rect x="40.544" y="22.483" width="1.674" height="0.554" />
          <path d="M48.928,20.704l-0.473-1.607l0.529-0.155l0.473,1.606L48.928,20.704z" />
          <path d="M28.659,28.224l-1.367-0.971l0.319-0.451l1.367,0.971L28.659,28.224z M39.306,18.401l1.365,0.971l-0.319,0.45    l-1.365-0.971L39.306,18.401z" /></g>
        </g>
      </svg>
      `;
      var description = (cls_general.is_empty_var(article.tx_article_description) === 0) ? '' : article.tx_article_description;
      if (filtered[index - 1] && article.tx_category_value != filtered[index-1]['tx_category_value']) {
        content += `<hr><h5 class="fw-bold pb-3 hr_category">${article.tx_category_value}</h5>`
      }
      content += `
        <div class="col-12 col-md-6 col-lg-4" onclick="cls_command.show_article('${article.tx_article_slug}','${article.tx_article_value}')">
          <div class="card mb-3 cursor_pointer ${bg} ">
            <div class="row g-0 h_100">
              <div class="col-9 col-sm-10 col-md-8">
                <div class="card-body" style="padding: 0 5px 5px 10px;">
                  <h5 class="card-title text-truncate py-1">${promo_str + ' ' + article.tx_article_value}</h5>
                  <p class="card-text mb-0"><small class="fs_12">${description.slice(0, 96)}</small></p>
                  <p class="fw-bold">B/ ${cls_general.val_price(article.tx_price_three,2,1,1)}</p>
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
  generate_recipe_option(article_product) {
    var content_recipe = (article_product.length > 0) ? '<div class="col-12 text-center"><h5>Ingredientes</h5></div>' : '';
    article_product.map((ap, i) => {
      var raw_ingredient = JSON.parse(ap.tx_articleproduct_ingredient);
      if (raw_ingredient.length > 1) {
        content_recipe += `
          <div class="col-md-12 col-lg-6">
            <label for="ingredient_${i}">${i + 1}.- ${ap.tx_articleproduct_value}</label>
            <select class="form-select" id="ingredient_${i}">`;
            raw_ingredient.map((ingredient) => {
              content_recipe += `<option value="${ingredient.quantity},${ingredient.measure_id},${ingredient.product_id}">${ingredient.product_value}</option>`;
            })
          content_recipe += `</select></div>
        `;
      }
    })
    return content_recipe;
  }  
  show_article(article_slug, description) {
    cls_command.currentTab = 0;

    var url = '/article/' + article_slug; var method = 'GET';
    var body = "";
    var funcion = function (obj) {

      var raw_option = JSON.parse(obj.data.article.tx_article_option);
      var content_option = '';
      if (raw_option.length > 0) {
        content_option += `
          <hr/>
          <h5>Opciones</h5>
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
      }
      var option_presentation = ``; //OPTION PARA LAS PRESENTACIONES DEL ARTICULO, AL CAMBIAR CAMBIAR LOS PRECIOS
      obj.data.price.map((price) => {
        option_presentation += `<option alt="${price.tx_price_three},${price.tx_price_two},${price.tx_price_one}" value="${price.ai_presentation_id}">${price.tx_presentation_value}</option>`;
      })

      var tax_rate = obj.data.article.tx_article_taxrate;

      var content = `
        <form id="create_command" action="">
          <span id="span_info" class="fs-3">${obj.data.article.tx_article_value}</span>&nbsp;&nbsp;<span id="span_price" class="fs-4 fw-bold">B/ 50.00</span>
          <hr>
          <div class="tab_step h_150 display_none">
            <div class="row">
              <div class="col-12 col-lg-6">
                <label for="articlePresentation">Presentation</label>
                <select class="form-select" id="articlePresentation" onchange="cls_command.modal_set_price(this.options[this.selectedIndex].getAttribute('alt'), this.value, '${article_slug}')">
                  ${option_presentation}
                </select>
              </div>
              <div class="col-12 col-lg-6">
                <label for="articleQuantity">Cantidad</label>
                <input type="number" class="form-control" id="articleQuantity" value="1" onfocus="cls_general.validFranz(this.id, ['number'])" >
              </div>
              <div class="col-md-12 col-lg-4">
                <input type="hidden" class="form-control" id="articleDiscountrate" value="${obj.data.article.tx_article_discountrate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
                <input type="hidden" class="form-control" id="articleTaxrate" value="${tax_rate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
                <input type="hidden" class="form-control" id="articlePrice" required>
              </div>
            </div>
          </div>

          <div class="tab_step h_150 display_none">
            <div class="row">
              <div class="col-sm-12">
                <div id="container_recipe" class="row">
                </div>
              </div>
              <div class="col-sm-12">
                <div id="articleOption" class="row">
                  ${content_option}
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 text-center pt-4">
              <span class="step"></span>
              <span class="step"></span>
            </div>
          </div>

        </form>
      `;


      var footer = `
        <div class="row">
          <div class="col-sm-12">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" id="prevBtn" class="btn btn-info" onclick="cls_command.nextPrev(-1)">Volver</button>
            <button type="button" id="nextBtn" class="btn btn-primary" onclick="cls_command.nextPrev(1)">Siguiente</button>

            <button type="button" id="btn_addArticle" class="btn btn-primary display_none" onclick="cls_general.disable_submit(this); cls_command.add_article('${article_slug}','${description}','${obj.data.article.ai_article_id}');">Guardar</button>
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

      cls_command.showTab(cls_command.currentTab); // Display the current tab
    }
    cls_general.async_laravel_request(url, method, funcion, body);
  }



  showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab_step");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Guardar";
    } else {
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    // ... and run a function that displays the correct step indicator:
    cls_command.fixStepIndicator(n)
  }
  nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab_step");
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 && !cls_command.validateForm()) return false;
    // Hide the current tab:
    var content_recipe = document.getElementById('container_recipe').innerHTML;
    var content_option = document.getElementById('articleOption').innerHTML;
    
    if (cls_general.is_empty_var(content_recipe) === 0 && cls_general.is_empty_var(content_option) === 0) {
      document.getElementById('btn_addArticle').click();
    }
    x[cls_command.currentTab].style.display = "none";

    // Increase or decrease the current tab by 1:
    cls_command.currentTab = cls_command.currentTab + n;
    // if you have reached the end of the form... :
    if (cls_command.currentTab >= x.length) {
      //...the form gets submitted:
      // document.getElementById("create_command").submit();
      document.getElementById('btn_addArticle').click();
      return false;
    }
    // Otherwise, display the correct tab:
    cls_command.showTab(cls_command.currentTab);
  }
  validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab_step");
    y = x[cls_command.currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[cls_command.currentTab].className += " finish";
    }
    return valid; // return the valid status
  }
  fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }
  modal_set_price(str, presentation_id, article_slug) {
    var url = '/recipe/' + presentation_id + '/' + article_slug;
    var method = 'GET';
    var body = '';
    var funcion = function (obj) {
      if (obj.status === 'success') {

        var raw = str.split(',');
        document.getElementById('span_price').innerHTML = 'B/ '+cls_general.val_price(raw[0]);
        document.getElementById('articlePrice').value = parseFloat(raw[0]);
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
        <div class="col-sm-12 text-center d-grid gap-2">
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="commandConsumption" id="r_local"    autocomplete="off" value="Local" checked>
            <label class="btn btn-outline-primary" for="r_local">Consumo Local</label>
            <input type="radio" class="btn-check" name="commandConsumption" id="r_delivery" autocomplete="off" value="Retira">
            <label class="btn btn-outline-primary" for="r_delivery">Para llevar</label>
          </div>
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
    var consumption = document.querySelector('input[name="commandConsumption"]:checked').value;

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

    var url = '/command'; var method = 'POST';
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
        document.getElementById('request_pending').innerHTML = `
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        Su pedido se ha enviado al restaurante.
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg></h5>`;
        document.getElementById('request_pending').classList.add('text-bg-primary');

        document.getElementById('request_confirmed').innerHTML = '<small class="fw-lighter text-secondary">Su pedido ya fue revisado.</small>';
        document.getElementById('request_ready').innerHTML = '<small class="fw-lighter text-secondary">Su pedido esta listo.</small>';
        document.getElementById('status_progress').style.width = '30%';
        break;
      case 2:
        document.getElementById('request_pending').innerHTML = '<small>Su pedido se ha enviado al restaurante.</small>';
        document.getElementById('request_pending').classList.remove('text-bg-primary');
        document.getElementById('request_pending').classList.add('text-bg-secondary');

        document.getElementById('request_confirmed').innerHTML = `
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        Su pedido ya fue revisado.
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg></h5>`;
        document.getElementById('request_confirmed').classList.add('text-bg-primary');
        
        document.getElementById('request_ready').innerHTML = '<small class="fw-lighter text-secondary">Su pedido esta listo.</small>';
        document.getElementById('status_progress').style.width = '60%';
        break;
      case 3:
        document.getElementById('request_pending').innerHTML = '<small>Su pedido se ha enviado al restaurante.</small>';
        document.getElementById('request_pending').classList.add('text-bg-secondary');
        document.getElementById('request_pending').classList.remove('text-bg-primary');

        document.getElementById('request_confirmed').innerHTML = '<small>Su pedido se ha confirmado.</small>';
        document.getElementById('request_confirmed').classList.remove('text-bg-primary');
        document.getElementById('request_confirmed').classList.add('text-bg-secondary');

        document.getElementById('request_ready').innerHTML = `
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        Su pedido esta listo.
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg></h5>`;
        document.getElementById('request_ready').classList.add('text-bg-primary');
        document.getElementById('status_progress').style.width = '100%';
        break;
      case 4:
        document.getElementById('request_pending').innerHTML = '';
        document.getElementById('request_confirmed').innerHTML = '';
        document.getElementById('request_ready').innerHTML = '';
        document.getElementById('request_ready').classList.remove('text-bg-primary');
        document.getElementById('request_ready').classList.add('text-bg-secondary');

        document.getElementById('request_closed').innerHTML = `
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
        Este pedido ya esta cerrado.
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg></h5>`;
        document.getElementById('request_closed').classList.add('text-bg-primary');
        document.getElementById('request_pending').classList.remove('text-bg-secondary');
        document.getElementById('request_confirmed').classList.remove('text-bg-secondary');
        document.getElementById('request_ready').classList.remove('text-bg-secondary');
        setTimeout(() => {
          window.location.href = "../request/new";
        }, 5000);
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
    var check_lastest = [];
    raw_lastest.map((article) => {
      if (check_lastest.findIndex((element) => element === article.tx_article_slug) === -1) {
        if(cls_general.is_empty_var(article.tx_article_thumbnail) === 0) {
          var thumbnail = `
            <svg width="80px" height="80px" class="" viewBox="0 0 108 108" id="Layeri" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g class="cls-2">
                <g id="Line">
                  <path d="M85.5,2h-63a7,7,0,0,0,0,14h.61q2.3,41.22,4.58,82.44a8,8,0,0,0,8,7.56H72.32a8,8,0,0,0,8-7.56Q82.61,57.22,84.89,16h.61a7,7,0,0,0,0-14ZM76.32,98.22a4,4,0,0,1-4,3.78H35.68a4,4,0,0,1-4-3.78L30.56,78H77.44ZM77.67,74H30.33L28.39,39H79.61ZM85.5,12H48v4H80.89L79.83,35H28.17L27.11,16H36V12H22.5a3,3,0,0,1,0-6h63a3,3,0,0,1,0,6Z"></path><path d="M24.33,38.11A2,2,0,0,1,24,37a2,2,0,0,1,.22-.91Z"></path><path d="M84,37a2,2,0,0,1-.33,1.11l.11-2A2,2,0,0,1,84,37Z"></path><path d="M42.66,64.3c0,.11-.08.21-.12.3-2.8-4.3-1.41-11.1,3.52-16,4.32-4.32,10.06-5.92,14.31-4.37a21.45,21.45,0,0,0-2.16,4.55,12.17,12.17,0,0,1-2.15,4.17,12.17,12.17,0,0,1-4.17,2.15A16.17,16.17,0,0,0,46,58.36,16.17,16.17,0,0,0,42.66,64.3Z"></path><path d="M60.91,63.42c-4.3,4.3-10,5.9-14.26,4.39.25-.58.48-1.17.69-1.74a12.17,12.17,0,0,1,2.15-4.17,12.17,12.17,0,0,1,4.17-2.15,16.17,16.17,0,0,0,5.94-3.3,16.17,16.17,0,0,0,3.3-5.94,19.87,19.87,0,0,1,1.45-3.26C67.26,51.54,65.9,58.44,60.91,63.42Z"></path><rect height="4" rx="2" ry="2" width="4" x="40" y="12"></rect>
                </g>
              </g>
            </svg>
          `
        }else{
          var thumbnail = `<img src="../attached/image/article/${article.tx_article_thumbnail}" class="article_last">`;
        }
        content += `
          <div class="col-3 col-lg-2">
            <div class="card cursor_pointer pt-2 border-danger border-2" onclick="cls_request.add_articlelastest(${article.ai_commanddata_id})">
              <div class="col-sm-12 text-center">
                ${thumbnail}
              </div>
              <div class="card-body">
                <p class="article_title text-truncate">${article.tx_commanddata_description}</p>
                <span class="badge rounded-pill text-bg-secondary">B/ ${cls_general.val_price(article.tx_commanddata_price,2,1,1)}</span>
              </div>
            </div>
          </div>
        `;


        check_lastest.push(article.tx_article_slug)
      }

    })
    return content;
  }

  add_articlelastest(command_id){

    var url = '/commanddata/'+command_id;
    var method = 'GET';
    var body = '';
    var funcion = function (obj) {
      if (obj.status === 'success') {
        cls_command.command_list.push({
          'article_slug': obj.data.info.tx_article_slug,
          'article_id': obj.data.info.ai_article_id,
          'article_description': obj.data.info.tx_commanddata_description,
          'quantity': obj.data.info.tx_commanddata_quantity,
          'option': obj.data.info.tx_commanddata_option,
          'presentation_id': obj.data.info.commanddata_ai_presentation_id,
          'presentation_value': obj.data.info.tx_presentation_value,
          'price': obj.data.info.tx_commanddata_price,
          'tax_rate': obj.data.info.tx_commanddata_taxrate,
          'discount_rate': obj.data.info.tx_commanddata_discountrate,
          'recipe': JSON.parse(obj.data.info.tx_commanddata_recipe)
        });

        cls_command.check_articleselected();
      } else {
        cls_general.shot_toast_bs(obj.message, { bg: 'text-bg-warning' });
      }
    }
    cls_general.async_laravel_request(url, method, funcion, body);

  }
}