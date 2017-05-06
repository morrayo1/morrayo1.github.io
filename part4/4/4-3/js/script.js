$(document).ready(function(){
  $('.show').slick({
   
  });

    $('.next').on('click',function(){
        $('.show').slick('slickNext')
    });
    $('.prev').on('click',function(){
        $('.show').slick('slickPrev')
    });
    $('.page li').on('click',function(){
        var aa = $(this).index();
        $('.show').slick('slickGoTo',aa)
    });
});