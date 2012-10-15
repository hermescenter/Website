$(document).ready(function(){
  
  // Attivo il carosello //
  $("#carousel").carousel({ 
    autoSlide: true, 
    autoSlideInterval: 5000,
    loop: true,
    pagination: true
  });
  
  $('#carousel li, #carousel-container').removeClass('hide'); 
  
  //Determino la lunghezza dei caption per posizionarli correttamente
   $(".caption").each(function(i){
     $(this).css('margin-left', 930-$(this).width());
   });
   
   $('.carousel-pagination').css('margin-left', 970-$('.carousel-pagination').width());
   
});