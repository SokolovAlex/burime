import React, { useState, useCallback, useMemo } from 'react';
import { useUser } from '../../../services/contexts/auth';
import { Title } from '../../atoms/Title/Title';
import {
    useActiveBurime,
    goToBurime,
    useBurimesPage,
} from '../../../services/api/burime';
import { BurimeModel } from '../../../models/burime';
import dayjs from 'dayjs';
import { HeartEmpty, OpenStyled, HeartFilled, ActionsBlock, Action } from '../../atoms/styled';
import { like, dislike } from '../../../services/api/likes';
import DataTable from 'react-data-table-component';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { breakpoints } from '../../../constants';

const RowsPerPage = 20;

const prepareRows = (burimes: BurimeModel[], userEmail) =>
    burimes.map(({ id, likes, theme, user1, user2, createdAt }) => ({
        id: id.toString(),
        burimeId: id,
        theme,
        user1: user1.name,
        opponent: user2.name,
        iLike: likes.some(like => like.user.email === userEmail),
        likes: likes.length,
        createdAt: dayjs(createdAt).format('DD/MM/YYYY'),
    }));

const mobileBreakpoint = parseInt(breakpoints.breakpointSizes.mobile, 10);

const prepareColumns = ({
    onOpen,
    onLike,
    onDislike,
}) => [
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
        name: 'Нравится',
        cell: row => (
            <ActionsBlock>
                {
                    row.iLike
                        ? <HeartFilled
                            onClick={() => onDislike(row.burimeId)}
                            width={16}/>
                        : <HeartEmpty
                            onClick={() => onLike(row.burimeId)}
                            width={16}/>
                }
                <Action>{row.likes}</Action>
            </ActionsBlock>
        ),
        button: true,
        right: true,
    },
    {
        name: 'Прочесть',
        cell: row => <OpenStyled width={16} onClick={() => onOpen(row.burimeId)}/>,
        button: true,
        right: true,
    },
];

const setLike = (isLike, burimes, burimeId, userEmail) => {
    const burime = burimes.find(burime => burime.id === burimeId);
    if (isLike) {
        burime.likes.push({
            user: {
                email: userEmail,
            }
        });
    } else {
        burime.likes = burime.likes.filter(burime => burime.user.email !== userEmail);
    }
    return [...burimes];
}

export const AllBurimeList = () => {
    const user = useUser();
    if (!user) {
        return null;
    }
    useActiveBurime();
    const { loading, burimes, setBurimes, total, setPage } = useBurimesPage({
        page: 1,
        size: RowsPerPage,
    });
    const [] = useState();
    const onOpen = useCallback(burimeId => goToBurime(burimeId), []);
    const onLike = useCallback(burimeId =>
        like(burimeId)
            .then(() => setBurimes(setLike(true, burimes, burimeId, user.email))),
        [burimes]);
    const onDislike = useCallback(burimeId => 
        dislike(burimeId)
            .then(() => setBurimes(setLike(false, burimes, burimeId, user.email))),
        [burimes]);

    const rows = useMemo(() => prepareRows(burimes, user.email), [burimes]);
    const columns = useMemo(() => prepareColumns({
        onOpen,
        onLike,
        onDislike,
    }), [onOpen, onLike, onDislike]);
    return (
        <>
            <Title>Все буриме</Title>
            <DataTable
                noHeader
                columns={columns}
                data={rows}
                progressPending={loading}
                progressComponent={<Spinner/>}
                pagination
                paginationServer
                paginationTotalRows={total}
                paginationRowsPerPageOptions={[RowsPerPage]}
                paginationPerPage={RowsPerPage}
                onChangePage={(page) => setPage(page)}
            />
        </>
    );
};
