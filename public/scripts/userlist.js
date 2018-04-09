$(document).ready(function(){

	var uri = $('h2')

	console.log(uri[0].dataset.fname)
	console.log(uri[0].dataset.lname)
	// var scrollto

	

	// $('ul.userlist').each(function(index,element){
	// 	var firstn = element.dataset.firstname
	// 	var lastn = element.dataset.lastname

	// 	if(uri[0].dataset.query1==firstn.toLowerCase()){
			
	// 		var seltab = element.children
	// 		element.style.borderTop = '4px solid black'
	// 		seltab[0].style.background = 'goldenrod'
	// 		seltab[1].style.background = 'aliceblue'
	// 		$(element).attr('data-yes', true)

	// 		console.log(element.offsetTop, element.offsetWidth)
	// 		scrollto = element.offsetTop
	// 		console.log(scrollto)

			
	// 		window.scrollTo(0,scrollto)
	// 	}
	// 	else if(uri[0].dataset.query2==lastn.toLowerCase()){
			
	// 		var seltab = element.children
	// 		element.style.borderTop = '4px solid black'
	// 		seltab[0].style.background = 'goldenrod'
	// 		seltab[1].style.background = 'aliceblue'
	// 		$(element).attr('data-yes', true)

	// 		console.log(element.offsetTop, element.offsetWidth)
	// 		scrollto = element.offsetTop
	// 		console.log(scrollto)

			
	// 		window.scrollTo(0,scrollto)
	// 	}
	// })

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




})