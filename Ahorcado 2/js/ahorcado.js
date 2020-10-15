export default class Ahorcado {
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
      this.palabra = this.arrayPalabras[_.random(0, this.arrayPalabras.length - 1)];
  
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