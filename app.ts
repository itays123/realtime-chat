import {
  acceptWebSocket,
  acceptable,
} from 'https://deno.land/x/abc@v1/vendor/https/deno.land/std/ws/mod.ts';
import { Application, Context } from 'https://deno.land/x/abc@v1/mod.ts';
import { chatConnection } from './utils/chatroom.ts';

const app = new Application();

app
  .static('/', './client/build')
  .file('/', './client/build/index.html')
  .get('/ws', async (c: Context) => {
    const { conn, headers, r: bufReader, w: bufWriter } = c.request;
    const ws = await acceptWebSocket({
      conn,
      headers,
      bufReader,
      bufWriter,
    });
    await chatConnection(ws);
  })
  .start({ port: 8080 });
