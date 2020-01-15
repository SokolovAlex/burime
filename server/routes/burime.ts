import  { Express } from 'express';
import { getConnection } from '../db';
import { Burime, BurimeStatus } from '../db/entities/burime';
import { User } from '../db/entities/user';

export const addBurimeRoutes = async (server: Express) => {
    const connection = getConnection();
    const burimeRepo = await connection.getRepository(Burime);
    const userRepo = await connection.getRepository(User);

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

    server.get('/api/burime/user-games', async (req, res) => {
        const user = req.user as User;
        const userDb = await userRepo.findOne({
            where: {
                email: user.email,
            },
            relations: ['callGames', 'agreeGames'],
        });
        res.json({
            burimes: userDb && [ ...userDb.callGames, ...userDb.agreeGames ],
        });
    });

    server.get('/api/burime/active', async (req, res) => {
        const user = req.user as User;
        const burime = await burimeRepo.createQueryBuilder('burime')
            .where("burime.status = :status", { status: BurimeStatus.Call })
            .leftJoinAndSelect("burime.user1", "user1")
            .leftJoinAndSelect("burime.user2", "user2")
            .where("user1.email = :email OR user2.email = :email", { email: user.email })
            .getOne();
        res.json({
            burime,
        });
    });

    server.get('/api/burime/:id', async (req, res) => {
        const id = req.params.id;
        const burime = await burimeRepo.findOne({
            where: {
                id,
                status: BurimeStatus.Call,
            },
            relations: ['user1', 'user2'],
        });
        res.json({
            burime,
        });
    });
};
