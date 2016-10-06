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
        name: 'Braccobaldo'
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
        name: 'Peggy'
    },
    {
        id: 6,
        name: 'Rex'
    },
    {
        id: 7,
        name: 'Lassie'
    },
    {
        id: 8,
        name: 'Marley'
    },
    {
        id: 9,
        name: 'Snoopy'
    },
    {
        id: 10,
        name: 'Santa\'s Little helper'
    },
    {
        id: 11,
        name: 'Pluto'
    },
    {
        id: 12,
        name: 'Lilly'
    },
    {
        id: 13,
        name: 'Vagabondo'
    },
    {
        id: 14,
        name: 'Beethoven'
    },
    {
        id: 15,
        name: 'Rin Tin Tin'
    },
    {
        id: 16,
        name: 'Raudi'
    }
];

const emptyList = [];

storiesOf('Table', module)
    .addWithInfo('Simple example', 'Component Info',() =>
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
    .add('With borders', () =>
        <Table
            bordered={true}
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
            noRowsRenderer={() => <div style={{ backgroundColor: 'purple',  fontSize: 20, color: '#fff' }}>Nessun personaggio da mostrare!</div>}
            rowCount={emptyList.length}
            rowGetter={({ index }) => list[index]}
            width={600}
        />
    );