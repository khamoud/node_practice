var http = require('http');
var fs = require('fs');

server = http.createServer(function(request, response){
	response.writeHead(200);
	fs.readFile('ledger.sql', function(err, content)
	{
		response.write(content);
		response.end();
	});
	response.write("LOADING Database Details...");

})
server.listen(8080);
console.log("listening on port 8080")