var cantidadComponentes = 0;

function addComponent(tipo) {
    //Input menu propiedades
    let $inputMenuPropiedades = $("#inputMenuPropiedades");
    //se crea el contenedor del componente 
    let $componente = $('<div class="componente">').addClass(tipo);
    //En el siguiente let se crea el label del componente, en el caso de ser un simple label
    //solo se añade el label
    let $p = $('<p class="labelsElemento">').html($inputMenuPropiedades.val());
    $componente.append($p);
    let $div = $();
    let $label = $();
    let $input = $();
    var cont = 1;
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
            let numeroInputs = $('#cantidad').val();

            for (let index = 1; index <= numeroInputs; index++) {
                let $inputLeido = $('#input' + index).val();
                $div = $('<div class="form-check">');

                $label = $('<label>').addClass("form-check-label").attr('for', $inputLeido + index);
                $label.html($inputLeido);

                $input = $('<input class="form-check-input" id="' + $inputLeido + index + '"  name="' + $inputMenuPropiedades.val() + '" type="radio" >');
                $div.append($input);
                $div.append($label);
                $componente.append($div);

            }
            break;
        case "radio":
            let numeroInputs = $('#cantidad').val();

            for (let index = 1; index <= numeroInputs; index++) {
                let $inputLeido = $('#input' + index).val();
                $div = $('<div class="form-check">');

                $label = $('<label>').addClass("form-check-label").attr('for', $inputLeido + index);
                $label.html($inputLeido);

                $input = $('<input class="form-check-input" id="' + $inputLeido + index + '"  name="' + $inputMenuPropiedades.val() + '" type="radio" >');
                $div.append($input);
                $div.append($label);
                $componente.append($div);

            }
            break;
        default:
            console.log("default");
            break;
    }
    //Se añade el componente al formulario
    $componente.addClass("componente");
    $('#formContainerComponentes').append($componente);
    ocultarMenuPropiedades();
    cantidadComponentes = cantidadComponentes + 1;
}

function mostrarMenuComponentesComplejos(cantidad) {
    if (cantidad > 1) {
        for (let index = 2; index <= cantidad; index++) {
            let $inp = $('#divInputReferencia').clone().removeAttr('id');
            $inp.find("input").attr("id", "input" + index);
            $(".divInputs").append($inp);
        }
    }
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

function mostrarMenuPropiedadesComponentes(tipo, editarAnayadir) {
    $('#propiedadesComponentes').css('display', 'inline');
    $('#menuComponentes').css("display", "none");

    if (tipo == "radio" || tipo == "checkbox" || tipo == "select") {
        $('#menuComponentesComplejos').css("display", "inline");
    }

    if (editarAnayadir == "crear") {
        //se elimina el evento click para que  la prosima vez que se clique al boton añada o edite
        $("#buttonAnyadirModificar").off("click").click(function (event, tipoComponente = tipo) {
            addComponent(tipoComponente);
        });
    } else {

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
        mostrarMenuPropiedadesComponentes($(this).attr('id'), 'crear');
    });

    $("#cantidad").change(function (event) {
        $('.divInputs').empty();
        mostrarMenuComponentesComplejos($(this).val());
    });

    $("#buttonAnyadirModificar").click(function (event, tipoComponente = tipo) {
        addComponent(tipoComponente);
        ocultarMenuPropiedades();
    });

    $('#buttonCancelar').click(function () {
        ocultarMenuPropiedades();
    })

})