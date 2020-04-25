import { BurimeStatus, BurimeStep } from './../../client/models/burime';
import { Burime } from '../db/entities/burime';
import {
    createBurime,
    newBurime,
    deleteBurime,
    deletedBurime,
    acceptBurime,
    acceptedBurime,
    createStep,
    newStep,
    finishBurime,
    closeBurime,
} from './events';
import dayjs from 'dayjs';

export const subscribeBurimeEvents = (
    socket,
    burimeRepo,
    burimeStepsRepo,
    io,
) => {
    socket.on(createBurime, async (burime: Burime) => {
        const dbBurime = await burimeRepo.save(burime);
        io.emit(newBurime, dbBurime);
    });

    socket.on(deleteBurime, async (burime: Burime) => {
        const id = burime.id;
        await burimeRepo.delete(id);
        io.emit(deletedBurime, id);
    });

    socket.on(acceptBurime, async (burime: Burime) => {
        burime.name = `${burime.theme}. ${burime.user1.name} и ${burime.user2.name} (${dayjs().format('DD MMMM, YY')})`;
        burime.status = BurimeStatus.Process;
        const dbBurime = await burimeRepo.save(burime);
        io.emit(acceptedBurime, dbBurime);
    });

    socket.on(closeBurime, async (id: string) => {
        io.emit(finishBurime);
        await burimeRepo.update(id, { status: BurimeStatus.Finish});
    });

    socket.on(createStep, async (step: BurimeStep) => {
        const amount = step.burime.stepsAmount;
        const isFinished = step.order === amount;
        const dbStep = await burimeStepsRepo.save(step);
        io.emit(isFinished ? finishBurime : newStep, dbStep);
        if (isFinished) {
            await burimeRepo.update(dbStep.burime.id, { status: BurimeStatus.Finish });
        }
    });
};
