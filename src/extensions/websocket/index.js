const WebSocket = require('ws');

module.exports = ({ strapi }) => {
  const wss = new WebSocket.Server({ noServer: true });

  // Handle WebSocket connections
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('Received:', message);
      ws.send(message); // Echo the message back
    });
  });

  // Integrate WebSocket with Strapi's HTTP server
  strapi.server.httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });
};
