import { addUserRoutes } from './routes/user';
import  express from 'express';
import  next from 'next';
import { initDb } from '../db';

(async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    const handle = app.getRequestHandler();
    const server = express();
    await initDb();
    await app.prepare();

    server.get(['/', '/play'], (req, res) => {
        return app.render(req, res, '/play', req.query)
    });

    server.get('/forum', (req, res) => {
        return app.render(req, res, '/forum', req.query)
    })

    await addUserRoutes(server);

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    const port = 3000;
    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})()
