import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Poem } from './poem';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public createdAt: Date;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @CreateDateColumn()
    public birthDate: Date;

    @OneToMany(() => Poem, (poem) => poem.author)
    public poems: Poem[];
}