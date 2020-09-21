//hacer clicable
var array=document.getElementsByTagName("a");
//var enlace="enlace_"
for (var index = 0; index < array.length; index++) {
    document.getElementById(array[index].id).onclick = muestraOculta;  
}

function muestraOculta() {
    var numeroEnlace = this.id.substring(7);
    var contenidos = document.getElementById("contenidos_"+numeroEnlace);
    var enlace = document.getElementById("enlace_"+numeroEnlace);
    
    if(contenidos.style.display=="none") {
        contenidos.style.display="";
        enlace.innerHTML = 'Ocultar contenidos';
    }
    else {
        contenidos.style.display="none";
        enlace.innerHTML = 'Mostrar contenidos';
    }
}