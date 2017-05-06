//대상선택 - 특정시점부여(이벤트) - 기능수행




function popup(){
    alert('2');                
}

document.getElementById('box3').onclick = function(){
    alert('3');                
};



document.getElementById('box4').addEventListener('click',function(){
    alert('4')
});//ie8에서 동작하지 않는다.



$('#box5').on('click',function(){
    alert('5')
})
