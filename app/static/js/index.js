socket.on("connect", () => {
     console.log('Websocket connected!');
     console.log(socket.id);

socket.on("redirectIndex", (url) => {
	window.location.href = url;
});
