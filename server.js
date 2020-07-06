const http = require("http");
const app = require("./app");
const port = process.env.PORT || 8080;
const fs = require('fs');

const server = http.createServer(app);

server.listen(port);

const message = 'Chora boy...';
console.log(message + port);