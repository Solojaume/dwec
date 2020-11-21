//Tema 2
function comprobarStock($elemento) {
  /*Comprobaremos que quedan artículos disponibles. El stock debe ser mayor
  que 0, si no es así, no haremos ninguno de los siguientes puntos.
 */
  let stock = parseInt($elemento.find(".stock").html().replace("Stock ", ""));
  if (stock >= 0)
    return 1;
  return 0;
  //return stock;
}

function actualizarStock($elemento, operador) {
  // Si operador es 1 se sumara stock si es 0 se restara stock

  let stock = parseInt($elemento.find(".stock").html().replace("Stock ", ""));
  if (operador == 0) {
    stock = stock - 1;
    if (stock >= 0) {
      $elemento.find(".stock").html("Stock " + (stock));
      return 1;
    } else {
      $elemento.find(".stock").html("Stock " + (0));
      $elemento.addClass("agotado", $elemento.find(".stock"));
      return 0;
    }
  } else {
    stock = stock + 1;
  }
}

function actualizarCarrito($elemento, operador) {
  let articulos = parseInt($elemento.val());
  if (operador == 0) {
    articulos = articulos - 1;
  } else {
    articulos = articulos + 1;
  }
  $elemento.val(articulos);
}

function actualizarPrecioTotal($elemento, $elemento2,operador) {
  let precio=parseInt($elemento2.find(".price").html().replace(" €",""));
  let total = parseInt($elemento.val());
  
  if (operador == 0) {
    total = total - precio;
  } else {
    total = total + precio;
  }
  $elemento.val(total);
}

function anyadirItemCarrito($item,$carrito){
  let $itemClonado=$item.clone();
  $itemClonado.attr("id","c"+$item.attr("id"));
  $carrito.append($itemClonado);
  return $itemClonado;
}
function addIcard($elemento){
  $elemento.addClass("icart");
}

function hideStock($elemento){
  $elemento.find(".stock").hide();
}

$(function () {
  $("#citem").val(0);
  $("#cprice").val(0);
  $(".item").dblclick(function (event) {
    if (comprobarStock($(this)) == 1) {
      if (actualizarStock($(this), 0) == 1) {
        actualizarCarrito($("#citem"), 1);
        actualizarPrecioTotal($("#cprice"), $(this), 1);
        let $cItem=anyadirItemCarrito($(this),$("#cart_items"));
        addIcard($cItem);
        hideStock($cItem);
      }
    }

  })
});