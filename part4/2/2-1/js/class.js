//클래스
//3가지 클래스 사용방법(es6)
//1가지 사용 방법(es6)

//1.리터널 방식(보이는 그대로 구현한다.)
//함수->기능정의
//클래스 -> 함수의 모음 ->모듈
var doc = document;                     
var box = doc.getElementById('box');        
var nemo1 = doc.getElementById('nemo1');


var Animation = {
    
    nowX : 0,                   //멤버변수
    nowY : 0, 
    move : null,
    init : function(width,height){          //메소드
        var endX = Math.floor(Math.random()*width)+1;
        var endY = Math.floor(Math.random()*height)+1;
        
        nemo1.style.left = endX + 'px';
        nemo1.style.top = endY + 'px';
        
        Animation.nowX = endX;
        Animation.nowY = endY;
    },
    top : function(){
        move = setInterval(function(){
            Animation.nowY--;
            nemo1.style.top = Animation.nowY + 'px';
            if(Animation.nowY<=0){
                clearInterval(move);
                return;
            }
        },1)
    }
}



//실행부분
Animation.init(450,450);


var topBtn = doc.getElementById('top');

topBtn.addEventListener('click',Animation.top);
