/*import * as a from './ahorcado.js';
import Ahorcado from a.Ahorcado;*/


//Declarando clase ahorcado
class Ahorcado {
  constructor() {
    this.arrayletrasfalladas = [];
    //Array con las letras de la palabra
    this.arrayletraspalabra = [];
    //Array con las letras que el usuario a ido introduciendo y son correctas
    this.arrayletrasacertadas = [];
    //String con la palabra deseada;
    this.palabra = "";
    //Array palabras
    this.arrayPalabras = ["OLA", "CARACOL", "CONFINAMIENTO", "AHORCADO"];
    //Letras acertadas
    this.acertadas = 0;
    //Vidas
    this.vidas = 7;
  }

  setArrayLetrasPalabra() {
    this.arrayletraspalabra = this.palabra.split("");
  }

  anadirLetraFallada(letra) {
    this.arrayletrasfalladas.push(letra);
  }

  anadirLetraAcertada(letra) {
    this.arrayletrasacertadas.push(letra);
  }

  setPalabra() {
    this.palabra = this.arrayPalabras[_.random(0, this.arrayPalabras.length-1)];

  }

  anadirPalabraAArrayPalabras(palabra) {
    this.arrayPalabras.push(palabra);
  }

  resetearAhorcado() {
    this.setPalabra();
    ahorcado.setArrayLetrasPalabra();
    this.arrayletrasacertadas = [];
    this.arrayletrasfalladas = [];
    this.acertadas = 0;
    this.vidas = 7;
  }
}


//INDEX
window.onload = function () {
  var inicio = document.getElementById("inicio");
  var introducir = document.getElementById("introducir");
  var juego = document.getElementById("juego");
  var espaciospalabra = document.getElementById("espaciospalabra");
  var perdidoganado = document.getElementById("perdidoganado");
  var teclado = document.getElementById("teclado");

  document.getElementById("empezar").addEventListener("click", () => muestraocultainicio("empezar"));
  document.getElementById("anadir").addEventListener("click", e => muestraocultainicio("anadir"));
  document.getElementById("empezar2").addEventListener("click", muestraocultaintroducir);
  document.getElementById("volverinicio").addEventListener("click", e => muestraocultainicio("volverinicio"));
};

//Se declara un nuevo objeto de tipo ahorcado

const ahorcado = new Ahorcado();

function muestraocultainicio(e) {
  //Se oculta inicio
  inicio.style.display = "none";
 
  if (e == "empezar") {
    juego.style.display = "inline";
     //Resetea los datos del ahorcado para jugar una nueva partida
     ahorcado.resetearAhorcado();
    console.log(ahorcado.palabra);
    texto = "";
    crearTeclado();

    0 //Se muestra la pantalla del juego
    juego.style.display = "inline";
    for (let i = 0; i < ahorcado.palabra.length; i++) {
      texto = texto + "_ ";
    }
    espaciospalabra.innerHTML = texto;
    perdidoganado.innerHTML = "";
  } else if (e == "anadir") {
    introducir.style.display = "inline";
  } else {
    juego.style.display = "none";
    //Se muestra la pantalla del inicio
    inicio.style.display = "inline";
    
  }
}

function muestraocultaintroducir() {
  //Se lee la palabra del input
  var palabra = "";
  palabra = document.getElementById("palabraintroducida").value.toUpperCase();
  document.getElementById("palabraintroducida").value = "";
  if (palabra != "") {
    //Se oculta introducir
    introducir.style.display = "none";

    //Se muestra la pantalla del inicio
    inicio.style.display = "inline";
    ahorcado.anadirPalabraAArrayPalabras(palabra.toUpperCase());
  }
}



//Se declara las letras del abecedario
abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tecladoImpreso = false;

function crearTeclado() {
  if (!tecladoImpreso) {
    for (let index = 0; index < abc.length; index++) {
      if (index % 7 == 0) {
        div = document.createElement("div");
        teclado.appendChild(div);
      }

      var bt = document.createElement("button");
      bt.addEventListener("click", compruebaLetra);
      bt.innerHTML = abc[index];
      bt.className = "btn btn-secondary btn-letras";
      bt.id = abc[index];
      div.appendChild(bt);

    }
  }else{
    teclado.style.display = "inline";
    for (let index = 0; index < abc.length; index++) {
      //Quita el atributo disable para que los botones se puedan usar en la siguiente partida
      document.getElementById(abc[index]).removeAttribute("disabled");
    }
   
  }
  tecladoImpreso = true;
}


function compruebaLetra() {
  this.disabled = "true";
  texto = "";
  acer = 0;
  for (index = 0; index < ahorcado.arrayletraspalabra.length; index++) {
    if (ahorcado.arrayletraspalabra[index] == this.id) {
      texto = texto + this.id + " ";
      //Esto se hace asi para corregir un bug que hacia que no se mostrasen las letras en su lugar
      if (ahorcado.arrayletrasacertadas.length != ahorcado.arrayletraspalabra.length) {
        ahorcado.arrayletrasacertadas.push(this.id);
      } else {
        ahorcado.arrayletrasacertadas[index] = this.id;
      }
      acer = acer + 1;
    } else if (ahorcado.arrayletrasacertadas.length == ahorcado.arrayletraspalabra.length) {
      texto = texto + ahorcado.arrayletrasacertadas[index] + " ";
    } else if (ahorcado.arrayletrasacertadas.length <= ahorcado.arrayletraspalabra.length) {
      texto = texto + "_ ";
      ahorcado.arrayletrasacertadas.push('_');

    }

    //Se muestra la palabra al usuario
    espaciospalabra.innerHTML = texto;
  }

  //Se comprueba si la letra esta en la palabra o no
  if (acer == 0) {
    ahorcado.arrayletrasfalladas.push(this.id);
    ahorcado.vidas = ahorcado.vidas - 1;
    alert("Quedan : " + ahorcado.vidas + " vidas");
  }

  if (acer > 0) {
    ahorcado.acertadas = ahorcado.acertadas + acer;
  }
  if (ahorcado.vidas <= 0) {
    findepartida(0); //Partida perdida
  }

  if (ahorcado.acertadas == ahorcado.palabra.length) {
    findepartida(1); //partida ganada
  }
}


//Metodo para terminar partida
function findepartida(ganadaperdida) {

  perdidoganado.style.display = "inline";
  if (ganadaperdida == 1) {
    perdidoganado.innerHTML = "ganado";
  } else {
    perdidoganado.innerHTML = "perdido";
  }

  //Ocultar el teclado para que no se pueda utilizar
  teclado.style.display = "none";

}