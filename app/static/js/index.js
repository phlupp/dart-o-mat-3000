socket.on("connect", function() {
     console.log('Websocket connected!');
     console.log(socket.id);

socket.on("redirectIndex", function(url) {
	window.location.href = url;
});
