import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface User {
    name: string;
    login: string;
    password: string;
}

export const registration = (user: User) => api.post('auth/registration', user);

export const login = () => api.post('auth/login');