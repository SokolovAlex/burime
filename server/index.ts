import { addAuthRoutes } from './routes/auth';
import { addUserRoutes } from './routes/user';
import express from 'express';
import Socket from 'socket.io';
import { createServer } from 'http';
import { initDb } from './db';
import { addChat } from './sockets/chat'

(async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const server = express();

    const http = createServer(server);
    const io = Socket(http);
    await initDb();
    await io.prepare();

    await initDb();
    await addUserRoutes(server);
    await addAuthRoutes(server);
    await addChat(io);

    const port = dev ? 3001 : 80;
    http.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    });
})()
