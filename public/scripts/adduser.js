$(document).ready(function(){

	var fullName = /^[a-z]{1,20}(-|')?[a-z]{0,20}?\s?[a-z]{0,20}?(-|')?[a-z]{0,20}?$/gi
	// var userInfo

	$('.validation').each(function(index,element){

		$(element).on('keyup',function(evnt){

			console.log(evnt.target)
			// console.log(evnt.target.value)

			var userInfo = evnt.target.value
			console.log(userInfo)
			

			if(fullName.test(userInfo)) {
				$(element).addClass('valid')
				console.log(userInfo.length)
			} else if(!fullName.test(userInfo)){
				$(element).removeClass('valid')
			}
			
		})

	})

})