var net = require('net');
var port = 11011;
var clients = [];

var server = net.createServer(function(socket) {
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	
	clients.push(socket);
	
	socket.on('data', function(data) {
		console.log(data);
	});

	// Removes client from the list
	socket.on('end', function() {
		clients.splice(clients.indexOf(socket), 1);
	});
});

server.listen(11011, '0.0.0.0');

console.log("Leaky server running on port: "+port+"\n");

