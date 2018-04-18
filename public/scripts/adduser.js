$(document).ready(function(){

	// var fullName = /^[a-z]{1,20}(-?[a-z]{0,20}|'?[a-z]{0,20})(\s[a-z]{1,20}|\s[0-9]{1,20})?(-?[a-z]{0,20}|'?[a-z]{0,20})$/gi;
	// var emailVal = /^\w{1,20}(\.\w{1,20})?@\w{1,20}(-\w{1,20})?(\.[a-z]{2,9}){1,2}$/gi;

	var addUserInputs = $('#adduser')

	$(addUserInputs[0].children).each(function(index,element){

		$(element).on('keyup',function(evnt){

		var fullName = /^[a-z]{1,20}(-?[a-z]{0,20}|'?[a-z]{0,20})(\s[a-z]{1,20}|\s[0-9]{1,20})?(-?[a-z]{0,20}|'?[a-z]{0,20})$/gi;
		var emailVal = /^\w{1,20}(\.\w{1,20})?@\w{1,20}(-\w{1,20})?(\.[a-z]{2,9}){1,2}$/gi;

			var userInfo = evnt.target.value

			if(evnt.target.type=='text'){			

				if(fullName.test(userInfo)) {
					$(element).addClass('valid')
				} else if(!fullName.test(userInfo)){
					$(element).removeClass('valid')
				}
			}

			if(evnt.target.type=='email'){

				if(emailVal.test(userInfo)) {
					$(element).addClass('valid')
	
				} else if(!emailVal.test(userInfo)){
					$(element).removeClass('valid')
				}
			}
			
		})

		$('#adduser').on('submit', function(evnt){

			if(element.className=='validation'&&element.classList.length<2){
				evnt.preventDefault()
				$('label').css({display:'block'})
			}
		})

	})



})