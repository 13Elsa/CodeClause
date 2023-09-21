const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(3000);

// Listen for new connections
io.on('connection', (socket) => {
  // Broadcast the new connection to all other users
  io.emit('new user connected', socket.id);

  // Listen for incoming messages
  socket.on('message', (message) => {
    // Broadcast the message to all other users
    io.emit('message', message);
  });

  // Listen for disconnections
  socket.on('disconnect', () => {
    // Broadcast the disconnection to all other users
    io.emit('user disconnected', socket.id);
  });
});
