$(document).ready(function(){
        
    $('.float_right div a').on('mouseenter',function(){
       $(this).parent().addClass('open');
    });
    
    $('.float_right div a').on('mouseleave',function(){
       $(this).parent().removeClass('open');
    });
    
    
$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4,
    Type: Boolean,
    Default: true
})
    
});

