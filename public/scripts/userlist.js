$(document).ready(function(){

	var uri = $('#querystring')

	var body = $('body')

	// var setTO

	

	// function goTo(x){
	// 	window.scrollTo(0,x)
	// }
	

	if(body[0].children.item(2).id==='querystring'){

		$('ul.userlist').each(function(index,element){
			var firstn = element.dataset.firstname
			var lastn = element.dataset.lastname
			var scrollHeight

			if(uri[0].dataset.fname==firstn.toLowerCase()&&uri[0].dataset.lname==lastn.toLowerCase()){
				
				var seltab = element.children

				console.log(element)
				
				seltab[0].style.background = 'goldenrod'
				seltab[1].style.background = 'aliceblue'

				$(element).attr('data-match', true)

				// var scrollHeight = element.offsetTop
				scrollHeight = element.offsetTop
				scrollWidth = element.offsetWidth
				console.log(scrollHeight)

				$(element).attr('data-offt', scrollHeight)
				$(element).attr('data-offw', scrollWidth)

				
				// goTo(scrollHeight)
				
				// setTO = setTimeout(function(){
				// 	window.scrollTo(0,scrollHeight)
				// 	console.log(scrollHeight, window.scrollY)
				// },1000)
				
			}

			else if(uri[0].dataset.fname==firstn.toLowerCase()||uri[0].dataset.lname==lastn.toLowerCase()){
				
				var seltab = element.children
				// element.style.borderTop = '4px solid black'
				seltab[0].style.background = 'grey'
				seltab[1].style.background = 'aliceblue'
				$(element).attr('data-match', true)

				console.log(element.offsetTop, element.offsetWidth)
				var scrolltop = element.offsetTop
				scrollWidth = element.offsetWidth
				console.log(scrolltop)

				
				window.scrollTo(0,scrolltop)
				// $(window).animate({scrollTo:scrollto},'800');
			}

		})
	}

	$('.userlist').each(function(index,element){
		if(element.dataset.match){
			console.log(element)
			var offtop = element.dataset.offt
			var offwidth = element.dataset.offw
			console.log(offwidth,offtop)
			window.scrollTo(offwidth,offtop)
		}
	})


})