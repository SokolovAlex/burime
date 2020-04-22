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

    server.post('/api/user/change-name', async (req, res) => {
        const user = req.user as User;
        const name = req.body.name;
        if (name.length > 15) {
            return res.status(417).json({ message: 'Слишком длинный псевдоним' });
        }
        await userRepo.update(user.email, {
            name,
        });
        res.json({
            message: `У вас новый псевдоним - ${name}.`,
        });
    });
};