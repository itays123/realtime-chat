import { WebSocket } from 'https://deno.land/x/abc@v1/vendor/https/deno.land/std/ws/mod.ts';
import { Broadcaster } from './broadcaster.ts';

let broadcaster = new Broadcaster();

const chatConnection = async (ws: WebSocket) => {
  console.log('new websocet connection made');
  // add new ws connection to map
  const uid = broadcaster.addConnection(ws);

  // listen for websocket events
  for await (const ev of ws) {
    console.log(ev);
    broadcaster.emitEvent(ev, uid);
  }
};

export { chatConnection };
