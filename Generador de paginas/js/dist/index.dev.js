"use strict";

var componentes = [];

function createElement() {
  $('<input/>');
}

function addElement($element) {
  var id = $element.attr('id');
  var $componente = $('<' + id + '>').html("hola");
  $componente.addClass(id);
  $('#divContainerComponentes').append($componente);
}

$(function () {
  var $elemento = $('div');
  $(".selectComponent").click(function (event) {
    addElement($(this));
  });
});