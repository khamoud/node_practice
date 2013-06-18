var mysql = require('mysql');
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-type':'text/html'});

	//get current url
	current_url = url.parse(request.url).pathname;
	current_url_query = url.parse(request.url).query;

	//load the html file to display the form
	if(current_url == '/')
	{
		fs.readFile('new_file.html', 'utf8', function(err, content)
		{
			response.end(content);
		});
	}
	else
	{
		response.end();
	}
	//console.log(current_url_query);

	//save new contact
	if(current_url != '/favicon.ico' && current_url != null)
	{
		//use querystring to creat new_user object
		new_user = querystring.parse(current_url_query);
		console.log(new_user);


		//create database connection
		var db = mysql.createConnection
		({
		user: 'root',
		password: '',
		database: 'ledger'
		});
		console
	

		add_contact = function(errors, results, fields)
		{
			console.log(results);
		}
		db.query('INSERT INTO clients SET first_name=?, last_name=?, email=?, created_at=NOW(), updated_at=NOW()', [new_user.first_name, new_user.last_name, new_user.email], add_contact);
	}

	

});
server.listen(8080);
console.log("Listening on port 8080");