import Ahorcado from './ahorcado.js';

window.onload = function() {
  var inicio = document.getElementById("inicio");
  var introducir = document.getElementById("introducir");
  var juego = document.getElementById("juego");
  var espaciospalabra = document.getElementById("espaciospalabra");
  var letrasfalladas = document.getElementById("letrasfalladas");
 
  document.getElementById("empezar").addEventListener("click",muestraocultainicio);
  document.getElementById("anadir").addEventListener("click",muestraocultainicio);
  document.getElementById("empezar2").addEventListener("click",muestraocultaintroducir);
  document.getElementById("comprobar").addEventListener("click",compruebapalabra);
};

var ahorcado = new Ahorcado();

function muestraocultainicio() {
  this.style.display = "none";
  if(this.id=="empezar"){
    introducir.style.display = "inline";
  }
  else{
    juego.style.display = "inline";
  }
}

function muestraocultaintroducir() {
  //Se lee la palabra del input
  palabra = document.getElementById("palabraintroducida").value.toUpperCase();
  texto = "";
  if (palabra != "") {
    //Se oculta introducir
    introducir.style.display = "none";

    //Se muestra la pantalla del juego
    juego.style.display = "inline";
    for (let i = 0; i < palabra.length; i++) {
      texto = texto + "_ ";

    }
    espaciospalabra.innerHTML = texto;
    letraspalabra = palabra.split('');
  }
}


function compruebapalabra() {
  letraintroducida = document.getElementById("letraintroducida").value.toUpperCase();
  texto = "";
  acer = 0;
  for (index = 0; index < letraspalabra.length; index++) {
    if (letraspalabra[index] == letraintroducida) {
      texto = texto + letraintroducida + " ";
      //Esto se hace asi para corregir un bug que hacia que no se mostrasen las letras en su lugar
      if (letrasacertadas.length != letraspalabra.length) {
        letrasacertadas.push(letraintroducida);
      } else {
        letrasacertadas[index] = letraintroducida;
      }
      acer = acer + 1;
    } else if (letrasacertadas.length == letraspalabra.length) {
      texto = texto + letrasacertadas[index] + " ";
    } else if (letrasacertadas.length <= letraspalabra.length) {
      texto = texto + "_ ";
      letrasacertadas.push('_');

    }

    //Se muestra la palabra al usuario
    espaciospalabra.innerHTML = texto;
  }

  //Se comprueba si la letra esta en la palabra o no
  if (acer == 0) {
    arrayletrasfalladas.push(letraintroducida);
    alert("Quedan : " + vidas + " vidas");
  } else if (arrayletrasfalladas.indexOf(letraintroducida) <= 0) {
    letrasfalladas.innerHTML = letrasfalladas.innerHTML + letraintroducida + ", ";
  } else {
    vidas = vidas - 1;
  }

  if (acer > 0 && letrasacertadas.indexOf(letraintroducida) == -1) {
    acertadas = acertadas + 1;
  }
  if (vidas <= 0) {
    findepartida(0);//Partida perdida
  }

  if (acertadas == palabra.length) {
    findepartida(1);//partida ganada
  }


}


function findepartida(ganadaperdida) {
  if (ganadaperdida == 1) {
    alert("Has ganado");
  } else {
    aalert("Has perdido")
  }
  juego.style.display = "none";
  //Se muestra la pantalla del inicio
  inicio.style.display = "inline";
}