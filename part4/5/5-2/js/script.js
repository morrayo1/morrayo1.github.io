$(document).ready(function(){
  $('.animation').slick({speed : 500});
    
//    API : 기능
    $(".animation").on('afterChange',function(event,slick,currentSlide){
        //$('#item'+currentSlide).find('p').animate({opacity : 1,top : 0});
        
        $('.item p').css({opacity : '1',top :' 0'})
        
        $('#item'+currentSlide).find('p').each(function(index){
            $(this).delay(index*100).animate({opacity : 1,top : 0});
        });
        
        
    });
    $('#item0 p').each(function(index){
        $(this).delay(index*100).animate({opacity : 1,top : 0});
    });
});

