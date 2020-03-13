$(document).ready(function () {
    obtenerMascota();//AJAX
    contenidoExterno();
    efecto();
    color();
});


//Se reliza la peticion AJAX a una API que devuelve imagenes aleatorias de perros
function obtenerMascota() {
    $("#dog").click(function () {
        $.ajax({
            type: "GET",
            async: true,
            url: "https://dog.ceo/api/breeds/image/random",
            timeout: 1000,
            dataType: "json",
            success: function (data) {
                //console.log(data.message);
                $("#img-pet").html('<img class="perro" src="' + data.message + '" alt="">');
            }
        });
    });
}

function contenidoExterno() {
    $('.contenido').html(
        `<h3 class="title">Contenido externo</h3>
        <img class="img-c" src="img/crecen-los-gatos.jpg" alt="">
        <div class="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quia voluptatem 
            fugit voluptatum perspiciatis, quo ab quis repudiandae minus est animi nihil, earum illum. 
             Dolorem consequatur natus in cum consequuntur.
        </div>`
    );
}


function efecto(){
    var elemento = $('#elemento');
    $('#ocultar').click(function(){
        elemento.slideUp();
    });

    $('#mostrar').click(function(){
        elemento.slideDown();
    });
}

function color(){
    var color = ["#0B0B3B", "#0B615E", "#04B486", "#0040FF", "#DF0174", "#FF8000", "#DF0101", "#FF0040"];
    var el = $('.otro');
    $('#color').click(function(){
        var aleatorio = Math.floor(Math.random()*8)
        //console.log(aleatorio);
        el.css("background", color[aleatorio]);
    });
}


