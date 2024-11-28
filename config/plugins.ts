

export default ({ env }) => ({
    // This is to register your WebSocket plugin if you're using a WebSocket library like socket.io
   /* 'websocket': {
      enabled: true,
      config: {
        port: env.int('SOCKET_PORT', 4000), // Example: you can configure the WebSocket port here
      },
    },*/
  
    // Add any other plugin configurations here, for example, if you're using authentication plugins, email plugins, etc.
    // Example:
    'users-permissions': {
      enabled: true,
      config: {
        jwtSecret: env('JWT_SECRET', 'your-secret-key'),
        jwtExpiry: env('JWT_EXPIRY', '1h'),
      },
    },
  });
  