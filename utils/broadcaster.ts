import { Message } from './message.ts';
import {
  WebSocket,
  WebSocketEvent,
  isWebSocketCloseEvent,
} from 'https://deno.land/x/abc@v1/vendor/https/deno.land/std/ws/mod.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

class Broadcaster {
  private sockets: Map<string, WebSocket>;

  constructor() {
    this.sockets = new Map<string, WebSocket>();
  }

  private broadcast(content: string) {
    this.sockets.forEach((ws: WebSocket) => {
      if (!ws.isClosed) ws.send(content);
    });
  }

  addConnection(ws: WebSocket): string {
    const uid = v4.generate();
    this.sockets.set(uid, ws);
    this.broadcast(JSON.stringify({ online: this.sockets.size }));
    return uid;
  }

  emitEvent(ev: WebSocketEvent, uid: string) {
    if (isWebSocketCloseEvent(ev)) {
      this.sockets.delete(uid);
      this.broadcast(JSON.stringify({ online: this.sockets.size }));
    }

    if (typeof ev === 'string') {
      // makes sure that message is valid
      let message: Message = JSON.parse(ev.toString());
      this.broadcast(JSON.stringify(message));
    }
  }
}

export { Broadcaster };
