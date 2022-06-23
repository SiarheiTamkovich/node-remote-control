import { WebSocketServer } from 'ws';
import { runCommand } from './runCommand.js';

export const wsServer = () => {

  const wss = new WebSocketServer({port: 8080});

  console.log('Web socket server started on port:', wss.options.port)

  wss.on('connection', function connection(ws, reg) {

    console.log(`Connected remote address:  ${reg.socket.remoteAddress}`)

    ws.on('message', function message(data) {
//      console.log('received: %s', data);
      const command = { 
        name: String(data).split(' ')[0],
        px: String(data).split(' ')[1]
      };
      runCommand(command);
    });

    ws.send('Connected');
  });


}
