import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Table from '../table';

const cols = [
    {
        width: 200,
        label: 'ID',
        dataKey: 'id'
    }, {
        width: 400,
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
    }
];

class App extends Component {

    getSelectedItems = () => {
        console.log(this.refs.table.getSelectedItems());
    }

    render() {
        return (
            <div>
                <h1>Welcome to Vivi!</h1>
                <p>A new Adrias Online interface collection</p>
                <h3>Here is a table!</h3>
                <button onClick={this.getSelectedItems}>Oggetti selezionati</button>
                <Table
                    ref="table"
                    columns={cols}
                    headerHeight={50}
                    height={600}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
                    rowHeight={100}
                    width={1024}
                    selectable={true}
                    onRowSelectChange={(checked, data) => {console.log(data); console.warn(checked)}}
                />
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);
