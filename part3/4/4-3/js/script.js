$(document).ready(function(){
	
	var doc = document;
	
	
	

	
	
	
	
	
	
	
	
/*	
	doc.querySelector('.iphone').addEventListener('click',function(){
		
		var product = doc.querySelector('.product');
		var title = doc.querySelector('.title');
		
		product.style.backgroundPosition = '0px';
		title.innerHTML = 'iPhone';
		
	});
	
	
	doc.querySelector('.ipod').addEventListener('click',function(){
		
		var product = doc.querySelector('.product');
		var title = doc.querySelector('.title');
		
		product.style.backgroundPosition = '-250px';
		title.innerHTML = 'iPod';
		
	});
	
	
	doc.querySelector('.ipad').addEventListener('click',function(){
		
		var product = doc.querySelector('.product');
		var title = doc.querySelector('.title');
		
		product.style.backgroundPosition = '-500px';
		title.innerHTML = 'iPad';
		
	});
	
	doc.querySelector('.imac').addEventListener('click',function(){
		
		var product = doc.querySelector('.product');
		var title = doc.querySelector('.title');
		
		product.style.backgroundPosition = '-750px';
		title.innerHTML = 'iMac';
		
	});
	*/
	
	/*=====================================================================*/
	
	
	function productSelect(location,text){
		var product = doc.querySelector('.product');
		var title = doc.querySelector('.title');
		
		product.style.backgroundPosition = location + 'px';
		title.innerHTML = text;
	}	
	
	
	
/*	doc.querySelector('.iphone').addEventListener('click',function(){
		productSelect(0,'iPhone');
	});
	
	doc.querySelector('.ipod').addEventListener('click',function(){
		productSelect(-250,'iPod');
	});
	
	doc.querySelector('.ipad').addEventListener('click',function(){
		productSelect(-500,'iPad');
	});
	
	doc.querySelector('.imac').addEventListener('click',function(){
		productSelect(-750,'iMac');
	});*/
	
	
	
	
	
	/*=====================================================================*/
	
	
	
/*	doc.querySelector('.iphone').addEventListener('click',function(){
		var a = {
			img : 0, 
			text : 'iPhone'
		}
		productSelect(a.img,a.text);
	});
	
	
	doc.querySelector('.ipod').addEventListener('click',function(){
		var a = {
			img : -250, 
			text : 'iPod'
		}
		productSelect(a.img,a.text);
	});
	
	
	doc.querySelector('.ipad').addEventListener('click',function(){
		var a = {
			img : -500, 
			text : 'iPad'
		}
		productSelect(a.img,a.text);
	});
	
	
	doc.querySelector('.imac').addEventListener('click',function(){
		var a = {
			img : -750, 
			text : 'iMac'
		}
		productSelect(a.img,a.text);
	});*/
	
	
	/*=====================================================================*/
	
	
	var apple = [
		{img : 0, text : 'iPhone'},
		{img : -250, text : 'iPod'},
		{img : -500, text : 'iPad'},
		{img : -750, text : 'iMac'},
	]
	
	
/*	doc.querySelector('.iphone').addEventListener('click',function(){
		
		productSelect(apple[0].img,apple[0].text);
	});
	
	
	doc.querySelector('.ipod').addEventListener('click',function(){
		
		productSelect(apple[1].img,apple[1].text);
	});
	
	
	doc.querySelector('.ipad').addEventListener('click',function(){
		
		productSelect(apple[2].img,apple[2].text);
	});
	
	
	doc.querySelector('.imac').addEventListener('click',function(){
		
		productSelect(apple[3].img,apple[3].text);
	});*/
	
	
	
	/*=====================================================================*/
	
	
	
	$('li').on('click',function(){
		
		var index = $(this).index();				//클릭한 태그 순서 return
		productSelect(apple[index].img,apple[index].text);
		
	});
	
	
	
	/*=====================================================================*/
	
	
	$('li').on('click',function(){
		
		var index =this.getAttribute('date-count');
		productSelect(apple[index].img,apple[index].text);
		
	});
	
	
	
	
});












