window.onload = function () {
    var contenedor = document.getElementById("contenedor");
    document.onmousemove = mueveObjeto;

    var pelota = document.getElementById("pelota");

}

function mueveObjeto(unEvento) {
    var evento = window.event || unEvento;
    var X = evento.clientX;
   
    var XAnterior = -100;
    var YAnterior = -100;
    var seHaMovido = false; //Sirve para comprovar si se a movido alguna vez el raton
    var cont = 0;
    var ratonDelanteDePelota = false;
    var xArray = [-100, -100, -100, -100]
    if (!seHaMovido) {
        console.log("X:" + X);

        console.log("pe:" + (pelota.offsetLeft));
        console.log("CON: " + cont);
        
        if (pelota.offsetLeft==X){
           ratonDelanteDePelota = false;
        }else{
            ratonDelanteDePelota=true;
        }

        if (pelota.offsetLeft < X && ratonDelanteDePelota) {
            pelota.style.left = X - 100 + "px";
        } else {
            pelota.style.left = X + 100 + "px";
        }

        xArray[cont] = X;
        cont = x=cont=>{return cont+ 1};
        if (cont <= xArray.length) {
            cont = 0;
        }
    }
    
    seHaMovido = true;
}

function Media(a) {
    a
}