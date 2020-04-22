import { UserModel } from './user';

export enum BurimeStatus {
    Call = 'Call',
    Process = 'Process',
    Finish = 'Finish',
    Obsolete = 'Obsolete',
    Deleted = 'Deleted',
}

export enum BurimeStepsAmount {
    Two = 2,
    Four = 4,
    Seven = 7,
    Ten = 10,
}

export enum StepDuration {
    None = 0,
    Fast = 40,
    Mid = 80,
    Long = 120,
    ExtraLong = 30 * 60,
}

export interface IOption {
    value: number;
    label: string;
}

export const BurimeStepsAmountOptions: IOption[] = [
    { value: BurimeStepsAmount.Two, label: '4 строки' },
    { value: BurimeStepsAmount.Four, label: '8 строк' },
    { value: BurimeStepsAmount.Seven, label: '14 строк' },
    { value: BurimeStepsAmount.Ten, label: '20 строк' },
];

export const StepDurationOptions: IOption[] = [
    { value: StepDuration.None, label: 'без огарничений' },
    { value: StepDuration.Fast, label: '1 минута' },
    { value: StepDuration.Mid, label: '2 минуты ' },
    { value: StepDuration.Long, label: '3 минуты' },
    { value: StepDuration.ExtraLong, label: '10 минут' },
];

export const BurimeStepsAmountOptionsMap = BurimeStepsAmountOptions.reduce(
    (acc, item) => {
        acc[item.value] = item;
        return acc;
    },
    {}
);

export const StepDurationOptionsMap = StepDurationOptions.reduce(
    (acc, item) => {
        acc[item.value] = item;
        return acc;
    },
    {}
);

export class BurimeStep {
    public id: number;
    public order: number;
    public row1: string;
    public row2: string;
    public createdAt: Date;
    public user: UserModel;
    public burime: BurimeModel;
}

export class BurimeModel {
    public id: number;
    public name: string;
    public theme: string;
    public status: BurimeStatus;
    public stepsAmount: BurimeStepsAmount;
    public stepDuration: StepDuration;
    public createdAt: Date;
    public user1: UserModel;
    public user2: UserModel;
    public steps: BurimeStep[];
    public likes: LikeModel[];
}

export class LikeModel {
    public id: number;
    public burime: BurimeModel;
    public user: UserModel;
    public createdAt: Date;
}
