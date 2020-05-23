import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { pgConfig } from './config';

let connection: Connection;

export const initDb = async () => {
    connection = await createConnection(pgConfig);
    return connection;
};

export const getConnection = (): Connection => connection;