$(document).ready(function(){
	
    //$('.gnb li').animate({top : 0},1000);
    $('.gnb li').each(function(index){
        $(this).delay(index*100).animate({top : 0,left : 0},3000,'easeOutElastic');
    });
	
//    $('.gnb li').on('mouseenter',function(){
//       $(this).children('h2').addClass('name');
//    });
//    $('.gnb li').on('mouseleave',function(){
//       $(this).children('h2').removeClass('name');
//    });
    
    $('.gnb li').on('mouseenter mouseleave',function(){
       $(this).children('h2').toggleClass('name',100);
    });
    
    
});