function actualizaStockProducto($item, incremento)
{
	var actualizado = false;
	var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));
	
	if (stock+incremento >= 0)
	{
		stock += incremento;
		$item.children(".stock").html("Stock " + stock);
		if (stock == 0)
			$item.find(".stock").addClass("agotado");
		else
			$item.find(".stock").removeClass("agotado");
			
		actualizado = true;
	}
	
	return actualizado;
}

function actualizaNumeroProductosPedidos(incremento)
{
	var numProductosPedido = parseInt($("#citem").val());
	numProductosPedido += incremento;
	$("#citem").val(numProductosPedido);
}

function actualizaPrecioTotal($item, incremento)
{
	var precioPedido = parseInt($("#cprice").val());
	precioPedido += parseInt(incremento);
	$("#cprice").val(precioPedido + " €");
}

function eliminaProductoDelCarrito($item)
{
	var id = $item.attr("id");
	id = id.substring(1);
	
	actualizaStockProducto($("#"+id), 1);
	
	actualizaNumeroProductosPedidos(-1);
	
	actualizaPrecioTotal($item, -parseInt($item.children(".price").html()));
	
	$item.remove();
}

function anyadeProductoAlCarrito($item)
{
	var $delete = $('<a href="" class="delete"></a>');

	/*$delete.click(function (evento)
	{
		eliminaProductoDelCarrito($(this).parent());
		return false;
	});
	*/
	var id = "c"+$item.attr("id");
	$copia = $item.clone().attr("id", id).addClass('icart').prepend($delete);
	$copia.children(":not(a)").andSelf().css("cursor", "default").find(".stock").hide();
	
	$("#cart_items").prepend($copia);
}

//Tema 3
function establece_evento_dblclick_items($item){
	var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));
	
	if (stock <= 0){
		$item.off("dblclick");
	}else{
		$item.dblclick(function()
		{
			if(numArticulosCarrito<1){
			if (actualizaStockProducto($(this), -1) == true)
			{
				actualizaNumeroProductosPedidos(1);
				
				actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));
				
				anyadeProductoAlCarrito($(this));
			}
		});
	}
}

function desplazarElementosCarrito(desplazamiento){
	var numArticulosCarrito = $("#cart_items").children().length;
	console.log()
	console.log(numArticulosCarrito);
	if(numArticulosCarrito>4){
		$("#cart_items").position().left+=desplazamiento;
		console.log($("#cart_items").position().left);
	}
}

$(function() 
{
	/*$(".item").dblclick(function()
	{
		if (actualizaStockProducto($(this), -1) == true)
		{
			actualizaNumeroProductosPedidos(1);
			
			actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));
			
			anyadeProductoAlCarrito($(this));
		}
	});*/
	$(document).on("click",".delete",function (evento){
		evento.preventDefault();
		eliminaProductoDelCarrito($(this).parent());
		establece_evento_dblclick_items($(this).parent());
		return false;
	});

	establece_evento_dblclick_items($(".item"));

	$(document).on("click","#btn_clear",function (evento){
		$(".delete").trigger("click");
	});
	
	$(document).on("click","btn-next",function (evento){
		desplazarElementosCarrito();
	})
	
	$(document).on("click","#btn_prev", function(evento){
		desplazarElementosCarrito(-60);
	})
	$(document).on("click","#btn_next", function(evento){
		desplazarElementosCarrito(60);
	})
});
var posicionInicial=0;