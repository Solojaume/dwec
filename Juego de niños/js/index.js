
window.onload = function () {
    var circulo = document.getElementById("circulo");
    var contenedor = document.getElementById("contenedor");
    var cuadrado = document.getElementById("cuadrado");
    var agujeroCirculo = document.getElementById("agujeroCirculo");
    var agujeroCuadrado = document.getElementById("agujeroCuadrado");
    	
	agujeroCirculo.ondrop = drop;
    contenedor.ondrop = drop;
    agujeroCuadrado.ondrop = drop;

    agujeroCirculo.ondragover = (ev) =>  ev.preventDefault();
    agujeroCuadrado.ondragover = (ev) =>  ev.preventDefault();
    contenedor.ondragover = (ev) =>  ev.preventDefault();

    circulo.ondragstart = (ev) => ev.dataTransfer.setData("text", ev.target.id);
    cuadrado.ondragstart =  (ev) => ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
