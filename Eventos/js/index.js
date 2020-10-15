window.onload = function () {
    document.onkeyup = muestraInformacion;
    document.onkeypress = muestraInformacion;
    var contenedor= document.getElementById("contenedor");
    var cuadrado= document.getElementById("cuadrado");
    var info=document.getElementById("info");
}

function muestraInformacion(elEvento) {
    var evento = window.event || elEvento;
    if(evento.keyCode==39){
        var posicion=cuadrado.offsetLeft+5;
        if(posicion<250){//Es 250 porque es el resultado de restar el ancho del cuadrado al ancho del contenedor
            cuadrado.style.left=posicion+"px";
        }
    }
    else if(evento.keyCode==38){
        var posicion=cuadrado.offsetTop-5;
        if(posicion>=0){
            cuadrado.style.top=posicion+"px";
        }
    }
    else if(evento.keyCode==37){
        var posicion=cuadrado.offsetLeft-5;
        console.log(posicion);
        if(posicion>0){//Es 250 porque es el resultado de restar el ancho del cuadrado al ancho del contenedor
            cuadrado.style.left=posicion+"px";
        }
    }
    else if(evento.keyCode==40){
        var posicion=cuadrado.offsetTop+5;
        if(posicion<250){
            cuadrado.style.top=posicion+"px";
        }
    }          
}