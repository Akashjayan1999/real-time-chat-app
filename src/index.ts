import {server as WebSocketServer, connection} from "websocket"
import http from "http"

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});


server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});


 const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});


function originIsAllowed(origin: string) {
  return true;
}