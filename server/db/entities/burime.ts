import { Like } from './like';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { BurimeStep } from './burime-step';

export enum BurimeStatus {
    Call = 'Call',
    Process = 'Process',
    Finish = 'Finish',
    Obsolete = 'Obsolete',
    Deleted = 'Deleted',
}

export enum BurimeStepsAmount {
    XSmall = 2,
    Small = 4,
    Medium = 6,
    Large = 8,
}

export enum StepDuration {
    None = 0,
    Fast = 40,
    Mid = 80,
    Long = 120,
    ExtraLong = 30 * 60,
}

@Entity()
export class Burime {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        default: BurimeStatus.Call,
    })
    public status: BurimeStatus;

    @Column({nullable: true})
    public name?: string;

    @Column()
    public theme: string;

    @Column({
        type: 'int8',
        default: BurimeStepsAmount.Small,
    })
    public stepsAmount: BurimeStepsAmount;

    @Column({
        type: 'varchar',
        default: StepDuration.None,
    })
    public stepDuration: StepDuration;

    @CreateDateColumn()
    public createdAt: Date;

    @ManyToOne(() => User, user => user.callGames)
    public user1: User;

    @ManyToOne(() => User, user => user.agreeGames)
    public user2: User;

    @OneToMany(() => BurimeStep, step => step.burime)
    public steps: BurimeStep[];

    @OneToMany(() => Like, like => like.burime)
    public likes: Like[];
}