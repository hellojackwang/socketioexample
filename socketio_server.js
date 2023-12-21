const http = require('http');
const io = require('socket.io');

const server = http.createServer();
const socketServer = io(server);

socketServer.on('connection', (socket) => {
  console.log('A new client connected');

  socket.on('chat_message', (message) => {
    console.log('Received message:', message);
    socket.broadcast.emit('chat_message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
