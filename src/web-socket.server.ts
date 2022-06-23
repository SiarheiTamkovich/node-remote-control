import { WebSocketServer } from 'ws';

export const wsServer = () => {

  const wss = new WebSocketServer({port: 8080});

  wss.on('connection', function connection(ws, reg) {
    console.log(reg)

    ws.on('message', function message(data) {
      console.log('received: %s', data);

      const command = [data];
      console.log(command)
    });

    ws.send('something');
  });


}
