import { UserModel } from './user'

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
    Eight = 8,
    Twelve = 12,
    Twenty = 20,
}

export enum StepDuration {
    Fast = 60,
    Mid = 120,
    Long = 180,
    ExtraLong = 10 * 60,
}

export interface IOption {
    value: number
    label: string
}

export const BurimeStepsAmountOptions: IOption[] = [
    { value: BurimeStepsAmount.Two, label: '2 хода' },
    { value: BurimeStepsAmount.Four, label: '4 хода' },
    { value: BurimeStepsAmount.Eight, label: '8 ходов' },
    { value: BurimeStepsAmount.Twelve, label: '12 ходов' },
    { value: BurimeStepsAmount.Twenty, label: '20 ходов' },
];

export const StepDurationOptions: IOption[] = [
    { value: StepDuration.Fast, label: '1 минута' },
    { value: StepDuration.Mid, label: '2 минуты ' },
    { value: StepDuration.Long, label: '3 минуты' },
    { value: StepDuration.ExtraLong, label: '10 минут' },
];

export const BurimeStepsAmountOptionsMap = BurimeStepsAmountOptions.reduce((acc, item) => {
    acc[item.value] = item;
    return acc;
}, {});

export const StepDurationOptionsMap = StepDurationOptions.reduce((acc, item) => {
    acc[item.value] = item;
    return acc;
}, {});

export class BurimeStep {
    public id: number
    public step: number
    public row1: string
    public row2: string
    public createdAt: Date
    public user: UserModel
    public burime: BurimeModel
}

export class BurimeModel {
    public id: number
    public name: string
    public theme: string
    public status: BurimeStatus
    public stepsAmount: BurimeStepsAmount
    public stepDuration: StepDuration
    public createdAt: Date
    public user1: UserModel
    public user2: UserModel
    public steps: BurimeStep[]
}
