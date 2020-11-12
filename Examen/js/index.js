window.onload = function () {
    let butonSubmit = document.getElementById("submit");
    let butonText = document.getElementById("text");
    let butonRadio = document.getElementById("radio");
    let checkbox = document.getElementById("checkbox");

    var buttonCambiarBot = document.getElementById("bot4");

    let pieDeFormulario = document.getElementById("pieDeFormulario");

    pieDeFormulario.ondrop = drop;

    pieDeFormulario.ondragover = dragover;

    butonSubmit.ondragstart = dragstar;

    butonSubmit.addEventListener("click", clickButtonSubmit);
    buttonCambiarBot.addEventListener("click", cambiarBoton);
    butonText.addEventListener("click", () => mostrarElementoText(this.id));
    

    //ME FALTA TIEMPOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

    function mostrarElementoText(id){
        let div = document.getElementById("divText");
            div.style.display = "inline";
        but = document.getElementById("bot1");
        but.addEventListener("click",()=>crearElemento(id));
    }
    var contClicksBoton = 1;

    function crearElemento() {
        let form = document.createElement("form");
        form.id = "contendorPregunta";
        form.className = "container-md container-sm";
        let h3 = document.createElement("h3");
        h3.id = "h3Pregunta";
        h3.className = "h3 text-center mb-3 font-weight-normal";
        let enunciado = document.createTextNode(encuesta.preguntas[contPregregunta].enunciado);
        h3.appendChild(enunciado);
        form.appendChild(h3);
        for (let index = 0; index < encuesta.preguntas[contPregregunta].respuestas.length; index++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            input.value = encuesta.preguntas[contPregregunta].respuestas[index][0];
            input.type = encuesta.preguntas[contPregregunta].tipo;
            label.className = "form-control";
            label.id = "labe" + index;
            input.id = index;
            label.appendChild(input);
            let text = document.createTextNode(encuesta.preguntas[contPregregunta].respuestas[index][0]);
            label.appendChild(text);
            input.style.visibility = "none";
            form.appendChild(label);
        }
        button = document.createElement("button");
        button.innerHTML = "Continuar";
        button.addEventListener("click", continuarEncuesta);
        button.type = "button";
        button.className = "btn btn-lg btn-primary btn-block";
        form.appendChild(button);
        divContenedor.appendChild(form);
        contPregregunta++;
    }

    function cambiarBoton(e) {
        let inp = document.getElementById("inpCambioBoton");
        console.log(e);
        butonSubmit.innerHTML = inp.value;
        console.log("ho")
        let div = document.getElementById("divCambioBoton");
        div.style.display = "none";
    }

    function clickButtonSubmit() {
        if (contClicksBoton == 2) {
            let div = document.getElementById("divCambioBoton");
            div.style.display = "inline";
            console.log("ho");
            contClicksBoton = 1;
        } else {
            contClicksBoton = contClicksBoton + 1;
            console.log(contClicksBoton);
        }
    }

}
const dragover = (ev) => ev.preventDefault();
const dragstar = (ev) => ev.dataTransfer.setData("id_arrastrado", ev.target.id);

const drop = (ev) => {
    ev.preventDefault();
    //optenemos el id del objeteto que esta siendo arrastrado
    let arrastrado = ev.dataTransfer.getData("id_arrastrado");
    ev.target.appendChild(document.getElementById(arrastrado));
}