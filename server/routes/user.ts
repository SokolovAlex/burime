import  { Express } from 'express';
import { getConnection } from '../db';
import { User } from '../db/entities/user';

export const addUserRoutes = async (server: Express) => {
    const connection = getConnection();
    const userRepo = await connection.getRepository(User);

    server.get('/api/users', async (_, res) => {
        const users: User[] = await userRepo.find();
        res.json(users);
    });
};