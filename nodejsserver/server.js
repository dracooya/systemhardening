const { createServer } = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

// Create a basic HTTP server
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Set up Express app
const app = express();

// Define route handler for GET request
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Use Express app with the server
server.on('request', app);

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});