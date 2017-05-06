$(document).ready(function(){
	
	
	//JSON
	//통신을 함에 있어서 보기 쉬운 형태로 만들어 서로 주고받자!!!
	
	var aclass = {
		count : 5, 
		student : [
			{name : '일지혜', age : 1},
			{name : '이지혜', age : 2},
			{name : '삼지혜', age : 3},
			{name : '사지혜', age : 4},
			{name : '오지혜', age : 5}
		]
	}
	
	var k = 1;
	
	for(var i=0; i<aclass.count; i++){
	

		var table_td1 = $('<td></td>');
		var table_td2 = $('<td></td>');
		var table_td3 = $('<td></td>');
		var table_tr = $('<tr></tr>');

		table_td1.text(k);
		if( i == 1){
			table_td2.addClass('good');
		}
		table_td2.text(aclass.student[i].name);
		table_td3.text(aclass.student[i].age);
		
		k++;
		
		table_tr.append(table_td1).append(table_td2).append(table_td3);
		$('#pyo tbody').append(table_tr);
		
		
		
	}
	
	
});