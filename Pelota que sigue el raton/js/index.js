window.onload = function () {
    var contenedor = document.getElementById("contenedor");
    document.onmousemove = mueveObjeto;

    var pelota = document.getElementById("pelota");

}

function mueveObjeto(unEvento) {
    var evento = window.event || unEvento;
    var X = evento.clientX;
    var Y = evento.clientY;

    console.log("X:" + X);
    console.log("pe" + (pelota.offsetLeft ));
    if (pelota.offsetLeft < X) {
        pelota.style.left = X - 100 + "px";
    } else {
        pelota.style.left = X + 100 + "px";
    }


}