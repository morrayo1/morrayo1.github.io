//kanban module
var kanban =(function($){
    //private
    var btn_main =function(event){
        
        if(event.keyCode == 13 || event.type =='click'){
    
            var title=$('.main_title').val();

            var tag ='<div class="menu">\
                            <div class="menu_main"><h2>' + title + '</h2></div>\
                            <div class="btn_sub">+ note</div>\
                            <input type="text" class="sub_title"/>\
                        </div>';

            $('#board').append(tag);
            $('.main_title').val('');
        }
    }
    //카드를 추가하는 기능
    //자바스크립트=동적으로 추가된 태그에는 이벤트가 안먹힘!
    var menu_sub = function(event){
         if(event.type =='click'){
             
             var title=$(this).siblings('.sub_title').val();
             
             var tag ='<div class="menu_sub">'+ title +'<span class="close_sub">X</span><span class="move_right">>></span><span class="move_left"><<</span></div>'
             
             
            $(this).parents('.menu').find('.menu_main').after(tag);
            $('.sub_title').val('');
         }
        
        if(event.keyCode == 13){
             
             var title=$(this).val();
             
             var tag ='<div class="menu_sub">'+ title +'<span class="close_sub">X</span><span class="move_right">>></span><span class="move_left"><<</span></div>'
             
             
//            $('.menu_main').after(tag);
            $(this).parents('.menu').find('.menu_main').after(tag);
            $('.sub_title').val('');
         }
    }

    //sub 지우기
    var delete_sub = function(){
        $(this).parents().parent('.menu_sub').remove();
    }
    
    //sub 이동
    
    var move_right = function(){
        var sub = $(this).parents('.menu_sub');
        var class_name = $(this).attr('class');
        if(classname == 'next')
        
        
        $(this).parents('.menu').next().find('.menu_sub').append( sub);
    }
    
    
    return{
        init : function(){
            //이벤트 정리
            $('.btn_main').on('click',btn_main);
            $('.main_title').on('keypress',btn_main);
            

            $(document).on('click','.btn_sub',menu_sub);
            $(document).on('keypress','.sub_title',menu_sub);
            
            
            
            $(document).on('click','.close_sub',delete_sub);
            
            $(document).on('click','.move_right',move_right);
        }
    };    
}(jQuery));







$(document).ready(function(){
	
    kanban.init();
    
});