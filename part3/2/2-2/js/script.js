
/*회원가입 시스템 만들기*/


$(document).ready(function(){
	
	$('#register').on('click',function(){
		
		//1.아이디,비밀번호,비밀번호 확인이 채워져있는가??
		
		//var user_id = $('#user_id').val();					jquery방식
		
		
		//자바스크립트방식
		var doc = document;
		
		var user_id = doc.getElementById('user_id').value;
		var user_pass = doc.getElementById('user_pass').value;
		var user_confirm  = doc.getElementById('user_confirm').value;
		var user_phone = doc.getElementById('user_phone').value;
		var user_email = doc.getElementById('user_email').value;
		
				
		if(!user_id) {
			alert('ID를 입력해 주세요.');
			doc.getElementById('user_id').focus();
			return;
		}
		
		if(!user_pass || !user_confirm){
			alert('PASSWORD를 입력해 주세요.');
			return;
		}
		
		//2.비밀번호는 8자리 이상이어야 하고, 비밀번호와 비밀번호 확인이 일치하여야 한다.
		if(user_pass.length < 8){
			alert('비밀번호는 8자리 이상 입력해 주세요.');
			doc.getElementById('user_pass').value = '';
			doc.getElementById('user_confirm').value = '';
			
			doc.getElementById('user_pass').focus();
			return;
		}
		
		if(user_pass != user_confirm){
			alert('비밀번호가 일치하지 않습니다.');
			doc.getElementById('user_pass').value = '';
			doc.getElementById('user_confirm').value = '';
			
			doc.getElementById('user_pass').focus();
			return;
		}
		
		
		
		
		
		//3.번화번호(숫자만) & 이메일(이메일형식)
		
		
		var regNumber = /^[0-9]*$/;			//정규표현식
		if(!regNumber.test(user_phone)){
			alert('전화번호는 숫자만 입력해주세요.');
			return;
		}
		
		
		var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		if(!regExp.test(user_email) && user_email){
			alert('이메일 형식이 아닙니다.');
			return;
		}
		
		
		if(user_id && user_pass && user_confirm){
			alert('회원가입이 완료 되었습니다.');
		}
		
		
		
		
	});
	
});