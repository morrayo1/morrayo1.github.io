var doc = document;

var ulTag = doc.querySelector('.parent');
var liTag = ulTag.getElementsByClassName('box');

var func = function(){
	this.classList.add('add');
}




/*for(var i=0; i < liTag.length; i++){
	
	liTag[i].addEventListener('click',func);
	
}*/



/*liTag[0].addEventListener('click',function(){
	
	this.classList.add('add');
	
});

*/


//제이쿼리

$('.box:nth-child(3)').on('click',function(){
	
	$(this).addClass('add');
	
	
});


//나를 기준으로 부모,자식,형제 선택자를 찾는 방법이 존재한다.
//parent, child, silblings

var parent = doc.querySelector('.parent');
var child = parent.childNodes;

console.log(child);

var jparent = $('.parent');
var jchild = jparent.children();

console.log(jchild);

