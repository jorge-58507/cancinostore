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
      <svg width="80px" height="80px" class="" viewBox="0 0 108 108" id="Layeri" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="cls-2 ${bg}">
          <g id="Line">
            <path d="M85.5,2h-63a7,7,0,0,0,0,14h.61q2.3,41.22,4.58,82.44a8,8,0,0,0,8,7.56H72.32a8,8,0,0,0,8-7.56Q82.61,57.22,84.89,16h.61a7,7,0,0,0,0-14ZM76.32,98.22a4,4,0,0,1-4,3.78H35.68a4,4,0,0,1-4-3.78L30.56,78H77.44ZM77.67,74H30.33L28.39,39H79.61ZM85.5,12H48v4H80.89L79.83,35H28.17L27.11,16H36V12H22.5a3,3,0,0,1,0-6h63a3,3,0,0,1,0,6Z"/><path d="M24.33,38.11A2,2,0,0,1,24,37a2,2,0,0,1,.22-.91Z"/><path d="M84,37a2,2,0,0,1-.33,1.11l.11-2A2,2,0,0,1,84,37Z"/><path d="M42.66,64.3c0,.11-.08.21-.12.3-2.8-4.3-1.41-11.1,3.52-16,4.32-4.32,10.06-5.92,14.31-4.37a21.45,21.45,0,0,0-2.16,4.55,12.17,12.17,0,0,1-2.15,4.17,12.17,12.17,0,0,1-4.17,2.15A16.17,16.17,0,0,0,46,58.36,16.17,16.17,0,0,0,42.66,64.3Z"/><path d="M60.91,63.42c-4.3,4.3-10,5.9-14.26,4.39.25-.58.48-1.17.69-1.74a12.17,12.17,0,0,1,2.15-4.17,12.17,12.17,0,0,1,4.17-2.15,16.17,16.17,0,0,0,5.94-3.3,16.17,16.17,0,0,0,3.3-5.94,19.87,19.87,0,0,1,1.45-3.26C67.26,51.54,65.9,58.44,60.91,63.42Z"/><rect height="4" rx="2" ry="2" width="4" x="40" y="12"/>
          </g>
        </g>
      </svg>`;
      var description = (cls_general.is_empty_var(article.tx_article_description) === 0) ? '' : article.tx_article_description;
      if (filtered[index - 1] && article.tx_category_value != filtered[index-1]['tx_category_value']) {
        content += `<hr><h5 class="fw-bold pb-3 hr_category">${article.tx_category_value}</h5>`
      }
      content += `
        <div class="col-6 col-lg-4" onclick="cls_command.show_article('${article.tx_article_slug}','${article.tx_article_value}')">
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
        // content_option += `</div>`;
      }
      var option_presentation = ``; //OPTION PARA LAS PRESENTACIONES DEL ARTICULO, AL CAMBIAR CAMBIAR LOS PRECIOS
      obj.data.price.map((price) => {
        option_presentation += `<option alt="${price.tx_price_three},${price.tx_price_two},${price.tx_price_one}" value="${price.ai_presentation_id}">${price.tx_presentation_value}</option>`;
      })

      var tax_rate = obj.data.article.tx_article_taxrate;

      // var content = `
      //   <div class="row">
      //     <div class="col-md-12 col-lg-4">
      //       <label for="articlePresentation">Presentation</label>
      //       <select class="form-select" id="articlePresentation" onchange="cls_command.modal_set_price(this.options[this.selectedIndex].getAttribute('alt'), this.value, '${article_slug}')">
      //         ${option_presentation}
      //       </select>
      //     </div>
      //     <div class="col-6 col-lg-4">
      //       <label for="articleQuantity">Cantidad</label>
      //       <input type="number" class="form-control" id="articleQuantity" value="1" onfocus="cls_general.validFranz(this.id, ['number'])" >
      //     </div>
      //     <div id="container_price" class="col-6 col-lg-4">
      //     </div>
      //     <div class="col-sm-12">
      //       <div id="container_recipe" class="row">
      //       </div>
      //     </div>
      //     <div class="col-md-12 col-lg-4">
      //       <input type="hidden" class="form-control" id="articleDiscountrate" value="${obj.data.article.tx_article_discountrate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
      //       <input type="hidden" class="form-control" id="articleTaxrate" value="${tax_rate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
      //     </div>
      //     ${content_option}
      //   </div>
      // `;
      var content = `
        <form id="create_command" action="">
          <div class="tab_step h_150 display_none">
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
              <div class="col-md-12 col-lg-4">
                <input type="hidden" class="form-control" id="articleDiscountrate" value="${obj.data.article.tx_article_discountrate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
                <input type="hidden" class="form-control" id="articleTaxrate" value="${tax_rate}" onfocus="cls_general.validFranz(this.id, ['number'])" required>
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
            <div class="card cursor_pointer pt-2 border-success border-2" onclick="cls_request.add_articlelastest(${article.ai_commanddata_id})">
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