
window.onload = function() {
  var inicio = document.getElementById("inicio");
  var introducir =document.getElementById("inicio");
  var juego = document.getElementById("juego");
  var palabra="";
  document.getElementById("empezar").addEventListener("click",mouestraroculta);
};

function mouestraroculta(){
 
  inicio.style.display ="none";
  palabra=prompt("Escribe una palabra:");
  introducir.style.display="";
  juego.style.display="";
  alert(palabra);
}