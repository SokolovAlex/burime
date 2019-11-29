import  express from 'express';
import  next from 'next';
import { initDb } from '../db';
import { addAuthRoutes } from './routes/auth';
import { addUserRoutes } from './routes/user';

(async () => {
    console.log("1");
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    console.log("2");
    const handle = app.getRequestHandler();
    const server = express();
    await initDb();
    await app.prepare();

    server.get(['/', '/play'], (req, res) => app.render(req, res, '/play', req.query));
    server.get('/forum', (req, res) => app.render(req, res, '/forum', req.query))

    await addUserRoutes(server);
    await addAuthRoutes(server);

    server.all('*', (req, res) => handle(req, res))

    const port = 3001;
    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})()
