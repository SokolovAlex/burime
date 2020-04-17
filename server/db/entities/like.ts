import { CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user';
import { Burime } from './burime';

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public createdAt: Date;

    @ManyToOne(() => User, (user) => user.likes)
    public user: User;

    @ManyToOne(() => Burime, (burime) => burime.likes)
    public burime: Burime;
}