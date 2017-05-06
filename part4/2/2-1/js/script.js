//클래스 -> 모듈
//스코프 체인 : 부모와 자식의 관계를 연결시키는 구조



var a = 10;

function outFunc(){                 //부모
    var b = 10;
    function inFunc(){              //자식
        console.log(a+b);
    }
    inFunc();
}
outFunc();


console.log('-----------------------------------------------------');


//클로져
/*

    1.function -> 클로져 : 내부의 변수들이 private(!=public)
    2.클로져가 생성되면 내부 변수들은 별도로 유지되면서 상태값을 가지고 있는다.
*/


function open(x){
    var num = 10;
    function inner(y){
        num++;
        console.log(x+y+num);
    }
    inner(20);
}
open(5);
open(5);
open(5);
open(5);

console.log('-----------------------------------------------------');

function close(x){
    var num = 10;
    return function cFucn(y){
        num++
        console.log(x+y+num);
    }
}
var sum = close(5);

sum(20);
sum(20);
sum(20);
sum(20);

console.log('-----------------------------------------------------');


//클래스와 모듈
//애니메이션 박스->클래스로 변환 모듈화시킨다(여러 방식이 있음)

//기능구현(절차지향 방식)

var doc = document;                     
var box = doc.getElementById('box');           //가급적 전역변수나 전역함수는 사용하지 않는게 좋다
var nemo1 = doc.getElementById('nemo1');
var nemo2 = doc.getElementById('nemo2');
var nowX1 = 0;
var nowy1 = 0;

//상자의 시작 위치를 랜덤으로 만들기
function init(){
    
    //난수 발생
    var randX1 = Math.floor(Math.random()*450+1);
    var randY1 = Math.floor(Math.random()*450+1);
    var randX2 = Math.floor(Math.random()*450+1);
    var randY2 = Math.floor(Math.random()*450+1);
    
    nemo1.style.left = randX1 + 'px';
    nemo1.style.top = randY1 + 'px';
    
    nemo2.style.left = randX2 + 'px';
    nemo2.style.top = randY2 - 50 + 'px';
    
    nowX1 = randX1;
    nowY1 = randY1;
    nowX2 = randX2;
    nowY2 = randY2;
}

init();

//방향 버튼 만들기
var topBtn = doc.getElementById('top');
var bottomBtn = doc.getElementById('bottom');
var leftBtn = doc.getElementById('left');
var rightBtn = doc.getElementById('right');
var stopBtn = doc.getElementById('stop');
var moveX = null;
var moveY = null;

topBtn.addEventListener('click',moveTop);
bottomBtn.addEventListener('click',moveBottom);
leftBtn.addEventListener('click',moveLeft);
rightBtn.addEventListener('click',moveRight);
stopBtn.addEventListener('click',moveStop);





function moveTop(){
    clearInterval(moveY);
    moveY = setInterval(function(){
        nowY1--;
        nemo1.style.top = nowY1 + 'px';
        if(nowY1<=0){
            clearInterval(moveY);
            return;
        }
    },1)
}

function moveBottom(){
    clearInterval(moveY);
    moveY = setInterval(function(){
        nowY1++;
        nemo1.style.top = nowY1 + 'px';
        if(nowY1>=450){
            clearInterval(moveY);
            return;
        }
    },1)
}


function moveLeft(){
    clearInterval(moveX);
    moveX = setInterval(function(){
        nowX1--;
        nemo1.style.left = nowX1 + 'px';
        if(nowX1<=0){
            clearInterval(moveX);
            return;
        }
    },1)
}

function moveRight(){
    clearInterval(moveX);
    moveX = setInterval(function(){
        nowX1++;
        nemo1.style.left = nowX1 + 'px';
        if(nowX1>=450){
            clearInterval(moveX);
            return;
        }
    },1)
}
function moveStop(){
    clearInterval(move);
}



/////////////////



var ranBtn = doc.getElementById('random');

ranBtn.addEventListener('click',moveRan);

function moveRan(){
    
    clearInterval(move);
    
    var drX=Math.floor(Math.random()*2+1);
    var drY=Math.floor(Math.random()*2+1);

    console.log(drX);
    console.log(drY);
    
    
    if(drX == 1){
        moveLeft();
    }else{
        moveRight();
    }
    
    if(drY == 1){
        moveTop();
    }else{
        moveBottom();
    }
    
    
    
    
    
    
    
    
    
    
    
    
};






















































