const net = require('net');

const socket = net.connect(9999, 'localhost');

socket.on('connect', onConnect);
socket.on('data'   , processResponse);

const httpRequestMessage = 
  "GET /index.html HTTP/1.1"           + "\r\n" + 
  "Connection: close"        + "\r\n" +
  ""                         + "\r\n";

function onConnect() {
  socket.write(httpRequestMessage, 'ascii');
}

function processResponse(httpResponseMessage) {
  console.log(httpResponseMessage.toString());
}

