import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import _ from 'lodash';
import { Provider } from 'react-redux';

// Form
import store from './store';
import Form from './form';

// Components
import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import DateRangePicker from '../DateRangePicker';
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

// Fixtures
import { dogs as list, colors, loadPosts } from './fixtures';

// Init
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
            color: 'red'
        };
    }

    getSelectedItems = () => {
        console.log(this.table.getSelectedItems());
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

    render() {
        const { sortBy, sortDirection, list, isLoading, isModalOpened, selectValue, selectAsyncValue, color } = this.state;

        return (
            <div>
                <h1>Welcome to Vivi!</h1>
                <p>A new Adrias Online interface collection based on React and Bootstrap</p>
                <h2>Form Components</h2>
                <Provider store={store}>
                    <Form />
                </Provider>
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
                <Paginator
                    defaultCurrent={1}
                    total={15}
                    pageSize={10}
                    showStatusText={true}
                    showSizeChanger={true}
                    sizeOptions={[10, 20, 50]}
                    onChange={p => console.warn(p)}
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
                <h3>Here is a table!</h3>
                <button onClick={this.getSelectedItems}>Oggetti selezionati</button>
                <Table
                    ref={ref => this.table = ref }
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
