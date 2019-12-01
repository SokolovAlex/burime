import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ActionType, Log } from './entities/log';
import { User } from './entities/user';

(async () => {
    const connection = await createConnection();
    await connection.synchronize();

    const userRepo = await connection.getRepository(User);
    const logRepo = await connection.getRepository(Log);

    const newUser = new User();
    newUser.email = 'sokolov@kl.com';
    newUser.name = 'alex sokolov';
    newUser.lastEnterAt = new Date();

    const user = await userRepo.save(newUser);

    const newLog = new Log();
    newLog.actionType = ActionType.Create;
    newLog.user = user;

    await logRepo.save(newLog);
})();