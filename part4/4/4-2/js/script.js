//절차지향방식

/*var doc = document;
var poster = doc.querySelector('.container').getElementsByTagName('img');
var posterlength = poster.length;


function horizon(){
    for(var i=0;i<=posterlength;i++){
        poster[i].style.left = (i*200)+'px';
        poster[i].style.top = 0+'px';
    }
}

function vertical(){
    for(var i=0;i<=posterlength;i++){
        poster[i].style.left = 0+'px';
        poster[i].style.top = (i*275)+'px';
    }
}

function random(){
    for(var i=0;i<=posterlength;i++){
        poster[i].style.zIndex = Math.floor(Math.random()*posterlength);
        poster[i].style.left =Math.floor(Math.random()*200+1)+'px';
        poster[i].style.top =Math.floor(Math.random()*400+1)+'px';
        
    }
}





function grid(){
    for(var i=0;i<=posterlength;i++){
        var grid_row = 5;
        
        poster[i].style.left = ((i%grid_row)*200)+'px';
        poster[i].style.top = (parseInt(i/grid_row)*275)+'px';
    }
}




$(document).ready(function(){
	
    $('#horizon').on('click',horizon);
    $('#vertical').on('click',vertical);
    $('#random').on('click',random);
    $('#grid').on('click',grid);
	
});*/



/*===============================================================================*/


//객체지향방식


//선택자를 선택하는 기능을 가지고 있는 클래스
function Selector(){
    this.selector = null;
}

//영화 포스터를 정렬하기 위한 클래스
function Poster(select){
    this.init(select);
}

//상속 : 다른 클래스의 기능을 같이 쓰기 위해서 연결시켜준다.
Poster.prototype = new Selector();


//Poster 클래스에 메소드를 하나 추가한다(정렬의 시작을 알리는 기능)
Poster.prototype.init = function(elem){
    this.selector = document.getElementsByTagName(elem)
}






//기능
//다형성 : 여러가지의 수를 가지고 있는 기능

Poster.prototype.show = function(align){
    align.align(this.selector);
}

var horizon = {
    align : function(img){
        for(var i=0;i<img.length;i++){
            img[i].style.left = (i*200)+'px';
            img[i].style.top = 0+'px';
        }
    }
}







var poster = new Poster('img');




$(document).ready(function(){
    $('#horizon').on('click',function(){
        poster.show(horizon);
    })
});



































