import { ConnectionOptions } from "typeorm";

export const pgConfig: ConnectionOptions = {
    "type": "postgres",
    "host": "localhost",
    "username": process.env.pg_user,
    "password": process.env.pg_password, 
    "database": "burime",
    "synchronize": false,
    "logging": false,
    "migrations": ["db/migration/*.js"],
    "cli": {
        "migrationsDir": "db/migration",
        "entitiesDir": "db/entities"
    },
    "entities": [
        "db/entities/**/*.ts"
    ]
};

export const sqlLiteConfig: ConnectionOptions = {
    "type": "sqlite",
    "name": "default",
    "database": "db.sqlite",
    "synchronize": false,
    "logging": false,
    "migrations": ["db/migration/*.js"],
    "cli": {
        "migrationsDir": "db/migration",
        "entitiesDir": "db/entities"
    },
    "entities": [
        "db/entities/**/*.ts"
    ]
};