import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import _ from 'lodash';
import { Provider } from 'react-redux';

// Form
import store from './store';
import Form from './form';

// Components
import TranslatorProvider from '../TranslatorProvider';
import TranslatorHoc from '../TranslatorHoc';
import Checkbox from '../Checkbox';
import ClearableInput from '../ClearableInput';
import DatePicker from '../DatePicker';
// import DateRangePicker from '../DateRangePicker';
import Dropdown from '../Dropdown';
import LoadingButton from '../LoadingButton';
import Modal from '../Modal';
import Paginator from '../Paginator';
import RadioGroup from '../RadioGroup';
import Select from '../Select';
import SelectAsync from '../SelectAsync';
import Switch from '../Switch';
import Table from '../Table';
import TimeAgo from '../TimeAgo';
import Tooltip from '../Tooltip';

import messages from '../messages/it';

import 'flatpickr/dist/themes/airbnb.css';

// Fixtures
import { dogs as list, colors, loadPosts } from './fixtures';

// Init
moment.locale('it');

const cols = [
    {
        width: 100,
        label: 'ID',
        dataKey: 'value',
        flexGrow: 0
    }, {
        width: 200,
        label: 'Name',
        dataKey: 'label'
    }, {
        width: 200,
        label: 'Azioni',
        dataKey: 'value',
        cellRenderer: () => (
            <span>
                <button className="btn btn-info">Edit</button>
            </span>
        ),
        flexGrow: 0
    }
];

function Button({ text }) {
    return (
        <button className="btn btn-warning">
            {text}
        </button>
    );
}

const TranslatedButton = TranslatorHoc(Button, {
    text: 'LoadingButton.loadingMsg'
});

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortBy: null,
            sortDirection: null,
            list,
            isLoading: false,
            isModalOpened: false,
            checked: true,
            selectAsyncValue: null,
            selectValue: null,
            color: 'red',
            selectedRows: [],
            cvalue: ''
        };
    }

    handleSort = (data) => {
        const { sortBy, sortDirection } = data;

        const newList = _.sortBy(this.state.list, sortBy);

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

    handleModalClose = () => {
        this.setState({
            isModalOpened: false
        });
    }

    openModal = () => {
        this.setState({
            isModalOpened: true
        });
    }

    onChangeSelectAsync = (value) => {
        this.setState({
            selectAsyncValue: value
        });
    }

    onChangeSelect = (value) => {
        this.setState({
            selectValue: value
        });
    }

    onChangeRadio = (value) => {
        this.setState({
            color: value
        });
    }

    isSelected = (index) => {
        const item = this.rowGetter({ index });

        if (item) {
            const find = this.state.selectedRows.indexOf(item.value);

            if (find > -1) {
                return true;
            }
        }

        return false;
    }

    rowGetter = ({ index }) => {
        return this.state.list[index];
    }

    onHeaderCheckClick = (checked) => {
        if (checked) {
            this.setState({
                selectedRows: this.state.list.map(item => item.value)
            });
        } else {
            this.setState({
                selectedRows: []
            });
        }
    }

    onRowCheckClick = (rowData, checked) => {
        if (checked) {
            this.state.selectedRows.push(rowData.value);
        } else {
            const index = this.state.selectedRows.indexOf(rowData.value);

            if (index > -1) {
                this.state.selectedRows.splice(index, 1);
            }
        }

        this.setState({
            selectedRows: this.state.selectedRows
        });
    }

    render() {
        const { sortBy, sortDirection, list, isLoading, isModalOpened, selectValue, selectAsyncValue, color } = this.state;

        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a>
                                    <i className="fa fa-bell-o"></i>
                                </a>
                            </li>
                            <Dropdown
                                text={<i className="fa fa-cog" />}
                                type="navbar"
                                right={true}
                            >
                                <li className="dropdown-header">Admin</li>
                                <li><a href="/profile"><i className="fa fa-user"/> Profilo</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a><i className="fa fa-sign-out"/> Logout</a></li>
                            </Dropdown>
                        </ul>
                    </div>
                </div>
                <div style={{ marginTop: '60px' }}>
                    <h1>Welcome to Vivi!</h1>
                    <p>A new Adrias Online interface collection based on React and Bootstrap</p>
                    <h2>Form Components</h2>
                    <Provider store={store}>
                        <Form />
                    </Provider>
                    <h2>TranslatorHoc</h2>
                    <TranslatedButton />
                    <h2>Regular Components</h2>
                    <h3>Here is a radio group</h3>
                    <RadioGroup
                        name="color"
                        value={color}
                        options={colors}
                        onChange={this.onChangeRadio}
                        disabled={false}
                    />
                    <h3>Here is a modal</h3>
                    <button className="btn btn-default" onClick={this.openModal}>Open</button>
                    <Modal
                        isOpen={isModalOpened}
                        onClose={this.handleModalClose}
                        staticModal={true}
                    >
                        <h1>Im a modal!</h1>
                        <input type="text" name="name" placeholder="Name" />
                        <br/>
                        <input type="text" name="surname" placeholder="Surname" />
                        <br/>
                        <button className="btn btn-primary" onClick={this.handleModalClose}>Close me</button>
                    </Modal>
                    <h3>Here some TimeAgo</h3>
                    <TimeAgo date={moment().subtract(2, 'hour')}/>
                    <br />
                    <TimeAgo date="2016-08-29 05:01:37"/>
                    <br />
                    <TimeAgo tooltip={true} date="2016-08-29 05:01:37"/>
                    <h3>Here some Tooltip</h3>
                    <Tooltip
                        content={'Im a Top tooltip!!!'}
                    >
                        <a>Top</a>
                    </Tooltip>
                    <br />
                    <Tooltip
                        content={'Im a Right tooltip!!!'}
                        position="right"
                        trigger={['click']}
                    >
                        <a>Click</a>
                    </Tooltip>
                    <h3>Here is a SelectAsync</h3>
                    <SelectAsync
                        value={selectAsyncValue}
                        loadOptions={loadPosts}
                        onChange={this.onChangeSelectAsync}
                        multi={true}
                        create={false}
                    />
                    <h3>Here is a Select</h3>
                    <Select
                        value={selectValue}
                        onChange={this.onChangeSelect}
                        multi={true}
                        options={list}
                        create={false}
                    />
                    <h3>Here is a Paginator</h3>
                    <div className="row">
                        <Paginator
                            defaultCurrent={1}
                            total={50}
                            pageSize={10}
                            showStatusText={true}
                            showSizeChanger={true}
                            sizeOptions={[10, 20, 500, 1000]}
                            onChange={p => console.warn(p)}
                            onSizeChange={s => console.warn(s)}
                        />
                    </div>
                    <h3>Here is a DatePicker</h3>
                    <DatePicker
                        onChange={(date) => console.warn('New date!', date)}
                    />
                    <h3>Here is a LoadingButton</h3>
                    <LoadingButton
                        className="btn-info btn-lg"
                        loading={isLoading}
                        onClick={this.handleLoading}
                    >
                        <i className="fa fa-check"/> Save
                    </LoadingButton>
                    <h3>Here is a Checkbox</h3>
                    <Checkbox
                        onChange={(status) => console.warn(status)}
                    />
                    <h3>Here is a Switch</h3>
                    <Switch
                        checked={this.state.checked}
                        onClick={(e) => this.setState({ checked: ! this.state.checked })}
                        onChange={(status) => console.warn(status)}
                    />
                    <h3>Here is a ClearableInput</h3>
                    <div className="row">
                        <div className="col-xs-4">
                            <ClearableInput
                                name="foo"
                                placeholder="Type to search..."
                                onKeyUp={(e) => console.warn(`${e.key} Pressed!`)}
                            />
                        </div>
                    </div>
                    <h3>Here is a dropdown</h3>
                    <div className="text-right">
                        <Dropdown text="Click me!" type="button" right={true} dropup={false}>
                            <li><a href="#foo">A very very very very very very long link</a></li>
                            <li><a onClick={() => console.warn('BAR CLICKED!')}>Bar</a></li>
                        </Dropdown>
                    </div>
                    <h3>Here is a table!</h3>
                    <Table
                        ref={ref => this.table = ref }
                        bordered={true}
                        columns={cols}
                        height={400}
                        rowHeight={50}
                        rowCount={list.length}
                        rowGetter={this.rowGetter}
                        selectable={true}
                        selectedRowsCount={this.state.selectedRows.length}
                        onRowCheckClick={this.onRowCheckClick}
                        onHeaderCheckClick={this.onHeaderCheckClick}
                        isSelected={this.isSelected}
                        onSort={this.handleSort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    />
                </div>
            </div>
        );
    }
}

render(
    <TranslatorProvider locale="it" messages={messages}>
        <App />
    </TranslatorProvider>,
    document.getElementById('root')
);

// render(
//     <App />,
//     document.getElementById('root')
// );
