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
	res.render('index', {
		homepage: true
	})
})


app.post('/searchbar', function(req, res){

	var searchres = req.body.searchreq
	var searchresLo = searchres.toLowerCase()

	var allmatches = new Object()

	var because = 'Sorry no matching users were found'
	var foundmatches

	fs.readFile('./public/json/' + 'users.json', 'utf8', function(err,data){
		if(err) {throw err}

		var userNames = JSON.parse(data)

		for(i=0;i<userNames.length;i++){

			var ufirstname = userNames[i].firstname.toLowerCase()
			var ulastname = userNames[i].lastname.toLowerCase()
			var fullUserName = `${ufirstname} ${ulastname}`

			if(searchresLo==fullUserName){

				allmatches['fullname']=fullUserName
				foundmatches = `fullname=${allmatches.fullname}`

			} else if(searchresLo!==fullUserName){

				if(searchresLo==ufirstname){
					allmatches['firstname']=searchresLo
				}
				if(searchresLo==ulastname){
					allmatches['lastname']=searchresLo
				}
			}

		}

		if(Object.getOwnPropertyNames(allmatches).length==1&&!allmatches.hasOwnProperty('fullname')){
				
			allmatches.hasOwnProperty('firstname') ? foundmatches = `firstname=${allmatches.firstname}` : foundmatches = `lastname=${allmatches.lastname}`
				
		} else if(Object.getOwnPropertyNames(allmatches).length==2){

			foundmatches = `firstname=${allmatches.firstname}&lastname=${allmatches.lastname}`
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



	var newuserquery = `fullname=${newUser.firstname.toLowerCase()} ${newUser.lastname.toLowerCase()}`
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
			res.send({foundusers: foundUsers})
		}
	})
})

app.get('/userlist', (req, res)=>{
	
	fs.readFile('./public/json/' + 'users.json','utf8', function(err,data) {
	if(err) { throw err }

	var userNames = JSON.parse(data)

	res.render('userlist', {
		userNames: userNames,
		userlist: true
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
		founduser: req.query,
		userlist: true
		})
	})
})

app.get('/searchbar', (req, res)=>{
	res.render('searchbar',{
		searchbar: true
	})
})

app.get('/adduser', (req, res)=>{
	res.render('adduser', {
		message: req.query.message,
		adduser: true
	})
})

app.get('/navbar', (req, res)=>{
	res.render('index')
})

app.listen(port, ()=> {
	console.log(`In tune with ${port}`)
})