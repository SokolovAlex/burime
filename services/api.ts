import axios from 'axios';

export interface User {
    name: string;
    login: string;
    password: string;
}

export const registration = (user: User) => axios.post('auth/registration', user);

export const login = () => axios.post('');