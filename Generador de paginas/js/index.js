var componentes = [];
function createElement(){
  let $form=$('<form/>')
  let input=$('<input type="text">');

}

function addElement($element){
    let id = $element.attr('id');
    let $componente=$('<'+id+'>').html("hola");
    $componente.addClass(id);

    $('#divContainerComponentes').append($componente);
}



$(function(){
    let $elemento=$('div');
    $(".selectComponent").click(function (event){

        addElement($(this));
    });
});