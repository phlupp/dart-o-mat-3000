const socket = io();

//var socket = io.connect('http://' + document.domain + ':' + location.port);

//socket.on('connect', function() {
//     console.log('Websocket connected!');
//});

socket.on("hello", (arg) => {
	console.log('Websocket connected!');
	console.log(arg); // world
});

socket.on("redirectIndex", function(url) {
	window.location.href = url;
});
