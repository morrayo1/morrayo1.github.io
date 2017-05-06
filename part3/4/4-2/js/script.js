$(document).ready(function(){
	
	
});

var point =[80, 95, 87, 32, 48, 100]


function total(arr){							//합 함수
	
	var total = 0;
	
	for(var i=0; i < arr.length; i++){
		total = total + arr[i];
	}
	
	return total;
}

console.log(total(point));


function avg(arr){							//평균 함수
	
	
	
	/*for(var i=0; i < arr.length; i++){
	
		//total = total + arr[i]
		total += arr[i]
	};*/
	
	
	/*for( i in arr){
		total += arr[i];
	}*/

	
	var avg =total(arr) / arr.length;
	
	return avg.toFixed(2);
	
}

console.log(avg(point));









function sum(){
	
	var tot = 0;
	
	
	for( i in arguments){
		tot += arguments[i];
	}
		
	return tot;
}

console.log(sum(20,30,40,60));










function es5(a,b){
	
	return a+b;
	
}

console.log(es5(10,20));

var es6 = (a,b) => a+b;

console.log(es6(40,30));





//quiz


//두 수와 두 수 사이에 있는 모든 정수를 더하여 리턴하도록 함수를 완성하세요.
//a와 b 가 같은 경우는 둘 중 아무수나 리턴하세요.


function quiz(a,b){
	
	var result = 0;
	
/*	if(b>a){
		
		for(i=a;i<=b;i++){
			result += i;
		}
	}
	
	if(b<a){
		
		for(i=b;i<=a;i++){
			result += i;
		}
	}*/
	
	var def= a-b;
	
	if(def>0){
		var min = b;
		var max = a;
	}else if(def<0){
		min = a;
		max = b;
	}else{
		result += a;
	}
	
	for(i=min;i<=max;i++){
			result += i;
		}
	
	return result;
}


var quiz1 = (a,b,sum=0) => {
	
	for(var i=Math.min(a,b); i < Math.max(a,b); i++){
		sum+=i;
	}
	
	return sum;
}

console.log(quiz(3,5));
console.log(quiz(-10,0));
console.log(quiz(7,7));

console.log(quiz1(3,5));
console.log(quiz1(-10,0));
console.log(quiz1(7,7));




