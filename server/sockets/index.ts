import { changeActiveUsers } from './events';
import { BurimeStep } from './../db/entities/burime-step';
import { Burime } from '../db/entities/burime';
import { addUser, removeUser } from '../services/users';
import { getConnection } from "typeorm";
import { Message } from '../db/entities/message';
import { subscribeChatEvents } from './chat';
import { subscribeBurimeEvents } from './burime';

export const initSocket = async (io) => {
  const connection = getConnection();
  const messageRepo = await connection.getRepository(Message);
  const burimeRepo = await connection.getRepository(Burime);
  const burimeStepRepo = await connection.getRepository(BurimeStep);

  io.on('connection', (socket) => {
    const userEmail = socket.handshake.query.user;
    socket.on('disconnect', () => io.emit(changeActiveUsers, removeUser(userEmail)));

    subscribeChatEvents(socket, messageRepo, io);
    subscribeBurimeEvents(socket, burimeRepo, burimeStepRepo, io);
    io.emit(changeActiveUsers, addUser(userEmail));
  });
}
