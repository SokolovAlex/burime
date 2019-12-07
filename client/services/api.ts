import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface User {
    name?: string;
    email: string;
    password: string;
}

export const registration = (user: User) => api.post('auth/registration', user);

export const signIn = (user: User) => api.post('auth/login', user);

export const status = async (cookie: any) => {
    const { status, data } = await api.get<{ logged: boolean; user: any }>('auth/status', {
        headers: {
            Cookie: `connect.sid=${cookie['connect.sid']}`,
        }
    });
    if (status !== 200) {
        return { logged: false, user: null };
    }
    return data;
}

export const get = (url) => api.get(url);