"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

exports["default"] = Ahorcado;