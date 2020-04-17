import React from 'react';
import DataTable from 'react-data-table-component';
import { EmptyMessage } from '../BurimeCard/styled';
import { Spinner } from '../../atoms/Spinner/Spinner';

interface BurimeListProps {
    rows: any[];
    columns: any[];
    loading?: boolean;
}

export const BurimeList = ({ rows, columns, loading }: BurimeListProps) => {
    return (
        <DataTable
            noHeader
            pagination
            noDataComponent={<EmptyMessage>Список пуст</EmptyMessage>}
            columns={columns}
            data={rows}
            progressPending={loading}
            progressComponent={<Spinner/>}
        ></DataTable>
    );
};
