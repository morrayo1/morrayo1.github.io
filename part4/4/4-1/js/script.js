//객체지향 프로그래밍

//    1.추상화
//    2.캡슐화
//    3.상속
//    4.다형성
//    5.합성

//절차지향 vs 객체지향
//절차지향 : 순서대로 나열하는 방식
//객체지향 : 객체 기준으로 분류를 통해 기능의 단위를 만든다.

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

/*function Drum(){
    //멤버변수 - 초기값
    this.company = '제조사';
    this.model = '모델명';
    this.size = '용량';
    
    //메소드-주요기능
    this.power_on = function(){
        console.log('전원켜기');
    };
    this.power_off = function(){
        console.log('전원끄기');
    };
    this.power_pause = function(){
        console.log('일시정지');
    };
    this.talsu = function(){
        console.log('탈수시작');
    };
    
    //메소드-추가기능
    this.dry = function(){
        console.log('건조시작');
    };
    this.ion = function(){
        console.log('살균시작');
    };    
}

var yang = new Drum();          //인스턴스

console.log(yang.company);
console.log(yang.size);
console.log(yang.model);

$(document).ready(function(){
    
    $('.on').on('click',function(){
        yang.power_on();
    });
    $('.off').on('click',function(){
        yang.power_off();
    });
});*/

//2.캡슐화
//private,public

function Drum(){
    //멤버변수 - 초기값
    var _company = '삼성';           //private
    this.model = '으어어어어';          
    this.size = '호옹이';              //public
    
    //확인기능
    this.getCompany = function(){return _company};
    
    
    
    
    //메소드-주요기능
    this.power_on = function(){
        console.log('전원켜기');
    };
    this.power_off = function(){
        console.log('전원끄기');
    };
    this.power_pause = function(){
        console.log('일시정지');
    };
    this.talsu = function(){
        console.log('탈수시작');
    };
    
    //메소드-추가기능
    this.dry = function(){
        console.log('건조시작');
    };
    this.ion = function(){
        console.log('살균시작');
    };    
}

var lee = new Drum();
console.log(lee.getCompany());



//3.상속
//css상속 - 부모의 스타일을 자식에게 전달하는 기능

function Exp(){
    this.dry = function(){console.log('건조기능');};
}


Exp.prototype = new Drum();

var park = new Exp();

console.log(park.model);



4.다형성 - 한가지 기능을 갖고 다른 동작을 하는 것
다형성이 없다.





























