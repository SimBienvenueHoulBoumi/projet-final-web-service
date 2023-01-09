const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');

require('dotenv').config()

const server = http.createServer(app);

server.listen(port);

console.log(`server listen on port ${port}`)