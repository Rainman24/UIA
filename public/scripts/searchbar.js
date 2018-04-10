$(document).ready(function(){

	for(i=0;i<8;i++){
		$('#main').append(`<div class='grid'></div>`)
	}

	$('#autocomplete').keyup(function(anevent) {

		var inputDisplay = $('#autocomplete').val()

		$.post('/suggestion', {inputvalue: inputDisplay}, function(responseData) {
			
			var matchObj = responseData.foundUsers

			$('#suggestion').empty()		

			for(var i=0; i<matchObj.length; i++) {

				var usrs = (`${matchObj[i].firstname} ${matchObj[i].lastname}`)

				$('#suggestion').append(`<option data-firstname=${matchObj[i].firstname} data-lastname=${matchObj[i].lastname}>${usrs}</option>`)
			}
		})
	})

})