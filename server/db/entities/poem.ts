import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author';

@Entity()
export class Poem {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public createdAt: Date;

    @CreateDateColumn()
    public date: number;

    @Column()
    public content: string;

    @ManyToOne(() => Author, (author) => author.poems)
    public author: Author;
}