$(document).ready(function(){
	
	//배열 객체 (데이터 == 자료) / JSON
	//함수
	
	
	//변수 -> 하나의 값을 담기위해 사용한다.
	//배열 -> 여러개의 값을 담기위해 사용한다. 순서가 존재함.
	//객체 -> 여러개의 값을 담기위해 사용한다. 순서가 존재하지 않음. Key값(고유 이름)
	
	
	//배열 index -> 0부터 시작한다. (0번째, 1번째...)
	var op = 10;
	var array = [10, ,'hi', 30, true, function(){}] 
	
/*	console.log(op);
	console.log(array[1])*/
	
	
	//배열 값 추가,삭제,수정
	//stack & queue
	var num = [10, 20, 30, 40, 50]
	
	console.log(num);		//pop : 뒤에서 빠짐
	num.pop()
	console.log(num);
	num.pop()
	console.log(num);
	num.pop()
	console.log(num);
	
	
	num.push(100)			
	console.log(num);
	num.push(1000)
	console.log(num);
	num.push(10000)
	console.log(num);
	
	num.shift()				//shift : 앞에서 빠짐
	console.log(num);
	num.shift()
	console.log(num);
	num.shift()
	console.log(num);
	
	num[5] = 99;			//빈 자리일땐 추가
	console.log(num);
	num[1] = 99;			//빈 자리아닐땐 수정
	console.log(num);
	
	
	var money =  [100, 500, 1000, 50, 50, 50, 50, 50, 50, 50, 50, 10000, 1000];
	
	//var total = money[0] + money[1] + money[2] + money[3] + money[4] + money[5];
	//document.write(total);
	
	var total = 0;
	
	
	
	
	for (var i=0; i<money.length; i++){
		total = total + money[i];
		document.write(total);
		document.write('<br />');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});