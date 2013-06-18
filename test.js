var http = require('http');

server = http.createServer(function (request, response)
{
	response.writeHead(200, {'Content-type':'text/html'});
	response.end('hello world');
});

server.listen(8000);
console.log('hello world');