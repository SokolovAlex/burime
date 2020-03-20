import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Burime } from './burime';

@Entity()
export class BurimeStep {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public order: number;

    @Column()
    public row1: string;

    @Column()
    public row2: string;

    @CreateDateColumn()
    public createdAt: Date;

    @ManyToOne(() => User, user => user.burimeSteps)
    public user: User;

    @ManyToOne(() => Burime, burime => burime.steps)
    public burime: Burime;
}