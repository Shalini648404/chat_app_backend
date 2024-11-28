const { Server } = require('socket.io');
const http = require('http');

module.exports = (strapi) => {
  // Create an HTTP server to use with WebSocket
  const server = http.createServer(strapi.server);

  // Initialize socket.io on the server
  const io = new Server(server, {
    cors: {
      origin: '*', // Allow all origins (change this as needed for security)
    },
  });

  // Set up a WebSocket connection
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for messages from the client and echo them back
    socket.on('message', (msg) => {
      console.log('Message received:', msg);
      // Emit the same message back to the client
      socket.emit('message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  // Bind the WebSocket server to the Strapi server
  strapi.server = server;
  server.listen(4000, () => {
    console.log('WebSocket server listening on port 4000');
  });
};
