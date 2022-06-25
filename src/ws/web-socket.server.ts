import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';
import { runCommand } from '../runCommand/runCommand.js';

export const wsServer = () => {

  const serverPort = Number(process.env.PORT);

  const wss = new WebSocketServer({port: serverPort});

  console.log('Web socket server started on port:', wss.options.port)

  wss.on('connection', function connection(ws, reg) {

    console.log(`stream from remote address:  ${reg.socket.remoteAddress}`)

    ws.on('message', function message(data) {
//      console.log('received: %s', data);
      const command = { 
        name: String(data).split(' ')[0],
        paramX: String(data).split(' ')[1],
        paramY: String(data).split(' ')[2],
      };

      const run = new runCommand(command);
      const { x, y } = run.getMouseCoords();

      if (command.name === 'mouse_position') ws.send(`mouse_position ${x},${y}`);
    });

    ws.send('Confirmed ');

    ws.on('close', function close() {
      console.log('remote address disconnected');
    });
  });

  const ws = new WebSocket(`ws://localhost:${serverPort}`);
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

  duplex.pipe(process.stdout);
  process.stdin.pipe(duplex);
}
