var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http');
var querystring = require('querystring');

var rickouest = require('request');

app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/client', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

/**
 * Routes
 */
// Login screen
app.get('/', function(req, res){
  res.sendFile(path.resolve('client/index.html'));
});

/**
 * API 
 **/
app.post('/authenticate', function(req, res){

	// Formatting user params
	let username = `${req.body.customer_number}\\${req.body.username}`;
	let password = req.body.password;

	// Request needs querystring
	let postData = querystring.stringify({		
		client_id: '1_3g9z7wonyeck0wco00cgggoogcgk008gko0ow84ssoowsock0f',
		client_secret: '4zh7wm12w1wk8c8swccws0gosk8c0o8wcko0kcwoccg4k8o08f',
		username: username,
		password: password,
		grant_type: 'password'
	})

	// Add http.request options
	 let options = {
	 	host: 'api.property.local',
	 	path: '/app_dev.php/oauth/v2/token',
	 	method: 'POST',
	 	headers: {
			'Content-Type': 'application/x-www-form-urlencoded',	 		
	 		'Content-Length': Buffer.byteLength(postData)
	 	}
	 };

	 var request = http.request(options, function(httpResponse){
	 	var body = '';
	 	httpResponse.on('data', function(chunk){
	 		body += chunk;
	 	});
	 	httpResponse.on('end', function(){
	 		let parsedBody = JSON.parse(body);
	 		res.send(parsedBody);
	 	})
	 }).on('error', function(err){
	 	console.log(err);
	 });

	 // Write data
	 request.write(postData);

	 // End request 
	 request.end();

});

app.get('/claimFiles/v1', function(req, res){
	var options = {
		uri: 	'http://api.property.local/app_dev.php/claimFiles/v1',
		method: 'GET', 
		headers: {
			'Authorization': req.query.token
		}
	}

	rickouest(options, (error, response, body) => {
		if (!error && response.statusCode == 200) {
			let parsedBody = JSON.parse(body);
			res.send(parsedBody);
		}
		else {
			console.log(response)
		}
	})
});

// Homescreen : claimFile list
app.get('/claimFile/list', function(req, res){
	res.sendFile(path.resolve('client/claimHandler_home.html'));
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});