const io = require('socket.io-client');

const socket = io('http://localhost:8080');

socket.emit('chat_message', 'Hello, Server!');

socket.on('chat_message', (message) => {
    console.log('Message from server: ' + message);
});