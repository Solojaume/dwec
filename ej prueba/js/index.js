function info(cadena){
    var result = "La cadena \""+cadena+"\"";

    if(cadena==cadena.toLowerCase()){
        result += " está formada sólo por minúsculas";
    }
    else if(cadena==cadena.toUpperCase()){
        result += " está formada sólo por mayúsculas";
    }
    else {
        result += " está formada por mayúsculas y minúsculas";
    }

    return result;
}
alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
alert(info("En un lugar de la mancha..."));
alert(info(prompt("Introduce una frase y te dire si esta en mayusculas o en minusculas")));