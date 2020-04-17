import  { Express } from 'express';
import { getConnection } from '../db';
import { Like } from '../db/entities/like';
import { User } from '../db/entities/user';

export const addLikeRoutes = async (server: Express) => {
    const connection = getConnection();
    const likeRepo = await connection.getRepository(Like);

    server.post('/api/like', async (req, res) => {
        const user = req.user as User;
        const body = req.body;
        await likeRepo.save({
            user,
            burime: {
                id: body.burimeId,
            },
        });
        res.json({
            message: 'ok',
        });
    });

    server.delete('/api/like', async (req, res) => {
        const user = req.user as User;
        const query = req.query;
        const likeDb = await likeRepo.findOne({
            where: {
                user,
                burimeId: query.burimeId,
            },
        });
        if (!likeDb) {
            return res.json({
                message: 'not found',
            });
        }
        await likeRepo.remove(likeDb);
        res.json({
            message: 'ok',
        });
    });
};
