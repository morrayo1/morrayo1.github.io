$(document).ready(function(){
	
	start_move();
    
    //사용자가 필터의 종류를 변경할때
    $('.filter input').on('change',filter);
    
});

//카드를 정렬하는 역할
function start_move(){
    var content = document.querySelector('.content');           //카드를 가지고 있는 부모
    var card = document.querySelectorAll('.show');             //카드 선택
    
    var grid = 4;
    
    for(var i=0;i<card.length;i++){
        card[i].style.left = ((i%grid)*210)+'px';
        card[i].style.top = (parseInt(i/grid)*110)+'px';
    }
};

/*function filter(){
    
    var option = document.querySelectorAll('.option')
    
    
    
    
    for(var i=0;i<=option.length;i++){
        var optionChecked = option[i].checked;
        var optionValue = option[i].value;
        
        if(optionChecked){
            
        }else{
            var card = document.querySelectorAll('.'+optionValue);
            $(card).remove();
        }
    }
    
    
}*/

function filter(){
    var content = document.querySelectorAll('.card')
    for(var k=0;k<content.length;k++){
        content[k].style.display='block';
        content[k].classList.add('show');
        content[k].classList.remove('hide');
    }
    
    //기능
    var option = document.querySelectorAll('.option')
    
    for(var i=0;i<=option.length;i++){
        
        if(i==option.length){
            start_move();
        }
        
        var optionChecked = option[i].checked;
        var optionValue = option[i].value;
        var card = document.querySelectorAll('.'+optionValue);
        
        console.log(optionChecked)
        console.log(optionValue)
                
        
        if(optionChecked){
            
        }else{
            for(var j=0;j<card.length;j++){
                card[j].style.display = 'none';
                card[j].classList.add('hide');
                card[j].classList.remove('show');
            }
        }
    }
}




























