app.post('/searchbar', function(req, res){

	fs.readFile('./public/json/' + 'users.json', 'utf8', function(err,data) {
		if(err) {throw err}

		var userNames = JSON.parse(data)

		var searchres = req.body.searchreq
		var searchresLo = searchres.toLowerCase()
		var searchsplit = searchres.toLowerCase().split(' '),
			searchsplitDash = searchres.toLowerCase().split('-')

		var allmatches = new Object()

		var because = 'Sorry no matching users were found'
		var foundmatches


		for(i=0;i<userNames.length;i++){

			var ufirstname = userNames[i].firstname.toLowerCase()
			var ulastname = userNames[i].lastname.toLowerCase()

			var fullName = /\w{1,}\s\w{1,}/gi

		// 	var fnameWithSpaces = ufirstname.split(' '),
		// 		fnameWithDashes = ufirstname.split('-')
		// 	var lnameWithSpaces = ulastname.split(' '),
		// 		lnameWithDashes = ulastname.split('-')


		// 	if(searchsplit[0]===ufirstname&&searchsplit[1]===ulastname){

		// 		allmatches['firstname']=searchsplit[0]
		// 		allmatches['lastname']=searchsplit[1]

		// 		foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
		// 	}

		// 	else if(searchsplit.length===1||searchsplitDash.length===1){

		// 		if(fnameWithSpaces.length>1||lnameWithSpaces.length>1){
					
		// 			fnameWithSpaces.forEach(function(fname){
						
		// 				if(searchsplit[0]===fname){
		// 					allmatches['firstname']=ufirstname
		// 					foundmatches = `firstname=${allmatches.firstname}`
		// 				}
		// 			})
					
		// 			lnameWithSpaces.forEach(function(lname){
						
		// 				if(searchsplit[0]===lname){
		// 					allmatches['lastname']=ulastname
		// 					foundmatches = `lastname=${allmatches.lastname}`
		// 				}
		// 			})
		// 		}

		// 		if(fnameWithDashes.length>1||lnameWithDashes.length>1){
					
		// 			fnameWithDashes.forEach(function(fname){
						
		// 				if(searchsplit[0]===fname){
		// 					allmatches['firstname']=ufirstname
		// 					foundmatches = `firstname=${allmatches.firstname}`
		// 				}
		// 			})
					
		// 			lnameWithDashes.forEach(function(lname){
						
		// 				if(searchsplit[0]===lname){
		// 					allmatches['lastname']=ulastname
		// 					foundmatches = `lastname=${allmatches.lastname}`
		// 				}
		// 			})
		// 		}

		// 		if(searchsplit[0]===ufirstname){
								
		// 			allmatches['firstname']=searchsplit[0]
		// 			foundmatches = `firstname=${allmatches.firstname}`

		// 		} else if(searchsplit[0]===ulastname){

		// 			allmatches['lastname']=searchsplit[0]
					
		// 			Object.getOwnPropertyNames(allmatches).length<2 ? foundmatches = `lastname=${searchsplit[0]}` : foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
		// 		}
		// 	}
		}

		Object.keys(allmatches).length !== 0 ? res.redirect(`/userlist/user?${foundmatches}`) : res.redirect(`/adduser?message=${because}`)

	})
})