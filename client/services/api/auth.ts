import { getApi } from './api';

export interface User {
    name?: string;
    email: string;
    password: string;
}

const api = getApi();

export const registration = (user: User) => api.post('auth/registration', user);
export const signIn = (user: User) => api.post('auth/login', user);
export const signOut = () => api.post('auth/logout');
export const status = async (cookie: any) => {
    const { status, data } = await api.get<{ logged: boolean; user: any }>(
        'auth/status',
        {
            headers: {
                Cookie: `connect.sid=${cookie['connect.sid']}`,
            },
        }
    );
    if (status !== 200) {
        return { logged: false, user: null };
    }
    return data;
};

export const get = url => api.get(url);
