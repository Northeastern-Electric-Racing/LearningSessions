const net = require('net');

const sendMessage = (socket, message) => {
   setTimeout(() => {
       socket.write(`${message}\r\n`);
       sendMessage(socket, message);
   }, 10);
}

// TCP server
const tcpServer = net.createServer((socket) => {
    console.log('TCP Client connected');


    // Handle TCP client disconnection
    socket.on('end', () => {
        console.log('TCP Client disconnected');
    });

    // Send message to TCP client
    sendMessage(socket, 'Hello from TCP server');
});

tcpServer.listen(8080, () => {
    console.log('TCP Server is running on port 8080');
});
