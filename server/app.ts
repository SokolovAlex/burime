import { addLikeRoutes } from './routes/like';
import { addBurimeRoutes } from './routes/burime';
import { addMessagesRoutes } from './routes/messages';
import { addAuthRoutes } from './routes/auth';
import { addUserRoutes } from './routes/user';
import express from 'express';
import expressSession from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import sessionFileStore from 'session-file-store';
import cors from 'cors';
import Socket from 'socket.io';
import flash from 'connect-flash';
import { createServer } from 'http';
import { initDb } from './db';
import { initSocket } from './sockets';
import initPassport from './passport';

(async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const server = express();
    const http = createServer(server);
    const FileStore = sessionFileStore(expressSession);
    const io = Socket(http);

    server.use(flash());
    server.use(cors({
        credentials: true,
        origin: "http://localhost:3002",
    }));
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(expressSession({
        secret: 'burime',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // day
        },
        store: new FileStore(),
    }));

    await initDb();
    await initPassport(server);
    await addUserRoutes(server);
    await addLikeRoutes(server);
    await addAuthRoutes(server);
    await addMessagesRoutes(server);
    await addBurimeRoutes(server);
    await initSocket(io);

    const port = dev ? 3003 : 80;
    http.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
})()
