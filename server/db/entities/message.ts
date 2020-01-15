import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

export enum ChatType {
    common = 'common',
    private = 'private',
}

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn({type:'date'})
    public date: Date;

    @Column()
    public content: string;

    @Column({
        type: 'varchar',
        default: ChatType.common,
    })
    public chatType: ChatType;

    @ManyToOne(() => User, user => user.messages)
    public author: User;
}