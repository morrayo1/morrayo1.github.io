$(document).ready(function(){
    
    //어떤 상황에 기능을 구현?
    //유저가 스크롤 했을 때 그 시점이 언제냐을 따져서 그 시점에 맞는 기능을 구현한다.
    //행위>유저행동>이벤트>스크롤>scroll();
    
    var fixWhen = 
    
    $(window).on('scroll',function(){
       //현재 스크롤의 위치를 실시간으로 알아야한다. 
        var nowScroll = $(this).scrollTop();
        //console.log(nowScroll);
        
        
        if(nowScroll >= 200){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }
        
        
        if(nowScroll >= 260 && nowScroll < 1260){
            $('nav li').removeClass('position');
            $('nav li').eq(0).addClass('position');
        }
         if(nowScroll >= 1260 && nowScroll < 2260){
            $('nav li').removeClass('position');
            $('nav li').eq(1).addClass('position');
        }
        
        
        
        
        
        
        
        
    });
    
    
    $('nav a').on('click',function(a){
        
        
        a.preventDefault();
        //1.몇번째 태그를 클릭했는가?
        var tag = $(this).parent().index(); 
        
        
        //2.그 태그 순서와 같은 section 태그를 선택해줘야 한다.
        var section = $('section').eq(tag)
        
        //3.그 section 태그가 위로부터 얼마나 내려와 있는가?
        var sectionPosition = section.position().top;
        
        
       $('html,body').animate({scrollTop : sectionPosition}) 
        
        
        
        
        
        
        
        
        
        console.log(tag)
        console.log(sectionPosition)
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});