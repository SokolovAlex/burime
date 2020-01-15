import { BurimeStatus } from './../../client/models/burime';
import { Burime } from '../db/entities/burime';
import { createBurime, newBurime, deleteBurime, deletedBurime, acceptBurime, acceptedBurime } from './events';
import { User } from '../db/entities/user';

export const subscribeBurimeEvents = (socket, burimeRepo, io) => {
    socket.on(createBurime, async (burime: Burime) => {
        const dbBurime = await burimeRepo.save(burime);
        io.emit(newBurime, dbBurime);
    });

    socket.on(deleteBurime, async (burime: Burime) => {
        const id = burime.id;
        await burimeRepo.delete(id);
        io.emit(deletedBurime, id);
    });

    socket.on(acceptBurime, async (burime: Burime, user: User) => {
        burime.user2 = user;
        console.log('user', user); // todo
        burime.status = BurimeStatus.Process;
        const dbBurime = await burimeRepo.save(burime);
        io.emit(acceptedBurime, dbBurime);
    });
}
