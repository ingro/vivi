import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import lodashSortBy from 'lodash/sortBy';

import Table from '../Table';
import Switch from '../Switch';

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

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortBy: null,
            sortDirection: null,
            list
        };
    }

    getSelectedItems = () => {
        console.log(this.refs.table.getSelectedItems());
    }

    handleSort = (data) => {
        const { sortBy, sortDirection } = data;

        const newList = lodashSortBy(this.state.list, sortBy);

        this.setState({
            sortBy,
            sortDirection,
            list: sortDirection === 'ASC' ? newList : newList.reverse()
        });
    }

    render() {
        const { sortBy, sortDirection, list } = this.state;

        return (
            <div>
                <h1>Welcome to Vivi!</h1>
                <p>A new Adrias Online interface collection</p>
                <h3>Here is a switch</h3>
                <Switch
                    checked={true}
                    onChange={(e) => console.warn(e.target.checked)}
                />
                <h3>Here is a table!</h3>
                <button onClick={this.getSelectedItems}>Oggetti selezionati</button>
                <Table
                    ref="table"
                    columns={cols}
                    height={400}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
                    widthhh={600}
                    selectable={true}
                    onRowSelectChange={(checked, data) => {console.log(data); console.warn(checked)}}
                    onSort={this.handleSort}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);
