import { BurimeModel } from '../../models/burime'
import { useState, useEffect } from 'react'
import { getApi } from './api';
import Router from 'next/router'

const api = getApi()

const callsUrl = '/api/calls';
const burimeUrl = '/api/burime';

export const getBurimes = url =>
    api.get<{ burimes: BurimeModel[] }>(url).then(response => response.data)

export const getBurime = id =>
    api.get<{ burime: BurimeModel }>(`${burimeUrl}/${id}`).then(response => response.data)

export const getCalls = () =>
    api.get<{ burimes: BurimeModel[] }>('/api/calls').then(response => response.data)

export const getActiveGame = () =>
    api.get<{ burime: BurimeModel}>('/api/burime/active').then(response => response.data)

export const getUserGames = () =>
    api.get<{ burimes: BurimeModel[] }>('/api/burime/user-games').then(response => response.data)

export const useBurime = url => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [burimes, setBurimes] = useState<BurimeModel[]>([]);
    useEffect(() => {
        getBurimes(url)
            .then(data => setBurimes(data.burimes))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, []);
    return { loading, burimes, error };
}

export const useGame = (id, user) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [burime, setBurime] = useState<BurimeModel>();
    useEffect(() => {
        getBurime(id)
            .then(data => {
                const burime = data.burime;
                if (!user) {
                    setError(`plese enter`);
                    return;
                }
                if (!burime) {
                    setError(`No burime with id: ${id}`);
                    return;
                }
                if (burime.user1.email !== user.email && burime.user2.email !== user.email) {
                    setError(`not you game`);
                    return;
                }
                setBurime(data.burime);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, []);
    return { loading, burime, error };
};

export const useUserGames = () => {
    useEffect(() => {
        getUserGames()
            .then(data => {
                console.log('active', data.burimes);
            });
    }, []);
};

export const useActiveBurime = () => {
    useEffect(() => {
        getActiveGame()
            .then(data => {
                if (data.burime) {
                    goToBurime(data.burime.id);
                }
            });
    }, []);
};

export const useCalls = () => useBurime(callsUrl);

export const goToBurime = burimeId => Router.push(`/game/${burimeId}`);
