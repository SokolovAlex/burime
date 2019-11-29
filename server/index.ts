import { addAuthRoutes } from './routes/auth';
import { addUserRoutes } from './routes/user';
import  express from 'express';
import { initDb } from '../db';

(async () => {
    const dev = process.env.NODE_ENV !== 'production';
    const server = express();

    await initDb();
    await addUserRoutes(server);
    await addAuthRoutes(server);

    const port = dev ? 3001 : 80;

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})()
