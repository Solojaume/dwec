"use strict";

var componentes = [];

function createElement() {
  var $form = $('<form/>');
  var input = $('<input type="text">');
}

function addElement($element) {
  var id = $element.attr('id');
  var $componente = $('<' + id + '>').html("hola");
  $componente.addClass(id);
  $('#divContainerComponentes').append($componente);
}

$(function () {
  $('#btnNuevoFormulario').on("click", function (event) {
    $('#nuevoFormulario').css("display", "none");
    $('#genForm').css("display", "inline");
    $titulo = $('#titulo');
    $('#divContainerComponentes').addElement();
  });
  var $elemento = $('div');
  $(".selectComponent").click(function (event) {
    addElement($(this));
  });
});