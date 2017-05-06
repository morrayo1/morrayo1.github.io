$(document).ready(function(){
    
	$(window).on('scroll',function(){
        
        var nowScroll = $(this).scrollTop();
        console.log(nowScroll);
        
        var bg1Position = nowScroll * 0.3;
        var bg2Position = nowScroll * 0.2;
        var bg3Position = nowScroll * 0.1;
        
        var spin = nowScroll * 0.3;
        
        var op = nowScroll/200;
        
        $('.bg1').css('background-position','0px ' + bg1Position + 'px');
        $('.bg2').css('background-position','0px ' + bg2Position + 'px');
        $('.bg3').css('background-position','0px ' + bg3Position + 'px');
        
        $('.box').css({
            'transform' : 'rotate(-' + spin +'deg)',
            'opacity' : op,      //0~1
            'top' : -bg1Position + '%'
        })
    });
	
    $('.box').css({
            'opacity' : 0      //0~1
        })
});