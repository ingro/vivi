import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import lodashSortBy from 'lodash/sortBy';

import Table from '../Table';
import Switch from '../Switch';
import LoadingButton from '../LoadingButton';

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
            list,
            isLoading: false,
            checked: true
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

    handleLoading = () => {
        this.setState({
            isLoading: true
        });

        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 3000);
    }

    render() {
        const { sortBy, sortDirection, list, isLoading } = this.state;

        return (
            <div>
                <h1>Welcome to Vivi!</h1>
                <p>A new Adrias Online interface collection</p>
                <h3>Here is a LoadingButton</h3>
                <LoadingButton
                    bsClass="info"
                    loading={isLoading}
                    onClick={this.handleLoading}
                >
                    <i className="fa fa-check"></i> Save
                </LoadingButton>
                <h3>Here is a switch</h3>
                <Switch
                    checked={this.state.checked}
                    onClick={(e) => this.setState({ checked: ! this.state.checked })}
                    onChange={(status) => console.warn(status)}
                />
                <h3>Here it is uncontrolled</h3>
                <Switch
                    onChange={(status) => console.warn(status)}
                />
                <h3>Here it is disabled</h3>
                <Switch
                    disabled
                    defaultChecked={true}
                    onChange={(status) => console.warn(status)}
                />
                <h3>Here is a table!</h3>
                <button onClick={this.getSelectedItems}>Oggetti selezionati</button>
                <Table
                    ref="table"
                    columns={cols}
                    height={400}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
                    width={600}
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
