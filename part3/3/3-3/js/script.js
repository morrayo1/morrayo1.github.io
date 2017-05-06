$(document).ready(function(){
	
	
	//배열
	var money =  [];
	var doc = document;

	
	var total = 500;
	doc.getElementById('total').innerHTML = total;
	
	$('#btn').on('click',function(){
		
		
		var poc = doc.getElementById('pocket').value;
		
		money.push(poc);
		total = total + Number(money[money.length -1]);
		
/*		for (var i=0 ; i<money.length ; i++){
			
			total = total + Number(money[i]);
			
		}	*/
		doc.getElementById('total').innerHTML = total;
		
	})
	

	
	
	//다차원 배열
	
	var da = [[10,20],[50,60]];
	
	var total =da[0][0]+da[1][1]
	
	console.log(total);
	
	
	//객체(object)
	
	var obj ={a:10, b:20, c:'hi', d:true}
	console.log(obj.d);
	
	obj.e = 50;					//추가하기
	console.log(obj.e);
	
	var opp = {a:{a:10,b:20},b:{a:50,b:60}};
	
	var total1 =opp.a.a+opp.b.b
	
	console.log(total1);
	
	
	
	
	var quiz = [{a:20,b:30},{c:100,d:120}]
	
	var comp = quiz[0].b + quiz[1].c
		 
	console.log(comp);	 
	
	
	
	//JSON
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});