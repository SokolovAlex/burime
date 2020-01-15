import { BurimeStep } from './burime-step';
import { Burime } from './burime';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Log } from './log';
import { Message } from './message';

export type UserType = 'local' | 'google';

@Entity()
export class User {
    @PrimaryColumn()
    public email: string;

    @Column()
    public name: string;

    @Column({ nullable: true, select: false })
    public password?: string;

    @Column({default: 'local'})
    public type: UserType;

    @Column('datetime')
    public lastEnterAt: Date;

    @OneToMany(() => Log, log => log.user)
    public logs: Log[];

    @OneToMany(() => Message, message => message.author)
    public messages: Message[];

    @OneToMany(() => Burime, burime => burime.user1)
    public callGames: Burime[];

    @OneToMany(() => Burime, burime => burime.user2)
    public agreeGames: Burime[];

    @OneToMany(() => BurimeStep, step => step.user)
    public burimeSteps: BurimeStep[];
}