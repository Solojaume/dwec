



$(document).ready(function () {
    //Dentro de var abra un array donde la posicion uno sera el alto y la  1 el ancho
    //[[idImagen,[alto,ancho]],[idImagen,[alto,ancho]]].

     var atributosImagenes=[]
    $('.photo_slider').each(function () {
        $(this).addClass("photo-area");
        //Estraigo el SRC de la imagen para utilizar este como identificador de cada imagen 
        let imagensrc=$('img').attr('src');

        atributosImagenes.push([imagensrc[$(this).height(),$(this).width()]]);
        let $img=$(this).children("img");
        $img.css('margin-left','-150px');
        $img.css('margin-right','-150px');
        
        
        $(this).children(".info_area").before($('<div class="photo_slider_img">').append($img));
        $(this).children(".info_area").children("p").after($('<a class="close"> Close </a>'));
        $(this).children(".info_area").after('<a class="more_info" href="#">Más Info</a>');        
    });

    $('more_info').click(function (){
        
        $(this).animate({ 
            width: ,
            height: "375px"
              }, 600 );
    });
})