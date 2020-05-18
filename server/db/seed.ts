import { initDb } from './index';
import 'reflect-metadata';
import { Message, ChatType } from './entities/message';
import { User } from './entities/user';

(async () => {
    const connection = await initDb();
    await connection.synchronize();

    const userRepo = await connection.getRepository(User);
    const messageRepo = await connection.getRepository(Message);

    const newUser = new User();
    newUser.email = 'sokolov@kl.com';
    newUser.name = 'alex sokolov';
    newUser.lastEnterAt = new Date();
    const user = await userRepo.save(newUser);

    const newMessage = new Message();
    newMessage.author = user;
    newMessage.chatType = ChatType.common;
    newMessage.content = 'Всем привет, друзья! Собирайтесь вместе и играйте в буриме!';
    await messageRepo.save(newMessage);
})();