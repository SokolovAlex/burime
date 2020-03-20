import React, { useMemo } from 'react';
import { BurimeModel } from '../../../models/burime';
import DataTable from 'react-data-table-component';
import dayjs from 'dayjs';
import { ReadmeStyled } from './styled';

interface BurimeListProps {
    burimes: BurimeModel[];
    onOpen?: (burime: BurimeModel) => void;
}

const prepareRows = (burimes:  BurimeModel[]) => burimes.map(({ id, theme, user1, user2, createdAt }) => ({
    id: id.toString(),
    theme,
    user1: user1.name,
    opponent: user2.name,
    createdAt: dayjs(createdAt).format('DD/MM/YYYY'),
}));

const prepareColumns = (openBurime) => (
    [
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
        },
        {
            name: 'Принял',
            selector: 'opponent',
            sortable: true,
            right: true,
        },
        {
            name: 'Дата',
            selector: 'createdAt',
            sortable: true,
            right: true,
        },{
            name: 'открыть',
            cell: row => <ReadmeStyled width={16} onClick={() => openBurime(row)}></ReadmeStyled>,
            button: true,
            right: true,
        },
    ]
);

export const BurimeList = ({ burimes, onOpen }: BurimeListProps) => {
    const burimeRows = useMemo(() => prepareRows(burimes), [burimes]);
    const burimeColumns = useMemo(() => prepareColumns(onOpen), []);
    return (
        <DataTable
            noHeader={true}
            pagination={true}
            columns={burimeColumns}
            data={burimeRows}
        ></DataTable>
    );
};
