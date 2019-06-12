var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(5000, function() {
  console.log("The server is running on port 5000");
});

// getting the html (static file - middleware) from public folder
app.use(express.static("public"));

// socket setup
var io = socket(server);

io.on("connection", function(socket) {
    // setting the events
  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });
});
