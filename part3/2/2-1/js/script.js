$(document).ready(function(){
	
	
	/* 비교연산자
	
	== : 같다.
	!= : 같지 않다.
	
	=== : 정말 같다.(자료형 타입)
	!== : 정말 같지 않다.
	
	<, >, <=, >= : 크기 비교
	
	*/
	
	
	/*논리연산자
	
	&& : 그리고(and)
	|| : 또는 (or)
	
	! : 부정의 의미
	
	*/
	
	
	
	console.log(true);			//true
	console.log(false);			//false
	
	console.log(10 > 5);			//true
	console.log(!10 > 5);		//false
	
	console.log(10 > 10);		//false
	console.log(10 >= 10);		//true
	
	console.log('논리연산자');
	
	console.log(10 > 7 && 10 > 9);	//true 두 개 이상의 조건이 모두 true 여야 true를 출력
	console.log(10 < 7 || 10 > 9);	//true 두 개 이상의 조건중 하나라도 true 라면 true를 출력
	
	
	
	
	//조건문 if
	
	//if( 조건 ){ 조건이 true일 경우에만 실행을 함}
	
	//예외처리

	var money = 100;
	
	
	/*
	R석 : 1000
	S석 : 700
	일반석 : 500
	*/
	
	/*if(money >= 500 && money <700){
		alert('일반석을 구매 할 수 있습니다.');
	} else if(money >= 700 && money < 1000){
		alert('S석을 구매 할 수 있습니다.')
	} else if(money >= 1000){
		alert('R석을 구매 할 수 있습니다.')
	} else{
		alert('돈이 부족합니다.')
	}
	*/
	
	
	
	
	$('.coin').on('click',function(){
		
		money = money +100;
		console.log(money);
		return;
	});
	
	console.log(money);
	
	
	
	
	
	
	$('.box1').on('click',function(){
		
		if(300 <= money){
			money = money -300;
			alert('거스름돈이 ' + money + ' 원 남았습니다.')
		} else{
			alert('돈이 부족합니다.')
		}
		console.log(money);
		return;
	
	});
	$('.box2').on('click',function(){
		
		if(500 <= money){
			money = money -500;
			alert('거스름돈이 ' + money + ' 원 남았습니다.')
		} else{
			alert('돈이 부족합니다.')
		}
		console.log(money);
		return;
	
	});
	$('.box3').on('click',function(){
		
		if(700 <= money){
			money = money -700;
			alert('거스름돈이 ' + money + ' 원 남았습니다.')
		} else{
			alert('돈이 부족합니다.')
		}
		console.log(money);
		return;
	
	});
	$('.box4').on('click',function(){
		
		if(900 <= money){
			money = money -900;
			alert('거스름돈이 ' + money + ' 원 남았습니다.')
		} else{
			alert('돈이 부족합니다.')
		}
		console.log(money);
		return;
	
	});
	
	
	
	
});


