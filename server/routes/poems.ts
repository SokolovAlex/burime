import  { Express } from 'express';
import { getConnection } from '../db';
import { Poem } from '../db/entities/poem';

export const addPoemsRoutes = async (server: Express) => {
    const connection = getConnection();
    const poemsRepo = await connection.getRepository(Poem);

    server.get('/api/poems', async (_, res) => {
        
    });
};