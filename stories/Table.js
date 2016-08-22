import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Table from '../src/Table';

const cols = [
    {
        width: 100,
        label: 'ID',
        dataKey: 'id',
        flexGrow: 0
    }, {
        width: 200,
        label: 'Name',
        dataKey: 'name'
    }
];

const list = [
    {
        id: 1,
        name: 'Bracco Baldo'
    },
    {
        id: 2,
        name: 'Scooby Doo'
    },
    {
        id: 3,
        name: 'Pongo'
    },
    {
        id: 4,
        name: 'Bolt'
    },
    {
        id: 5,
        name: 'Bracco Baldo'
    },
    {
        id: 6,
        name: 'Scooby Doo'
    },
    {
        id: 7,
        name: 'Pongo'
    },
    {
        id: 8,
        name: 'Bolt'
    },
    {
        id: 9,
        name: 'Bracco Baldo'
    },
    {
        id: 10,
        name: 'Scooby Doo'
    },
    {
        id: 11,
        name: 'Pongo'
    },
    {
        id: 12,
        name: 'Bolt'
    },
    {
        id: 13,
        name: 'Bracco Baldo'
    },
    {
        id: 14,
        name: 'Scooby Doo'
    },
    {
        id: 15,
        name: 'Pongo'
    },
    {
        id: 16,
        name: 'Bolt'
    }
];

const emptyList = [];

storiesOf('Table', module)
    .add('Simple example', () =>
        <Table
            columns={cols}
            height={400}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            width={600}
        />
    )
    .add('Auto width', () =>
        <Table
            columns={cols}
            height={400}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
        />
    )
    .add('Selectable rows', () =>
        <Table
            columns={cols}
            height={400}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            width={600}
            onRowSelectChange={action('Row selected')}
            selectable
        />
    )
    // TODO: sarebbe carino far cambiare i gutter negli headers dinamicamente ma questo pare non sia possibile con Storybook
    // dato che necessiterebbe di un re-render del componente
    .add('Sortable headers', () =>
        <Table
            columns={cols}
            height={400}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            width={600}
            onSort={action('Sort Header')}
            sortBy={'name'}
            sortDireaction={'asc'}
        />
    )
    .add('No item (default)', () =>
        <Table
            columns={cols}
            height={400}
            rowCount={emptyList.length}
            rowGetter={({ index }) => list[index]}
            width={600}
        />
    )
    .add('No item (custom)', () =>
        <Table
            columns={cols}
            height={400}
            noRowsRenderer={() => <div style={{ backgroundColor: 'yellow',  fontSize: 20 }}>Nessun personaggio da mostrare!</div>}
            rowCount={emptyList.length}
            rowGetter={({ index }) => list[index]}
            width={600}
        />
    );