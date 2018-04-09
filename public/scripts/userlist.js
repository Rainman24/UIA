$(document).ready(function(){

	var uri = $('#querystring')

	var body = $('body')

	if(body[0].children.item(2).id==='querystring'){

		console.log(body[0].children.item(2).id)

		$('ul.userlist').each(function(index,element){
			var firstn = element.dataset.firstname
			var lastn = element.dataset.lastname

			if(uri[0].dataset.fname==firstn.toLowerCase()&&uri[0].dataset.lname==lastn.toLowerCase()){
				
				var seltab = element.children
				element.style.borderTop = '4px solid black'
				seltab[0].style.background = 'goldenrod'
				seltab[1].style.background = 'aliceblue'
				$(element).attr('data-yes', true)

				console.log(element.offsetParent.offsetHeight, element.offsetWidth)
				var scrollto = element.offsetParent.offsetHeight
				console.log(scrollto)

				
				window.scrollTo(0,scrollto)
				// $(window).animate({scrollTo:scrollto},'800');
			}
			else if(uri[0].dataset.fname==firstn.toLowerCase()||uri[0].dataset.lname==lastn.toLowerCase()){
				
				var seltab = element.children
				element.style.borderTop = '4px solid black'
				seltab[0].style.background = 'grey'
				seltab[1].style.background = 'aliceblue'
				$(element).attr('data-yes', true)

				console.log(element.offsetTop, element.offsetWidth)
				var scrolltop = element.offsetParent.offsetHeight
				scrollWidth = element.offsetWidth
				console.log(scrollto)

				
				window.scrollTo(0,scrolltop)
				// $(window).animate({scrollTo:scrollto},'800');
			}

		})
	}




})