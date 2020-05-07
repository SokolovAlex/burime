import { getApi } from './api';

export interface User {
    name?: string;
    email: string;
    password: string;
}

const api = getApi();

const errorHandle = (error, unknownMessage) => {
    const message = error.response ? error.response.data.message : unknownMessage;
    return { data: { message } , status: 555 };
};

export const registration = (user: User) => api.post('auth/registration', user).catch(error => errorHandle(error, 'Регистрация недоступна') );
export const signIn = (user: User) => api.post('auth/login', user).catch(error => errorHandle(error, 'Авторизация недоступна') );
export const signOut = () => api.post('auth/logout').catch(error => errorHandle(error, 'Неизвестная ошибка') );
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
