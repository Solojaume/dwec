window.onload = function () {
    var acertadas = document.getElementById("acertadas");
    var falladas = document.getElementById("falladas");

    //Drags
    var circulo = document.getElementById("circulo");
    var cuadrado = document.getElementById("cuadrado");
    var rectangulo = document.getElementById("rectangulo");
    var triangulo = document.getElementById("triangulo");

    //Drops
    var contenedor = document.getElementById("contenedor");
    let agujeroCirculo = document.getElementById("agujeroCirculo");
    let agujeroCuadrado = document.getElementById("agujeroCuadrado");
    let agujeroRectangulo = document.getElementById("agujeroRectangulo");
    let agujeroTriangulo = document.getElementById("agujeroTriangulo");

    agujeroCirculo.ondrop = drop;
    contenedor.ondrop = drop;
    agujeroCuadrado.ondrop = drop;
    agujeroRectangulo.ondrop = drop;
    agujeroTriangulo.ondrop = drop;

    agujeroCirculo.ondragover = dragover;
    agujeroCuadrado.ondragover = dragover;
    agujeroRectangulo.ondragover = dragover;
    agujeroTriangulo.ondragover = dragover;
    contenedor.ondragover = dragover;

    circulo.ondragstart = dragstar;
    cuadrado.ondragstart = dragstar;
    rectangulo.ondragstart = dragstar;
    triangulo.ondragstart = dragstar;
}

var contAcertadas = 0;
var contFalladas = 0;
// Como siempre se va ejecutar el mismo codigo, he decidido crear una constante asignandole una funcion arrow
const dragover = (ev) => ev.preventDefault();
const dragstar = (ev) => ev.dataTransfer.setData("id_arrastrado", ev.target.id);

const drop = (ev) => {
    ev.preventDefault();
    //optenemos el id del objeteto que esta siendo arrastrado
    let arrastrado = ev.dataTransfer.getData("id_arrastrado");
    if (ev.target.id.toLowerCase() == "agujero" + arrastrado) {
        //Movemos el objeto arrastrado
        ev.target.appendChild(document.getElementById(arrastrado));
        contAcertadas++;
        if (contAcertadas == 4) {
            hasGanado();
        }
    } else if (ev.target.id == "contenedor") {
        //Movemos el objeto arrastrado
        ev.target.appendChild(document.getElementById(arrastrado));
    } else {
        contFalladas++;
    }
    acertadas.innerHTML = contAcertadas;
    falladas.innerHTML = contFalladas;

}

function hasGanado() {
    alert("Has ganado")
    acertadas.innerHTML = "";
    falladas.innerHTML = "";
    contAcertadas = 0;
    contFalladas = 0;
    contenedor.appendChild(cuadrado);
    contenedor.appendChild(triangulo);
    contenedor.appendChild(circulo);
    contenedor.appendChild(rectangulo);
}