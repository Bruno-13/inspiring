//lets stand up our first node.js server

var http = require("http");
var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) { // (req, res)
	response.end("Something inspiring blah blah blah " + request.url)
}

//set up our node http package

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on " + PORT);
});

function handleRequest2(request, response) { // (req, res)
	response.end("Something nice about my coding skills... it worked! " + request.url)
}

var server2 = http.createServer(handleRequest2);
server.listen(PORT2, function() {
	console.log("Server listening on " + PORT2);
})