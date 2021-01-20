/*En el siguiente map se define los diferentes componentes que se pueden añadir al formulario.
Este mapa se utilizara mas adelante en diferentes metodos. 
Por defecto la clave de map sera el tag html que se añadira, en el valor se guarda un array
donde la primera posicion marcara si el menu de propiedades tiene que ser simple 
(button,label, textarea, etc) o por el contrario complejo (radio, checkbox, select,etc). 
El complejo es el que sive para todo aquel $input multiple. Si la segunda posicion no existe o es diferente de 
"" se utilizara el tag que haya definido y la clave se utilizara como el type del elemento
 más adelante se podra ver su uso en las diferentes funciones donde se implemente.

*/
const elementosStandardFormulario = new Map();
elementosStandardFormulario.set("p", ["simple", ""]);
elementosStandardFormulario.set("text", ["simple", "input"]);
elementosStandardFormulario.set("textarea", ["simple", ""]);
elementosStandardFormulario.set("radio", ["complejo", "input"]);
elementosStandardFormulario.set("checkbox", ["complejo", "input"]);
elementosStandardFormulario.set("select", ["complejo", ""]);
elementosStandardFormulario.set("button", ["simple", ""]);
var cantidadInputsComplejos = 1;
var cantidadComponentes= 0;

//Este metodo muestra un menu de propiedades 
//La variable crear, es un bolean se utiliza para controlar si se tiene que crear o modificar un elemento
function mostrarMenuPropiedadesElementos(tipoElemento, crearModificar) {
    var inputStandard = elementosStandardFormulario.get(tipoElemento);

    $('#propiedadesElementos').css("display", "inline");
    $('#menuElemento').css("display", "none");

    if (inputStandard[0] == "complejo") {
        console.log("b");
        $('#gestionMenuComplejo').css("display", "inline");
    } else {
        $('#gestionMenuComplejo').css("display", "none");
    }

    if (crearModificar == "crear") {
        //se elimina el evento click para que no se produzca un bug posterior
        $("#buttonAnyadirModificar").off("click").click(function (event, p = [tipoElemento, inputStandard]) {
            addElement(p);
        });
    } else {

    }

}

//Recibe un array
function addElement(argumentos) {
    let tipo = [argumentos[0], null];
    //Se lee el input del menu propiedades, el texto introducido se usara como id del componente y como texto para su label
    let $inputMenuPropiedades = $("#inputMenuPropiedades");
    //Aqui se declara un input simple y que ademas el tipo de este se defina en el id, si no se define en el id posteriormente se
    //sobrescribira con un nuevo input
    let $input = $('<' + tipo[0] + ' class="inputElemento form-control" >');
    //En la siguiente variable se guarda el div donde ira el o los inputs
    let $componente = $('<div class="contenedor" id="' + cantidadComponentes+ '">').addClass("elementosFormulario");
    //En el siguiente let se crea el label del componente
    let $p = $('<p class="labelsElemento">').html($inputMenuPropiedades.val());
    $componente.append($p);

    if (argumentos[1][1] != "") {
        tipo = [argumentos[1][1], argumentos[0]];
        $input = $('<' + tipo[0] + ' class="inputElemento form-control" type="' + tipo[1] + '" >');

        if (argumentos[1][0] == "complejo") {
            switch (argumentos[0]) {
                case "checkbox", "radio":
                    //En esta variable es el div que contendra el input y el label
                    let $div = $('<div class=" form-check">');
                    let $label = $('<label class="form-check-label" for="' + $("#input1").val() + '1" >').html($('#input1').val());
                    $input = $('<' + tipo[0] + ' id="' + $("#input1").val() + '1"  name="' + $inputMenuPropiedades.val() + 'Input" class="inputElemento form-check-input" type="' + tipo[1] + '" >');
                    $div.append($input);
                    $div.append($label);
                    $componente.append($div);
                    let cont = 1;
                    $(".divInputs").find("input").each(function () {
                        $div = $('<div class=" form-check">');
                        $label = $('<label class="form-check-label" for="' + $("#input" + cont).val() + '">').html($("#input" + cont).val());
                        $input = $('<' + tipo[0] + ' id="' + $("#input" + cont).val() + cont + '" value="' + $("#input" + cont).val() + '"  name="' + $inputMenuPropiedades.val() + 'Input" class="inputElemento form-check-input" type="' + tipo[1] + '" >');
                        $div.append($input);
                        $div.append($label);
                        $componente.append($div);
                        cont = cont + 1;
                    });
                    break;
                case "select":
                    break;

                default:
                    break;
            }
        } else {
            $componente.append($input)
        }
        //$input.type = tipo[1];
        cantidadComponentes= cantidadComponentes+1;
    }
    console.log(argumentos)

    //$componente=$('<div>').addClass("elementosFormulario");
    //let $p=$('<p class="labelsElemento">').html($inputMenuPropiedades.val());
    //$componente.append($p);
    //$componente.append($input);

    //$componente.html($inputMenuPropiedades.val());
    $inputMenuPropiedades.val("");

    $('#formContainerComponentes').append($componente);
    ocultarMenuPropiedas();

}

function editItem(){

}

function ocultarMenuPropiedas() {
    $('#propiedadesElementos').css("display", "none");
    $('#menuElemento').css("display", "inline");
    //Se hace displey block a los li que estan dentro del div menuElemento para que se vean uno debajo del otro
    $('.selectComponent').css('display', 'block');
    $("#cantidad").val("");
}

function mostrarInputsMenuComplejo(cantidad) {
    console.log(cantidad);
    if (cantidad > 1) {
        for (let index = 1; index < cantidad; index++) {
            let inp = $('#divInputReferencia').clone();
            inp.find("input").attr("id", "input" + index);
            inp.appendTo(".divInputs");

        }

    }
    cantidadInputsComplejos = cantidad;
}

$(function () {
    $('#btnNuevoFormulario').on("click", function (event) {
        $('#nuevoFormulario').css("display", "none");
        $('#genForm').css("display", "inline");
        $titulo = $('<h1>').html($('#titulo').val()).addClass('elementosStandardFormulario');

        $('#formContainerComponentes').append($titulo);
    });

    let $elemento = $('div');
    $(".selectComponent").click(function (event) {
        //addElement($(this));
        mostrarMenuPropiedadesElementos($(this).attr('id'), "crear");
    });
    $("#cantidad").change(function (event) {
        if (cantidadInputsComplejos >= 1) {
            $('.divInputs').empty();
        }
        console.log($(this).value);
        mostrarInputsMenuComplejo($(this).val());
    })

    ocultarMenuPropiedas();

});