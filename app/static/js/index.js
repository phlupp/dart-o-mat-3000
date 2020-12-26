/*
var socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on('connect', function() {
     console.log('Websocket connected!');
});

socket.on('redirectIndex', function(url) {
	window.location.href = url;
});
*/

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://" + document.domain + ":" + location.port,
    methods: ["GET", "POST"],
    credentials: true
  }
});

socket.on('connect', function() {
     console.log('Websocket connected!');
});

socket.on('redirectIndex', function(url) {
     window.location.href = url;
});
