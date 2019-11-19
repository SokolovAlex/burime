import { addUserRoutes } from './routes/user';
import express from 'express';
import next from 'next';
import Socket from 'socket.io';
import { createServer } from 'http';
import { initDb } from '../db';
import { addChat } from './sockets/chat'

(async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    const handle = app.getRequestHandler();
    const server = express();
    const http = createServer(server);
    const io = Socket(http);
    await initDb();
    await app.prepare();

    server.get(['/', '/play'], (req, res) => app.render(req, res, '/play', req.query));
    server.get('/forum', (req, res) => app.render(req, res, '/forum', req.query))

    await addUserRoutes(server);
    await addChat(io);

    server.all('*', (req, res) => handle(req, res))

    const port = 3000;
    http.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    });
})()
