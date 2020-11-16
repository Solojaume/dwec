window.onload = function () {
    //Declaraciones
    //Variables
    var arrayRadioButton = [];
    var contQuestionRadio = 0;
    //Buttons
    let buttonSubmit = document.getElementById("submit");
    var buttonCambiarBot = document.getElementById("cambiarButton");
    let buttonAnyadirText = document.getElementById("anyadirText");
    let buttonText = document.getElementById("text");
    let buttonCheckbox = document.getElementById("checkbox");
    let buttonRadio = document.getElementById("radiobutton");

    buttonText.addEventListener("click",mostrarDivText);
    buttonAnyadirText.addEventListener("click",anyadirText)
    buttonSubmit.ondragstart = dragstar;
    buttonSubmit.addEventListener("dblclick", clickButtonSubmit);
    buttonCambiarBot.addEventListener("click", cambiarBoton);
    buttonRadio.addEventListener("click",mostrarDivRadio);
    //divs
    let pieDeFormulario = document.getElementById("pieDeFormulario");
    let divButton = document.getElementById("divButton");
    let divText = document.getElementById("divText");
    let divRadio = document.getElementById("divRadio");
    let divCheckbox = document.getElementById("divCheckbox");
    let divDerecha = document.getElementById("divDerecha");
    let divInputsRadioButton = document.getElementById("divInputsRadioButton");

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

    function mostrarDivRadio(){
        divDerecha.style.display="inline";
        let input = document.getElementById("numRadioB");
        input.addEventListener("onchange",   crearInputsParaRadio);
        
    }

    function crearInputsParaRadio(){
        for (let index = 0; index < input.value; index++) {
            let div = document.createElement("div");
            let input = document.createElement("input");
            let text = document.createTextNode("Escribe texto");
            input.type="radio";
            input.name="radio"+contQuestionRadio;
            div.appendChild(input);
            div.appendChild(text);
            arrayRadioButton.push(input);
            divDerecha.appendChild(div);
            divText.style.display="none";
        }
        contQuestionRadio++;
    }

    function anyadirText(){
        let div = document.createElement("div");
        let input = document.getElementById("inputText");
        let text = document.createTextNode(input.value);
        input = document.createElement("input");
        div.appendChild(text);
        div.appendChild(input);
        divDerecha.appendChild(div);
        divText.style.display="none";
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