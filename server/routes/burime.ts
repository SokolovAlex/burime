import  { Express } from 'express';
import { getConnection } from '../db';
import { Burime, BurimeStatus } from '../db/entities/burime';
import { User } from '../db/entities/user';

export const addBurimeRoutes = async (server: Express) => {
    const connection = getConnection();
    const burimeRepo = await connection.getRepository(Burime);

    const getBurimes = async (email, status) => {
        return await burimeRepo.find({
            where: [
                { user1: { email }, status },
                { user2: { email }, status },
            ],
            relations: ['user1', 'user2'],
        });
    }

    server.get('/api/calls', async (_, res) => {
        const burimes: Burime[] = await burimeRepo.find({
            where: {
                status: BurimeStatus.Call,
            },
            relations: ['user1'],
        });
        res.json({
            burimes: burimes.sort((a, b) => a.createdAt <= b.createdAt ? 1 : -1),
        });
    });

    server.get('/api/burime/my', async (req, res) => {
        const user = req.user as User;
        const burimes = await getBurimes(user.email, BurimeStatus.Finish);
        res.json({ burimes });
    });

    server.get('/api/burime/active', async (req, res) => {
        const user = req.user as User;
        const status = BurimeStatus.Process;
        const email = user.email;
        const burime = await burimeRepo.findOne({
            where: [
                { user1: { email }, status },
                { user2: { email }, status },
            ],
            relations: ['user1', 'user2'],
        });
        res.json({ burime });
    });

    server.get('/api/burime/:id', async (req, res) => {
        const id = req.params.id;
        const status = req.query.status;
        const whereParams = {
            id,
        } as { id: string, status: BurimeStatus };
        if (status) {
            whereParams.status = status;
        }
        const burime = await burimeRepo.findOne({
            where: whereParams,
            relations: ['user1', 'user2', 'steps', 'steps.user'],
        });
        res.json({ burime });
    });
};
