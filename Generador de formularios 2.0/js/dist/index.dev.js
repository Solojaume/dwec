"use strict";

var cantidadComponentes = 0;

function addComponent(tipo) {
  //Input menu propiedades
  var $inputMenuPropiedades = $("#inputMenuPropiedades"); //se crea el contenedor del componente 

  var $componente = $('<div class="componente">').addClass(tipo); //En el siguiente let se crea el label del componente, en el caso de ser un simple label
  //solo se añade el label

  var $p = $('<p class="labelsElemento">').html($inputMenuPropiedades.val());
  $componente.append($p);
  var $div = $();
  var $label = $();
  var $input = $();
  var cont = 1;
  var numeroInputs = $('#cantidad').val();

  switch (tipo) {
    case "text":
      $input = $('<input type="' + tipo + '" name="' + $inputMenuPropiedades.val() + cantidadComponentes + '">').addClass('form-control');
      $componente.append($input);
      break;

    case "textarea":
      $input = $('<textarea name="' + $inputMenuPropiedades.val() + cantidadComponentes + '">');
      $input.addClass('form-control');
      $componente.append($input);
      break;

    case "checkbox":
      for (var index = 1; index <= numeroInputs; index++) {
        var $inputLeido = $('#input' + index).val();
        $div = $('<div class="form-check">');
        $label = $('<label>').addClass("form-check-label").attr('for', $inputLeido + index);
        $label.html($inputLeido);
        $input = $('<input class="form-check-input" id="' + $inputLeido + index + '"  name="' + $inputMenuPropiedades.val() + '" type="checkbox" >');
        $div.append($input);
        $div.append($label);
        $componente.append($div);
      }

      break;

    case "radio":
      for (var _index = 1; _index <= numeroInputs; _index++) {
        var _$inputLeido = $('#input' + _index).val();

        $div = $('<div class="form-check">');
        $label = $('<label>').addClass("form-check-label").attr('for', _$inputLeido + _index);
        $label.html(_$inputLeido);
        $input = $('<input class="form-check-input" id="' + _$inputLeido + _index + '"  name="' + $inputMenuPropiedades.val() + '" type="radio" >');
        $div.append($input);
        $div.append($label);
        $componente.append($div);
      }

      break;

    case "dropdown":
      var $dropdown = $('<div>').addClass('dropdown');
      var $but = $('<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">');
      $but.html($inputMenuPropiedades.val());
      $dropdown.append($but);
      var $ul = $('<ul>').addClass("dropdown-menu").attr('aria-labelledby', 'dropdownMenuButton1');

      for (var _index2 = 0; _index2 < array.length; _index2++) {
        var _$inputLeido2 = $('#input' + _index2).val();

        var $elemento = $('<a>').addClass('dropdown-item').attr('href', '#');
        $elemento.html(_$inputLeido2);
        $elemento = $('<li>').append($elemento);
        $ul.append($elemento);
      }

      $dropdown.append($ul);
      $componente.append($dropdown);
      break;

    default:
      console.log("default");
      break;
  } //Se añade el componente al formulario


  $componente.addClass("componente");
  $('#formContainerComponentes').append($componente);
  ocultarMenuPropiedades();
  cantidadComponentes = cantidadComponentes + 1;
}

function mostrarMenuComponentesComplejos(cantidad) {
  if (cantidad > 1) {
    for (var index = 2; index <= cantidad; index++) {
      var $inp = $('#divInputReferencia').clone().removeAttr('id');
      $inp.find("input").attr("id", "input" + index);
      $(".divInputs").append($inp);
    }
  }
}

function ocultarMenuPropiedades() {
  $('#propiedadesComponentes').css("display", "none");
  $('#menuComponentesComplejos').css("display", "none");
  $('#menuComponentes').css("display", "inline"); //Se hace displey block a los li que estan dentro del div menuComponente para que se vean uno debajo del otro

  $('.selectComponent').css('display', 'block');
  $("#cantidad").val("");
  $('.divInputs').empty();
}

function mostrarMenuPropiedadesComponentes(tipo, editarAnayadir) {
  $('#propiedadesComponentes').css('display', 'inline');
  $('#menuComponentes').css("display", "none");

  if (tipo == "radio" || tipo == "checkbox" || tipo == "select") {
    $('#menuComponentesComplejos').css("display", "inline");
  }

  if (editarAnayadir == "crear") {
    //se elimina el evento click para que  la prosima vez que se clique al boton añada o edite
    $("#buttonAnyadirModificar").off("click").click(function (event) {
      var tipoComponente = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tipo;
      addComponent(tipoComponente);
    });
  } else {}
}

$(function () {
  $('#btnNuevoFormulario').on("click", function (event) {
    $('#nuevoFormulario').css("display", "none");
    $('#genForm').css("display", "inline");
    $titulo = $('<h1>').html($('#titulo').val()).addClass('elementosStandardFormulario');
    $('#formContainerComponentes').append($titulo);
  });
  $('.selectComponent').on('click', function () {
    mostrarMenuPropiedadesComponentes($(this).attr('id'), 'crear');
  });
  $("#cantidad").change(function (event) {
    $('.divInputs').empty();
    mostrarMenuComponentesComplejos($(this).val());
  });
  $("#buttonAnyadirModificar").click(function (event) {
    var tipoComponente = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : tipo;
    addComponent(tipoComponente);
    ocultarMenuPropiedades();
  });
  $('#buttonCancelar').click(function () {
    ocultarMenuPropiedades();
  });
});