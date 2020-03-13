var proceso;
$(document).ready(function(){
  var actualIndice = 0;
  var objetos = $('.slider div');
    var numObjetos = objetos.length;
  function cambiarImagen(){
    var imagen = objetos.eq(actualIndice);
    objetos.hide();
    imagen.css('display','inline-block');
  }
    proceso = setInterval(function(){
    actualIndice += 1;
    if(actualIndice > (numObjetos -1)){
      actualIndice = 0;
    }
    cambiarImagen();
  }, 3000);
  $('.siguiente').click(function(){
    limpiarIntervalo();
    actualIndice += 1;
    if (actualIndice > (numObjetos -1)){
      actualIndice = 0;
    }
    cambiarImagen();
  });
  $('.anterior').click(function(){
    limpiarIntervalo();
    actualIndice -= 1;
    if (actualIndice < 0 ){
      actualIndice = numObjetos-1;
    }
    cambiarImagen();
  });
});
function limpiarIntervalo(){
  window.clearInterval(proceso);
}