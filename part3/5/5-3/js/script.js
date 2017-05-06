$(document).ready(function(){
	//선택자
	/*
	parent	내 바로 위의 태그
	parents	내 위의 모든 태그
	this		나 자신
	children	내 바로 아래의 태그
	find		내 아래쪽 태그 필수 선택
	siblings	내 형제
	*/
	
	//$(기준)
	
	//$('.inner2').parent().addClass('color1');
	
	//$('.box2').children('.inner2').addClass('color1');
	
	//$('.inner2').siblings().addClass('color1');
	
	
	$('.inner2').parent().parent().children().children('.inner1').siblings('.inner3').addClass('color1');
	
	
});


