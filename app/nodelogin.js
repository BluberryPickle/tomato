var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var alert = require('alert');

var connection = mysql.createConnection({
	host     : "localhost",
	user     : "root",
	password : '',
	database : 'nodelogin'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });

var app = express();
app.use(express.static('app'))
app.use(session({
    secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname+"/index.html"));
});

//For the login page

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?;', [username, password], function(error, results, fields){
			if (results.length > 0){
				console.log('success')
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/index.html');
			}
			else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();	 
		});
	}
	else {
		response.send('Please enter Username and Password!');
		response.end();	
	}
});

//For the signup page

app.post('/signup', function(request, response) {
	var fname = request.body.name;
	var email = request.body.email;
	var username = request.body.username
	var password = request.body.password
	var rpassword = request.body.rpassword

	if (username) {
		connection.query('SELECT * FROM accounts WHERE username = ?;', [username], function(error, results, fields){
			if (results.length > 0){
				alert('Username is taken')
			}
			else {
				if (password==rpassword){
					if (password.length > 7){
						console.log(fname); //remove once done 
						connection.query("insert into accounts values (?,?,?,?)",[username,password,email,fname], function(error, results,fields){
						response.redirect('/login.html');
					})
					}
					else{
						alert('Password must be atleast 8 characters.')
					}
				}
				else {
					alert('Passwords do not match')
				}
			}
		});
	}
});


app.listen(3000);
