var cantidadComponentes = 0;
//Aqui se guarda el tipo de componente que se esta editando y/o creando
//[crear/editar,tipo]
var componenteActual = ['',''];
function addComponent(tipo) {
    //Input menu propiedades
    let $inputMenuPropiedades = $("#inputMenuPropiedades");
    //se crea el contenedor del componente 
    let $componente = $('<div class="componente">').addClass(tipo);
    //En el siguiente let se crea el label del componente, en el caso de ser un simple label
    //solo se añade el label
    let $p = $('<p class="labelsElemento">').html($inputMenuPropiedades.val());
    let $but = $('<button class="btn btn-danger eliminar float-end" id="eliminar'+cantidadComponentes+'">').html("x");
    $but.on('click',function (event){
        event.preventDefault();
        $(this).parent().remove();
        return false;
    }); 

    $componente.append($but);
    $componente.append($p);
    let $div = $();
    let $label = $();
    let $input = $();
    var cont = 1;
    let numeroInputs = $('#cantidad').val();
    switch (tipo) {
        case "text":
            $input = $('<input type="' + tipo + '" name="' + $inputMenuPropiedades.val() +
                cantidadComponentes + '">').addClass('form-control');
            $componente.append($input);
            break;
        case "textarea":
            $input = $('<textarea name="' + $inputMenuPropiedades.val() + cantidadComponentes + '">');
            $input.addClass('form-control');
            $componente.append($input);
            break;
        case "checkbox":
            for (let index = 1; index <= numeroInputs; index++) {
                let $inputLeido = $('#input' + index).val();
                $div = $('<div class="form-check">');

                $label = $('<label>').addClass("form-check-label").attr('for', $inputLeido + index);
                $label.html($inputLeido);

                $input = $('<input class="form-check-input" id="' + tipo + index + '"  name="' + $inputMenuPropiedades.val() + '" type="checkbox" >');
                $div.append($input);
                $div.append($label);
                $componente.append($div);

            }
            break;
        case "radio":
            for (let index = 1; index <= numeroInputs; index++) {
                let $inputLeido = $('#input' + index).val();
                $div = $('<div class="form-check">');

                $label = $('<label>').addClass("form-check-label").attr('for', $inputLeido + index);
                $label.html($inputLeido);

                $input = $('<input class="form-check-input" id="' + tipo + index + '"  name="' + $inputMenuPropiedades.val() + '" type="radio" >');
                $div.append($input);
                $div.append($label);
                $componente.append($div);

            }
            break;
        case "dropdown":
            let $dropdown=$('<select ">').addClass('dropdown');
            for (let index = 0; index <= numeroInputs; index++) {
                let $inputLeido = $('#input' + index).val();

                let $option = $('<option id="'+tipo+index+'>').addClass('dropdown-item').attr('href','#');
                $option.html($inputLeido);
                $dropdown.append($option);           
            }
            $componente.append($dropdown);    
            break;
        case 'button':
            $but=$('<button>').addClass('btn btn-primary');
            
            break;
        default:
            console.log("default");
            break;
    }
    //Se añade el componente al formulario
    $componente.addClass("componente "+tipo);
    //Se Añade al componente el evento click
    $componente.on('click',function () {
        let clases= $(this).attr('class');
        componenteActual=[$(this), 'editr'];
        console.log(clases.substr(clases.search(' '), clases.lengh));
        mostrarMenuPropiedadesComponentes();

    });
    //Se añade el componente al formulario
    $('#formContainerComponentes').append($componente);
    $('#prueba').append($componente.clone());
    ocultarMenuPropiedades();
    cantidadComponentes++;
}

function editarComponente($componente) {
    
    
    //Se añade el componente al formulario
    $componente.addClass("componente "+tipo);
    $('#formContainerComponentes').append($componente);
    ocultarMenuPropiedades();
    cantidadComponentes = cantidadComponentes + 1;
}

function ocultarMenuPropiedades() {
    $('#propiedadesComponentes').css("display", "none");
    $('#menuComponentesComplejos').css("display", "none");
    $('#menuComponentes').css("display", "inline");
    //Se hace displey block a los li que estan dentro del div menuComponente para que se vean uno debajo del otro
    $('.selectComponent').css('display', 'block');
    $("#cantidad").val("");
    $('.divInputs').empty();
}

function mostrarMenuPropiedadesComponentes() {
    let tipo=componenteActual[0];
    let editarAnayadir=componenteActual[1];
 
    $('#propiedadesComponentes').css('display', 'inline');
    $('#menuComponentes').css("display", "none");
    
    if (tipo == "radio" || tipo == "checkbox" || tipo == "dropdown") {
        $('#menuComponentesComplejos').css("display", "inline");
    }

    if (editarAnayadir == "crear") {
        //se elimina el evento click para que  la prosima vez que se clique al boton añada o edite
        $("#buttonAnyadirModificar").off("click").click(function (event, tipoComponente = tipo) {
            addComponent(tipoComponente);
        });
    } else {
        $("#buttonAnyadirModificar").off("click").click(function (event, tipoComponente = tipo) {
            editarComponente(tipoComponente);
        });
        
    }

}

$(function () {
    $('#btnNuevoFormulario').on("click", function (event) {
        $('#nuevoFormulario').css("display", "none");
        $('#genForm').css("display", "inline");
        $titulo = $('<h1>').html($('#titulo').val()).addClass('elementosStandardFormulario');

        $('#formContainerComponentes').append($titulo);
    });

    $('.selectComponent').on('click', function () {
        componenteActual=[$(this).attr('id'),'crear'];
        mostrarMenuPropiedadesComponentes();
    });

    $("#cantidad").change(function (event) {
        $('.divInputs').empty();
        let cantidad=$(this).val();
        if( componenteActual[1]=='crear'){
            if (cantidad > 1) {
                for (let index = 2; index <= cantidad; index++) {
                    let $inp = $('#divInputReferencia').clone().removeAttr('id');
                    $inp.find("input").attr("id", "input" + index);
                    $(".divInputs").append($inp);
                }
            }
        }
        else{
            if (cantidad > 1) {
                for (let index = 2; index <= cantidad; index++) {
                    let clases= componenteActual[0].attr('class');
                    clases=clases.substr(clases.search(' ')+1, clases.lengh);
                    componenteActual[1].find('#'+clases);
                    let $inp = $('#divInputReferencia').clone().removeAttr('id').html();
                    $inp.find("input").attr("id", "input" + index);
                    $(".divInputs").append($inp);
                }
            }
        }
        
    });

    $("#buttonAnyadirModificar").click(function (event, tipoComponente = tipo) {
        addComponent(tipoComponente);
        ocultarMenuPropiedades();
    });

    $('#buttonCancelar').click(function () {
        ocultarMenuPropiedades();
    });

    $('.form-check').click(function (){
        componenteActual=[$(this), 'editar'];
        console.log("f")
        mostrarMenuPropiedadesComponentes();
    });

    $('.eliminar').on('click',function (event){
        event.preventDefault();
        
        $(this).remove();
        console.log("j");
        return false;
    });
    
})