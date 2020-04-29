import React, { useState, useCallback, useMemo } from 'react';
import { useUser } from '../../../services/contexts/auth';
import { Title } from '../../atoms/Title/Title';
import {
    useMyBurimes,
    useActiveBurime,
    goToBurime,
} from '../../../services/api/burime';
import { BurimeList } from '../../molecules/BurimeList/BurimeList';
import { BurimeModel } from '../../../models/burime';
import dayjs from 'dayjs';
import { OpenStyled } from '../../atoms/styled';
import { breakpoints } from '../../../constants';

const prepareRows = (burimes: BurimeModel[]) =>
    burimes.map(({ id, theme, user1, user2, createdAt }) => ({
        id: id.toString(),
        theme,
        user1: user1.name,
        opponent: user2.name,
        createdAt: dayjs(createdAt).format('DD/MM/YYYY'),
    }));

const mobileBreakpoint = parseInt(breakpoints.breakpointSizes.mobile, 10);

const prepareColumns = openBurime => [
    {
        name: 'Заголовок',
        selector: 'theme',
        sortable: true,
    },
    {
        name: 'Вызвал',
        selector: 'user1',
        sortable: true,
        right: true,
        hide: mobileBreakpoint,
    },
    {
        name: 'Принял',
        selector: 'opponent',
        sortable: true,
        right: true,
        hide: mobileBreakpoint,
    },
    {
        name: 'Дата',
        selector: 'createdAt',
        sortable: true,
        right: true,
    },
    {
        name: 'открыть',
        cell: row => (
            <OpenStyled
                width={16}
                onClick={() => openBurime(row)}
            />
        ),
        button: true,
        right: true,
    },
];

export const MyBurimeList = () => {
    const user = useUser();
    if (!user) {
        return null;
    }
    useActiveBurime();
    const { loading, burimes } = useMyBurimes();
    const [] = useState();
    const onOpen = useCallback(burime => goToBurime(burime.id), []);
    const rows = useMemo(() => prepareRows(burimes), [burimes]);
    const columns = useMemo(() => prepareColumns(onOpen), [onOpen]);

    return (
        <>
            <Title>Мои буриме</Title>
            <BurimeList
                loading={loading}
                rows={rows}
                columns={columns}
            ></BurimeList>
        </>
    );
};
