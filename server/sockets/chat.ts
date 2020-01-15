import { Message } from '../db/entities/message';

export const subscribeChatEvents = (socket, messageRepo, io) => {
  socket.on('send_message', async (messageInfo: any) => {
    const newMessage = new Message();
    newMessage.author = messageInfo.author;
    newMessage.content = messageInfo.content;
    const dbMessage = await messageRepo.save(newMessage);
    io.emit('new_message', dbMessage);
  });
}
