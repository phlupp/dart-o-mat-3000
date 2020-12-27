//const socket = io('http://' + document.domain + ':' + location.port);

//var socket = io.connect('http://' + document.domain + ':' + location.port);

//socket.on("connect", function() {
//     console.log('Websocket connected!');
//});

socket.on("connect", () => {
     console.log('Websocket connected!');
     console.log(socket.id);
});

//socket.on("redirectIndex", function(url) {
//	window.location.href = url;
//});

socket.on("redirectIndex", (url) => {
	window.location.href = url;
});
