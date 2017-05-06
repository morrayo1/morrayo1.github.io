$(document).ready(function(){
	
	
	
	//또다른 조건문
	//switch case문
	
	
	/*
	
	switch(값){값에 따른 case별 동작}
	
	*/
	
	$('#select').on('click',function(){
		
		var color =$('#color').val();
		var doc = document;
		var change = doc.querySelector('.result');
		
		switch(color){
				
			case "red" : 															//자바스크립트
				change.style.background = color;
				break;
				
			case "green" : 														//jQuery
				$('.result').css('background',color);
				break;
				
			case "blue" :
				change.style.background = color;
				break;
				
			default : 									//case에 없는 값들이 입력된 모든 경우
				change.style.background = color;													
				break;
		}
	});
	
	
	
});
						
						
						