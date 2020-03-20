import  { Express } from 'express';
import { getConnection } from '../db';
import { Message } from '../db/entities/message';
import { countUsers } from '../services/users';

export const addMessagesRoutes = async (server: Express) => {
    const connection = getConnection();
    const messageRepo = await connection.getRepository(Message);

    server.get('/api/common-chat-messages', async (_, res) => {
        const messages: Message[] = await messageRepo.find({
            take: 30,
            relations: ['author'],
        });
        res.json({
            messages,
            activeUsers: countUsers(),
        });
    });
};