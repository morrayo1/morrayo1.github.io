//자바스크립트 선택자

var doc = document;		//객체

var sel1 = doc.getElementById('item');

//console.log(sel1);


//사용자의 행위를 catch(이벤트)

sel1.addEventListener('mouseover',function(){
	
	//sel1.classList.add('add');
	this.classList.add('add');
	
});



//다양한 선택자
//아이디,클래스,태그,속성


var sel2 = doc.getElementsByTagName('div');
//복수형태의 선택자는 그 종료를 배열형태로 넣는다.


console.log(sel2);


sel2[1].addEventListener('click',function(){
	
	this.classList.add('add');
});



//클래스

var sel3 = doc.getElementsByClassName('item');

console.log(sel3[2]);


//클래스선택자

var sel4 = doc.querySelectorAll('.item');

console.log(sel4[3]);