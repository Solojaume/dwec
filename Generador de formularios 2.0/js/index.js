function addComponent(tipo) {
    switch (tipo) {
        case "p":

            break;

        default:
            break;
    }
}

function mostrarMenuComponentesComplejos(cantidad) {
    if (cantidad > 1) {
        for (let index = 1; index < cantidad; index++) {
            let inp = $('#divInputReferencia').clone();
            inp.find("input").attr("id", "input" + index);
            inp.appendTo(".divInputs");
        }
    }
}

function ocultarMenuPropiedades() {
    $('#propiedadesElementos').css("display", "none");
    $('#menuElemento').css("display", "inline");
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
            ocultarMenuPropiedades();
            addComponent(tipoComponente);
           
            
            console.log(" ");
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
        ocultarMenuPropiedades();
        addComponent(tipoComponente);
       
        console.log(" holaaaaaaaa");
    });

})