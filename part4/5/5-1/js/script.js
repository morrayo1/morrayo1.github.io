$(document).ready(function(){
	
	
});


//es6 문법
//ECMA2015 javascript
//비동기 동기 ->콜백
//
//let const


function a(num){                //es5
    return num + num;
}

console.log(a(100));

var c = new a();


var b =(num)=>num+num;          //es6

console.log(b(200));

class Polygon{
    //생성자 초기 인스턴스화 될 때 처음 초기화 실행되는 부분 - 특수메소드
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    
    get area(){
        return this.sumMethod();
    }
    
    //메소드
    sumMethod(){
        return this.width * this.height;
    }
    
    
}

var polygon = new Polygon(200,300);

console.log(polygon.area);






class Name{
    say(){
        return '!_!'
    }
}

class Admin extends Name{
    say(){
        return '[Administrator]' + super.say();
    }
}

var admin = new Admin;

console.log(admin.say());



//디자인 패턴

//패턴 -> 정리(개발 환경의 규칙을 패턴화시킨다.)
//MVC
//javascript-싱글톤패턴, 안티패턴, 모듈패턴, 프라미스 패턴



//모듈패턴(이벤트 기준, 클래스)

var PosterAlign = (function($){
    
    //가로정렬기능
    var horizon = function(){
        console.log('가로정렬 실행')
    };
    var vertical = function(){
        console.log('세로정렬 실행')
    };
    var random = function(){
        console.log('랜덤정렬 실행')
    };
    var grid = function(){
        console.log('바둑판식정렬 실행')
    };
    
    
    return {
        init : function(){
            $('#horizon').on('click.horizon',horizon);
            $('#vertical').on('click.vertical',vertical);
            $('#random').on('click.random',random);
            $('#grid').on('click.grid',grid);
        },
        newFunc : function(){}
    }
    
    
    
})(jQuery);


$(document).ready(function(){
    
    PosterAlign.init();
    
});

//프라미스 패턴
//비동기 > 동기

let MainController = function(){
    
    let num = 10;
    
    let time = () => {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('타임아웃');
                resolve();
            },1000);
        });
    }
    
    let sum = () => {
        return new Promise(function(resolve, reject){
            console.log(num);
        });
        
    }
    
    return {
        sumResult : () => sum(),
        timeOut : () => time(),
        timeToSum : () => {
            time().then(()=>sum());
        }
    }
};




let main = new MainController();

//main.timeOut();
//main.sumResult();

main.timeToSum();









