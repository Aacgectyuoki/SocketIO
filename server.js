// remember to type "npm i [required service]" before requiring the service
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
var path = require('path');

// 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// connect to localhost
io.on('connection', (socket) => {
    // send a chat message
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
});

// localhost ID
server.listen(7000, () => {
  console.log('Server Works!!!');
});