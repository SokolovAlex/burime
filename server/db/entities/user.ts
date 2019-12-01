import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Log } from './log';

export type UserType = 'local' | 'google';

@Entity()
export class User {
    @PrimaryColumn()
    public email: string;

    @Column()
    public name: string;

    @Column({nullable: true})
    public password?: string;

    @Column({default: 'local'})
    public type: UserType;

    @Column('datetime')
    public lastEnterAt: Date;

    @OneToMany(() => Log, (log) => log.user)
    public logs: Log[];
}