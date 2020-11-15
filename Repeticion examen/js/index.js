window.onload = function () {
    //Declaraciones
    //Buttons
    let buttonSubmit = document.getElementById("submit");
    var buttonCambiarBot = document.getElementById("cambiarButton");
    let buttonAnyadirText = document.getElementById("anyadirText");
    let buttonText = document.getElementById("text");
    let buttonCheckbox = document.getElementById("checkbox");

    buttonText.addEventListener("click",mostrarDivText);
    buttonAnyadirText.addEventListener("click",anyadirText)
    buttonSubmit.ondragstart = dragstar;
    buttonSubmit.addEventListener("dblclick", clickButtonSubmit);
    buttonCambiarBot.addEventListener("click", cambiarBoton);

    //divs
    let pieDeFormulario = document.getElementById("pieDeFormulario");
    let divButton = document.getElementById("divButton");
    let divText = document.getElementById("divText");
    let divRadio = document.getElementById("divRadio");
    let divCheckbox = document.getElementById("divCheckbox");
    let divDerecha = document.getElementById("divDerecha");

    pieDeFormulario.ondrop = drop;
    pieDeFormulario.ondragover = dragover;

    //Select
    let inputsSeleccionables = document.getElementById("inputsSeleccionables");
    inputsSeleccionables.addEventListener("onchange", (e) => {
        alert("hollllllllaaaaaaaaaaaaaaaaaaa");
        /*switch (this.value) {
            case 1:
                divText.style.display="inline";
                anyadirText();
                break;

            default:
                break;
        }*/
    });


    //Funciones
    function mostrarDivText (e) {
        divText.style.display="inline";
    }
    function anyadirText(){
        let div = document.createElement("div");
        let input = document.getElementById("inputText");
        let text = document.createElement(input.innerHTML);
        input = document.createElement("input");
        div.appendChild(text);
        div.appendChild(input);
        divDerecha.appendChild(div);
    }

    function cambiarBoton(e) {
        let inp = document.getElementById("inputCambiarButton");
        buttonSubmit.innerHTML = inp.value;
        divButton.style.display = "none";
    }

    function clickButtonSubmit(e) {
        divButton.style.display = "inline";

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