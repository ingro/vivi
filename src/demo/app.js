import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import lodashSortBy from 'lodash/sortBy';
import axios from 'axios';

import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import DateRangePicker from '../DateRangePicker';
import LoadingButton from '../LoadingButton';
import Paginator from '../Paginator';
import SelectAsync from '../SelectAsync';
import Switch from '../Switch';
import Table from '../Table';

moment.locale('it');

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

function loadPosts(q) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&q=${q}`)
        .then(res => {
            const options = res.data.map(post => ({ value: post.id, label: post.title }));

            return {
                options,
                complete: false
            };
        });
}

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
                <p>A new Adrias Online interface collection based on React and Bootstrap</p>
                <h3>Here is a SelectAsync</h3>
                <SelectAsync
                    loadOptions={loadPosts}
                />
                <h3>Here is a Paginator</h3>
                <Paginator
                    current={1}
                    total={50}
                    pageSize={10}
                    showStatusText={true}
                    showSizeChanger={true}
                    sizeOptions={[10, 20, 50]}
                    onChanges={p => console.warn(p)}
                    onSizeChange={s => console.warn(s)}
                />
                <h3>Here is a DatePicker</h3>
                <DatePicker
                    date={moment().add(10, 'days')}
                    onChange={(date) => console.warn('New date!', date)}
                />
                <h3>Here is a DateRangePicker</h3>
                <DateRangePicker
                    startDate={moment().add(10, 'days')}
                    endDate={moment().add(23, 'days')}
                    onChange={(range) => console.warn('New range!', range)}
                />
                <h3>Here is a LoadingButton</h3>
                <LoadingButton
                    bsClass="info"
                    loading={isLoading}
                    onClick={this.handleLoading}
                >
                    <i className="fa fa-check"></i> Save
                </LoadingButton>
                <h3>Here is a Checkbox</h3>
                <Checkbox onChange={(status) => console.warn(status)} />
                <h3>Here is a Switch</h3>
                <Switch
                    checked={this.state.checked}
                    onClick={(e) => this.setState({ checked: ! this.state.checked })}
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
