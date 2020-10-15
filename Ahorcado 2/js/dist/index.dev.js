"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*import * as a from './ahorcado.js';
import Ahorcado from a.Ahorcado;*/
//Declarando clase ahorcado
var Ahorcado =
/*#__PURE__*/
function () {
  function Ahorcado() {
    _classCallCheck(this, Ahorcado);

    this.arrayletrasfalladas = []; //Array con las letras de la palabra

    this.arrayletraspalabra = []; //Array con las letras que el usuario a ido introduciendo y son correctas

    this.arrayletrasacertadas = []; //String con la palabra deseada;

    this.palabra = ""; //Array palabras

    this.arrayPalabras = ["OLA", "CARACOL", "CONFINAMIENTO", "AHORCADO"]; //Letras acertadas

    this.acertadas = 0; //Vidas

    this.vidas = 7;
  }

  _createClass(Ahorcado, [{
    key: "setArrayLetrasPalabra",
    value: function setArrayLetrasPalabra() {
      this.arrayletraspalabra = this.palabra.split("");
    }
  }, {
    key: "anadirLetraFallada",
    value: function anadirLetraFallada(letra) {
      this.arrayletrasfalladas.push(letra);
    }
  }, {
    key: "anadirLetraAcertada",
    value: function anadirLetraAcertada(letra) {
      this.arrayletrasacertadas.push(letra);
    }
  }, {
    key: "setPalabra",
    value: function setPalabra() {
      this.palabra = this.arrayPalabras[_.random(0, this.arrayPalabras.length - 1)];
    }
  }, {
    key: "anadirPalabraAArrayPalabras",
    value: function anadirPalabraAArrayPalabras(palabra) {
      this.arrayPalabras.push(palabra);
    }
  }, {
    key: "resetearAhorcado",
    value: function resetearAhorcado() {
      this.setPalabra();
      ahorcado.setArrayLetrasPalabra();
      this.arrayletrasacertadas = [];
      this.arrayletrasfalladas = [];
      this.acertadas = 0;
      this.vidas = 7;
    }
  }]);

  return Ahorcado;
}();
/*const moduloAhorcado = "./js/ahorcado.js";
import(moduloAhorcado).then((m)=> {
  m.Ahorcado();
})*/
//INDEX


window.onload = function () {
  var inicio = document.getElementById("inicio");
  var introducir = document.getElementById("introducir");
  var juego = document.getElementById("juego");
  var espaciospalabra = document.getElementById("espaciospalabra");
  var perdidoganado = document.getElementById("perdidoganado");
  var teclado = document.getElementById("teclado");
  var barravidas = document.getElementById("barravidas");
  var volverinicio = document.getElementById("volverinicio");
  document.getElementById("empezar").addEventListener("click", function () {
    return muestraocultainicio("empezar");
  });
  document.getElementById("anadir").addEventListener("click", function (e) {
    return muestraocultainicio("anadir");
  });
  document.getElementById("empezar2").addEventListener("click", muestraocultaintroducir);
  volverinicio.addEventListener("click", function (e) {
    return muestraocultainicio("volverinicio");
  });
}; //Se declara un nuevo objeto de tipo ahorcado


var ahorcado = new Ahorcado();

function muestraocultainicio(e) {
  //Se oculta inicio
  inicio.style.display = "none";

  if (e == "empezar") {
    juego.style.display = "inline"; //Resetea los datos del ahorcado para jugar una nueva partida

    ahorcado.resetearAhorcado();
    console.log(ahorcado.palabra);
    texto = "";
    crearTeclado();
    anadirCorazonesVida();
    0; //Se muestra la pantalla del juego

    juego.style.display = "inline";

    for (var i = 0; i < ahorcado.palabra.length; i++) {
      texto = texto + "_ ";
    }

    espaciospalabra.innerHTML = texto;
    perdidoganado.innerHTML = " ";
  } else if (e == "anadir") {
    introducir.style.display = "inline";
  } else {
    juego.style.display = "none"; //Se muestra la pantalla del inicio

    inicio.style.display = "inline";
  }
} //Con este metodo se añaden los corazones de vida


var impresoBarraVidas = false;

function anadirCorazonesVida() {
  for (var _index = 1; _index <= ahorcado.vidas; _index++) {
    if (!impresoBarraVidas) {
      img = document.createElement("img");
      img.id = "vida" + _index;
      img.className = "vida";
      img.src = "./imagenes/corazon.png";
      barravidas.appendChild(img);
    } else {
      document.getElementById("vida" + _index).style.display = "inline";
    }

    barravidas.style.display = "inline";
  }

  impresoBarraVidas = true;
}

function muestraocultaintroducir() {
  //Se lee la palabra del input
  var palabra = "";
  palabra = document.getElementById("palabraintroducida").value.toUpperCase();
  document.getElementById("palabraintroducida").value = "";

  if (palabra != "") {
    //Se oculta introducir
    introducir.style.display = "none"; //Se muestra la pantalla del inicio

    inicio.style.display = "inline";
    ahorcado.anadirPalabraAArrayPalabras(palabra.toUpperCase());
  }
} //Se declara las letras del abecedario


abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tecladoImpreso = false;

function crearTeclado() {
  if (!tecladoImpreso) {
    for (var _index2 = 0; _index2 < abc.length; _index2++) {
      if (_index2 % 7 == 0) {
        div = document.createElement("div");
        teclado.appendChild(div);
      }

      var bt = document.createElement("button");
      bt.addEventListener("click", compruebaLetra);
      bt.innerHTML = abc[_index2];
      bt.className = "btn btn-secondary btn-letras";
      bt.id = abc[_index2];
      div.appendChild(bt);
    }
  } else {
    teclado.style.display = "inline";

    for (var _index3 = 0; _index3 < abc.length; _index3++) {
      //Quita el atributo disable para que los botones se puedan usar en la siguiente partida
      document.getElementById(abc[_index3]).removeAttribute("disabled");
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
      texto = texto + this.id + " "; //Esto se hace asi para corregir un bug que hacia que no se mostrasen las letras en su lugar

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
    } //Se muestra la palabra al usuario


    espaciospalabra.innerHTML = texto;
  } //Se comprueba si la letra esta en la palabra o no


  if (acer == 0) {
    ahorcado.arrayletrasfalladas.push(this.id);
    document.getElementById("vida" + ahorcado.vidas).style.display = "none";
    ahorcado.vidas = ahorcado.vidas - 1;
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
} //Metodo para terminar partida


function findepartida(ganadaperdida) {
  perdidoganado.style.display = "inline";

  if (ganadaperdida == 1) {
    perdidoganado.innerHTML = "Has ganado";
  } else {
    perdidoganado.innerHTML = "Has perdido";
  } //Ocultar el teclado para que no se pueda utilizar


  teclado.style.display = "none";
}