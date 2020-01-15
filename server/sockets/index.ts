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

  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      io.emit('change_active_users', removeUser());
    });

    subscribeChatEvents(socket, messageRepo, io);

    subscribeBurimeEvents(socket, burimeRepo, io);

    io.emit('change_active_users', addUser());
  });
}


