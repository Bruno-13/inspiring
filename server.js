//lets stand up our first node.js server

var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) { // (req, res)
	response.end("Something inspiring blah blah blah ")
}

//set up our node http package

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {
	console.log("Server listening on " + PORT1);
});

function handleRequest2(request, response) { // (req, res)
	response.end("Something nice about my coding skills... this worked! ");
}

var server2 = http.createServer(handleRequest2);
server2.listen(PORT2, function() {
	console.log("Server listening on " + PORT2);
})
