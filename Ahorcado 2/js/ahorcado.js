 class Ahorcado{
    constructor(){
        this.arrayletrasfalladas = [];
        //Array con las letras de la palabra
        this.arrayletraspalabra = [];
        //Array con las letras que el usuario a ido introduciendo y son correctas
        this.arrayletrasacertadas = [];
        //String con la palabra deseada;
        this.palabra = "" ;
        //Array palabras
        this.arrayPalabras = ["Ola","Caracol","Confinamiento"] ;
        //Letras acertadas
        this.acertadas = 0;
        //Vidas
        this.vidas = 7;  

    }

    getArrayLetrasFalladas(){
        return this.arrayletrasfalladas;
    }

    anadirLetraFallada(letra){
        this.arrayletrasfalladas.push(letra);
    }

    getArrayLetrasAcertadas(){
        return this.arrayletrasfalladas;
    }
    anadirLetraAcertada(letra){
        this.arrayletrasacertadas.push(letra);
    }

    getPalabra(){
        return this.palabra;
    }

    setPalabra(){
        this.palabra=_.random(0, palabras.lenthg());
    }
    
    anadirPalabraAArrayPalabras(palabra){
        this.arrayPalabras.push(palabra);
    }
}
