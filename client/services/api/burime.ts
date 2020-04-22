import { randomTitle } from './../../../server/services/burime';
import { BurimeModel, BurimeStatus } from '../../models/burime';
import { useState, useEffect } from 'react';
import { getApi } from './api';
import Router from 'next/router';

const api = getApi();

const callsUrl = '/api/calls';
const burimeUrl = '/api/burime';
const myBurimeUrl = '/api/burime/my';
const allBurimeUrl = '/api/burime/all';
const randomTitleUrl = '/api/burime/random-title';

export const getBurimes = (url, params?) =>
    api
        .get<{ burimes: BurimeModel[]; total?: number }>(url, { params })
        .then(response => response.data);

export const getBurime = id =>
    api
        .get<{ burime: BurimeModel }>(`${burimeUrl}/${id}`)
        .then(response => response.data);

export const getFinishedBurime = id =>
    api
        .get<{ burime: BurimeModel }>(`${burimeUrl}/${id}`, {
            params: {
                status: BurimeStatus.Finish,
            },
        })
        .then(response => response.data);

export const getCalls = () =>
    api
        .get<{ burimes: BurimeModel[] }>('/api/calls')
        .then(response => response.data);

export const getActiveGame = () =>
    api
        .get<{ burime: BurimeModel }>('/api/burime/active')
        .then(response => response.data);

export const getUserGames = () =>
    api
        .get<{ burimes: BurimeModel[] }>('/api/burime/user-games')
        .then(response => response.data);

export const useBurime = url => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [burimes, setBurimes] = useState<BurimeModel[]>([]);
    useEffect(() => {
        getBurimes(url)
            .then(data => setBurimes(data.burimes))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);
    return { loading, burimes, error, setBurimes };
};

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
                if (
                    burime.user1.email !== user.email &&
                    burime.user2.email !== user.email
                ) {
                    setError(`not you game`);
                    return;
                }
                setBurime(data.burime);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);
    return { loading, burime, error };
};

export const useFinishedBurime = id => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [burime, setBurime] = useState<BurimeModel>();
    useEffect(() => {
        getFinishedBurime(id)
            .then(data => {
                const burime = data.burime;
                if (!burime) {
                    setError(`No burime with id: ${id}`);
                    return;
                }
                setBurime(data.burime);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);
    return { loading, burime, error };
};

export const useMyBurimes = () => useBurime(myBurimeUrl);

export const useBurimesPage = ({
    page,
    size,
}: {
    page: number;
    size: number;
}) => {
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPage] = useState(page);
    const [pageSize, setPageSize] = useState(size);
    const [error, setError] = useState(null);
    const [burimes, setBurimes] = useState<BurimeModel[]>([]);
    const [total, setTotal] = useState<number>();

    useEffect(() => {
        getBurimes(allBurimeUrl, {
            page: pageNumber,
            size: pageSize,
        })
            .then(data => {
                setBurimes(data.burimes);
                setTotal(data.total);
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [pageNumber]);
    return { loading, burimes, error, total, setPage, setPageSize, setBurimes };
};

export const useCheckFinishedBurime = id => {
    useEffect(() => {
        getFinishedBurime(id).then(data => {
            if (data.burime) {
                goToBurime(id);
            }
        });
    }, []);
};

export const useActiveBurime = () => {
    useEffect(() => {
        getActiveGame().then(data => {
            if (data.burime) {
                goToGame(data.burime.id);
            }
        });
    }, []);
};

export const getRandomTitle = () => api.get(randomTitleUrl).then(response => response.data);

export const useCalls = () => useBurime(callsUrl);

export const goToGame = burimeId => Router.push(`/game/${burimeId}`);

export const goToBurime = burimeId => Router.push(`/burime/${burimeId}`);
