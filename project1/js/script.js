$(document).ready(function(){
        
    $('.float_right div a').on('mouseenter',function(){
       $(this).parent().addClass('open');
    });
    
    $('.float_right div a').on('mouseleave',function(){
       $(this).parent().removeClass('open');
    });
    
});