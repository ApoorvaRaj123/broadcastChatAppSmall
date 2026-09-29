import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let allSockets: WebSocket[] = [];
let userCount = 0;

wss.on("connection", (socket) => {
  allSockets.push(socket);

  userCount += 1;

  for (let i = 0; i < allSockets.length; i++) {
    allSockets[i]?.on("message", (message: string) => {
      allSockets[i]?.send(`The user ${userCount} said: ${message.toString()}`);
    });
  }
});
