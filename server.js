var http = require('http');

const goodPORT = 7000;
const badPORT = 7500;

function goodHandler(request, response) {
	response.end("You're a good person.");
}

function badHandler(request, response) {
	response.end("You could be a better person.");
}

var goodServer = http.createServer(goodHandler);
var badServer = http.createServer(badHandler);

goodServer.listen(goodPORT, function() {
	console.log(`Good server is listening on port ${goodPORT}`);
});

badServer.listen(badPORT, function() {
	console.log(`Bad server is listening on port ${badPORT}`);
});