$(document).ready(function(){

	var uri = $('#querystring')
	var body = $('body')
	

	if(body[0].children.item(2).id==='querystring'){

		$('ul.userlist').each(function(index,element){

			var firstn = element.dataset.firstname
			var lastn = element.dataset.lastname
			var fullname = `${firstn} ${lastn}`

			if(uri[0].dataset.fname==uri[0].dataset.lname&&uri[0].dataset.fullname!==fullname.toLowerCase()){

				if(uri[0].dataset.fname==firstn.toLowerCase()||uri[0].dataset.lname==lastn.toLowerCase()){
				
				 element.setAttribute('data-mixmatch', true)
				 $(element).addClass('partialMatch')

				}

			} else if(uri[0].dataset.fullname==fullname.toLowerCase()){

				element.setAttribute('data-fullmatch', true)

			} else if(uri[0].dataset.fullname!==fullname.toLowerCase()){

				element.setAttribute('data-mixmatch', false)

				if(uri[0].dataset.fname==firstn.toLowerCase()){
					
					element.setAttribute('data-fnamematch', true)

				} else if(uri[0].dataset.lname==lastn.toLowerCase()){

					element.setAttribute('data-lnamematch', true)
				}

			}

		})
	}


})