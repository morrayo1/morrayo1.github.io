$(document).ready(function(){
	
	//반복문
	

	
	// for 문
	// for(초기값;조건;증감){조건이 틀릴때 까지 실행}
	
	for(var i=1; i<10; i++){
		
		for(var j=2; j<10; j++){
			
			document.write(j);
			document.write('*');
			document.write(i);
			document.write('=');
			document.write(i*j);
			
			if(i*j.length == 2){
				document.write('___');
			} else if(i*j.length == 1){
				document.write('____');
			};
			
			
			
			
		};
		document.write('<br />');
	}
	
	
})