import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { sqlLiteConfig } from './config';

let connection: Connection;

export const initDb = async () => {
    connection = await createConnection(sqlLiteConfig);
    return connection;
};

export const getConnection = (): Connection => connection;