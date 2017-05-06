$(document).ready(function(){
	
	
});

//함수

/*
	
	1.함에 담는 경우의 수, 가지의 수
	2.자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때 마다 재활용 할 수 있다.
	3.코드를 개선하면 이를 사용하는 모든 코드들이 같이 개선된다.
	4.코드 수정시 필요한 기능을 쉽고 빠르게 찾을 수 있다.
	5.필요한 기능만 사용가능하기 때문에 메모리 낭비를 줄일 수 있다.



*/


//if(){}
//switch()
//for(){}
//function(){}


//자료형
//

console.log('안녕');

name();
function name(){
	console.log('ㅎㅇ');
}



name();			//함수를 사용하라는 명령여(호출,Call)
			


var aa = function(){
	console.log('일요일');
};

aa();

(function fc(){
	console.log('내일은 월요일이른이ㅏ른이라느리아ㅓ니ㅏㅇ리ㅓ')
})();



//함수의 반환
//파라미터 or 매개변수

function plus(c,d){
	var a = c;
	var b = d;
	return a+b;
}

console.log(plus(50,60));
console.log(plus(5,60));
console.log(plus(50,6));
console.log(plus(510,600));












