//자바스크립트는 기본적으로 키와 벨류의 개념으로 사용한다.
//객체
//this ->스코프영역에서 자기자신(자바스크립트에서는 window(전역) 화면 자체)

console.log(this);          // = window
console.log(new Date());

var number = 10;

//console.log(number);
//console.log(this.number);
//console.log(window.number);


function func(){
    
    this.number = 20;
    console.log(this);
    console.log(number);
    console.log(this.number);
    console.log(window.number);
}

var obj = new func();

obj;

//this는 자기 자신이 들어가있는 객체 기준으로 자기 자신을 선택한다.


//클래스 선언 방식

console.log('-----------------------------------------------')


var num1 = 10;
function aa(op){                //단순함수, 객체 ㄴㄴ
    this.num1 = op;
}
aa(20);
console.log(num1);

var num2 = 10;
function bb(op){                //객체 ㅇㅇ
    this.num2 = op;
}
var cc = new bb(20);            //new연산자->함수가 객체로 변환되어 리턴됩니다.
console.log(num2);

console.log('-----------------------------------------------')

//함수방식
//함수명 가장 첫번째 알파벳이 대문자이면 클라스라고 부른다.
function FrontendDevelop(smart){                 //클래스
    this.apple = smart;                     //멤버변수
    this.phone = function(){                //메소드
        console.log('새로운 레드' + this.apple + '이 나왔습니다.');
    }               
}

var apple = new FrontendDevelop('아이폰');      //인스턴스

apple.phone();

console.log('-----------------------------------------------')
//프로토타입 방식-객체지향 프로그래밍(상속!)
//JAVA

function Color(){
    this.banana = '노랑';
    this.grape = '보라';
}

Color.prototype.fruit = function(){
    console.log('과일의 색상은 ' + this.banana + '입니다.')
}

var color = new Color();

color.fruit();

//객체지향 프로그래밍

//    1.추상화
//    2.캡슐화
//    3.상속
//    4.다형성
//    5.합성

//절차지향 vs 객체지향
//절차지향 : 순서대로 나열하는 방식
//객체지향 : 객체 기준으로 분류를 통해 기능의 단위를 만든다.$(document).ready(function(){

/*=================================================================================*/

//1.추상화
//멤버변수와 메소드를 나눈다.


//    TV
//
//    멤버변수
//    -해상도크기  변경
//    -모델명    불변
//    -제조사    불변
//    
//    메소드
//    전원();
//    채널();
//    볼륨();
//
//    고유기능 - 메소드
//    타임머신();
//    APP();

//위 추상화로 인한 결과물을 클래스로 구현한다.






































