const express = require('express')
const fs = require('fs')
const app = express()
const bodyParser = require('body-parser')
const pug = require('pug')
const port = process.env.port || 3001

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res)=>{
	res.render('index')
})

// app.post('/searchbar', function(req, res){

// 	fs.readFile('./public/json/' + 'users.json', 'utf8', function(err,data) {
// 		if(err) {throw err}

// 		var userNames = JSON.parse(data)

// 		var searchres = req.body.searchreq
// 		var searchresLo = searchres.toLowerCase()
// 		var searchsplit = searchres.toLowerCase().split(' '),
// 			searchsplitDash = searchres.toLowerCase().split('-')

// 		var allmatches = new Object()

// 		var because = 'Sorry no matching users were found'
// 		var foundmatches

// 		var fullName = /\w{1,}( |-)\w{1,}/i
// 		var searchName = /\w{1,}\s\w{1,}/i


// 		for(i=0;i<userNames.length;i++){

// 			var ufirstname = userNames[i].firstname.toLowerCase()
// 			var ulastname = userNames[i].lastname.toLowerCase()

// 			var fnameWithSpaces = ufirstname.split(' '),
// 				fnameWithDashes = ufirstname.split('-')
// 			var lnameWithSpaces = ulastname.split(' '),
// 				lnameWithDashes = ulastname.split('-')


// 			if(searchsplit[0]===ufirstname&&searchsplit[1]===ulastname){

// 				allmatches['firstname']=searchsplit[0]
// 				allmatches['lastname']=searchsplit[1]

// 				foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
// 			}

// 			else if(searchsplit.length===1||searchsplitDash.length===1){

// 				if(fnameWithSpaces.length>1||lnameWithSpaces.length>1){
					
// 					fnameWithSpaces.forEach(function(fname){
						
// 						if(searchsplit[0]===fname){
// 							allmatches['firstname']=ufirstname
// 							foundmatches = `firstname=${allmatches.firstname}`
// 						}
// 					})
					
// 					lnameWithSpaces.forEach(function(lname){
						
// 						if(searchsplit[0]===lname){
// 							allmatches['lastname']=ulastname
// 							foundmatches = `lastname=${allmatches.lastname}`
// 						}
// 					})
// 				}

// 				// if(fullName.test(ufirstname)){
// 				// 	console.log(ufirstname)
// 				// } 
// 				// if(fullName.test(ulastname)){
// 				// 	console.log(ulastname)
// 				// }

// 				if(fnameWithDashes.length>1||lnameWithDashes.length>1){
					
// 					fnameWithDashes.forEach(function(fname){
						
// 						if(searchsplit[0]===fname){
// 							allmatches['firstname']=ufirstname
// 							foundmatches = `firstname=${allmatches.firstname}`
// 						}
// 					})
					
// 					lnameWithDashes.forEach(function(lname){
						
// 						if(searchsplit[0]===lname){
// 							allmatches['lastname']=ulastname
// 							foundmatches = `lastname=${allmatches.lastname}`
// 						}
// 					})
// 				}

// 				if(searchsplit[0]===ufirstname){
								
// 					allmatches['firstname']=searchsplit[0]
// 					foundmatches = `firstname=${allmatches.firstname}`

// 				} else if(searchsplit[0]===ulastname){

// 					allmatches['lastname']=searchsplit[0]
					
// 					Object.getOwnPropertyNames(allmatches).length<2 ? foundmatches = `lastname=${searchsplit[0]}` : foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
// 				}
// 			}
// 		}

// 		Object.keys(allmatches).length !== 0 ? res.redirect(`/userlist/user?${foundmatches}`) : res.redirect(`/adduser?message=${because}`)

// 	})
// })
var fullName = /^[a-z]{1,20}(-|')?[a-z]{0,20}?\s?[a-z]{0,20}?(-|')?[a-z]{0,20}?$/gi;

app.post('/searchbar', function(req, res){
	

	fs.readFile('./public/json/' + 'users.json', 'utf8', function(err,data){
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
			var fullUserName = `${ufirstname} ${ulastname}`

			var fnameWithSpaces = ufirstname.split(' '),
				fnameWithDashes = ufirstname.split('-')
			var lnameWithSpaces = ulastname.split(' '),
				lnameWithDashes = ulastname.split('-')

			if(searchsplit[0]===ufirstname&&searchsplit[1]===ulastname){

				allmatches['firstname']=searchsplit[0]
				allmatches['lastname']=searchsplit[1]

				foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
			}

			else if(searchsplit.length===1||searchsplitDash.length===1){

				if(fnameWithSpaces.length>1||lnameWithSpaces.length>1){
					
					fnameWithSpaces.forEach(function(fname){
						
						if(searchsplit[0]===fname){
							allmatches['firstname']=ufirstname
							foundmatches = `firstname=${allmatches.firstname}`
						}
					})
					
					lnameWithSpaces.forEach(function(lname){
						
						if(searchsplit[0]===lname){
							allmatches['lastname']=ulastname
							foundmatches = `lastname=${allmatches.lastname}`
						}
					})
				}

				if(fnameWithDashes.length>1||lnameWithDashes.length>1){
					
					fnameWithDashes.forEach(function(fname){
						
						if(searchsplit[0]===fname){
							allmatches['firstname']=ufirstname
							foundmatches = `firstname=${allmatches.firstname}`
						}
					})
					
					lnameWithDashes.forEach(function(lname){
						
						if(searchsplit[0]===lname){
							allmatches['lastname']=ulastname
							foundmatches = `lastname=${allmatches.lastname}`
						}
					})
				}

				if(searchsplit[0]===ufirstname){
								
					allmatches['firstname']=searchsplit[0]
					foundmatches = `firstname=${allmatches.firstname}`

				} else if(searchsplit[0]===ulastname){

					allmatches['lastname']=searchsplit[0]
					
					Object.getOwnPropertyNames(allmatches).length<2 ? foundmatches = `lastname=${searchsplit[0]}` : foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
				}
			}
		}

	Object.keys(allmatches).length !== 0 ? res.redirect(`/userlist/user?${foundmatches}`) : res.redirect(`/adduser?message=${because}`)
	
	})
})


// adduser
app.post('/adduser', function(req, res) {
	var newUser = { firstname: req.body.firstname,
					lastname: req.body.lastname,
					email: req.body.email
					}



	var newuserquery = `firstname=${newUser.firstname.toLowerCase()}&lastname=${newUser.lastname.toLowerCase()}`
	console.log(newuserquery)

	fs.readFile('./public/json/' + 'users.json', 'utf8', function(err,data) {
		if(err) {
			throw err
		}
		var userNames = JSON.parse(data)
		userNames.push(newUser)
		var stringifyJson = JSON.stringify(userNames)

		console.log(stringifyJson)

		fs.writeFile('./public/json/' + 'users.json', stringifyJson, function(err) {
			if(err) {
				throw err
			}
			res.redirect(`/userlist/user?${newuserquery}`)
		})
	})
})

app.post('/suggestion', (req, res)=> { 
    
    fs.readFile('./public/json/' + 'users.json','utf8', function(err,data) {
		if(err) {
			throw err
		}
		var suggest = req.body.inputvalue
		var foundUsers = [] 
		var userNames = JSON.parse(data)

		for(var i = 0; i < userNames.length; i++) {
			if(suggest.toLowerCase() === userNames[i].firstname.slice(0, suggest.length).toLowerCase() || suggest.toLowerCase() === userNames[i].lastname.slice(0, suggest.length).toLowerCase()) {
				foundUsers.push(userNames[i])
			}
		}

		if (foundUsers[0] !== null) {
			res.send({foundUsers: foundUsers})
		}
	})
})

app.get('/userlist', (req, res)=>{
	
	fs.readFile('./public/json/' + 'users.json','utf8', function(err,data) {
	if(err) { throw err }

	var userNames = JSON.parse(data)

	res.render('userlist', {
		userNames: userNames
		})
	})
})

app.get('/userlist/:user', (req, res)=>{
	
	fs.readFile('./public/json/' + 'users.json','utf8', function(err,data) {
	if(err) { throw err }

	var userNames = JSON.parse(data)

	console.log('reqquery', req.query)

	res.render('userlist', {
		userNames: userNames,
		founduser: req.query
		})
	})
})

app.get('/searchbar', (req, res)=>{
	res.render('searchbar')
})

app.get('/adduser', (req, res)=>{
	res.render('adduser', {
		message: req.query.message
	})
})

app.get('/navbar', (req, res)=>{
	res.render('index')
})

app.listen(port, ()=> {
	console.log(`In tune with ${port}`)
})