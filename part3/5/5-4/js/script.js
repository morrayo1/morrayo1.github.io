var doc = document;
var btn = doc.querySelector('.button').getElementsByTagName('button');


for(var i=0; i<btn.length; i++){
	
	btn[i].addEventListener('click',function(){
		
		var data = this.innerHTML;
		
		
/*		if(){
			
		}else if(){
			
		}else if(){
			
		}else{
			
		}*/
		
		if(data >=0 && data <= 9){
			numFunc(data);
		}else if(data == 'C'){
			resetFunc();
		}else if(data == '='){
			resultFunc();
		}else{
			calFunc(data);
		}
	});
	
	
}

//기능구현
function numFunc(number){
	
	var num = doc.getElementById('inner');
	num.value += number;
}





function resultFunc(){}
function resetFunc(){}


function calFunc(cal){
	var cal = doc.getElementById('status');
	var result = doc.getElementById('result');
	var num = doc.getElementById('inner');
	
	cal.value == 'cal';
	
	result.value =  Number(result.value) + Number(num.value)
	num.value += '';
}
