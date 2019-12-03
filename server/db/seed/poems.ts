import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Poem } from '../entities/poem';
import { Author } from '../entities/author';
import poemsContent from './brodsky';

(async () => {
    const connection = await createConnection();
    await connection.synchronize();
    const poemsRepo = await connection.getRepository(Poem);
    const authorRepo = await connection.getRepository(Author);

    const newAuthor = new Author();
    newAuthor.birthDate = new Date('24.05.1940');
    newAuthor.firstName = 'Joseph';
    newAuthor.lastName = 'Brodsky';
    newAuthor.createdAt = new Date();

    const author = await authorRepo.save(newAuthor);
    const promises = poemsContent.map((poemData) => {
        const poem = new Poem();
        poem.content = poemData.content;
        poem.createdAt = new Date();
        poem.date = poemData.date;
        poem.author = author;
        return poemsRepo.save(poem);
    });
    await Promise.all(promises);
})();