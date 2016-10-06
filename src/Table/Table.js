import React, { Component, PropTypes } from 'react';
import { AutoSizer, Table as RVTable, Column } from 'react-virtualized';
import classnames from 'classnames';
import defaults from 'lodash/defaults';

import Checkbox from '../Checkbox';

const defaultColumnProps = {
    flexGrow: 1,
    width: 50
};

export default class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            globalSelectStatus: null,
            selectedRows: []
        };
    }

    handleHeaderCheckClick = (checked) => {
        const selectedRows = [];

        if (checked) {
            for (let i = 0; i < this.props.rowCount; i++) {
                selectedRows.push(i);
            }
        }

        this.setState({
            globalSelectStatus: checked,
            selectedRows: selectedRows
        });
    }

    handleRowCheckClick = (rowData, rowIndex, checked) => {
        if (checked) {
            this.state.selectedRows.push(rowIndex);
        } else {
            const index = this.state.selectedRows.indexOf(rowIndex);

            if (index > -1) {
                this.state.selectedRows.splice(index, 1);
            }
        }

        this.setState({
            globalSelectStatus: null,
            selectedRows: this.state.selectedRows
        });

        this.props.onRowSelectChange(checked, rowData);
    }

    getSelectedItems() {
        return this.state.selectedRows.map(index => this.props.rowGetter({ index }));
    }

    getRowClassName = ({ index }) => {
        const checked = this.state.selectedRows.indexOf(index) > -1;

        return classnames({
            'ReactVirtualized__Table__row__selected': checked,
            'ReactVirtualized__Table__row__striped': ! (index % 2)
        });
    }

    renderCheckColumn = (data) => {
        const { rowData, rowIndex } = data;

        const index = this.state.selectedRows.indexOf(rowIndex);

        const checked = index > -1;

        return <Checkbox checked={checked} onChange={this.handleRowCheckClick.bind(this, rowData, rowIndex)}/>;
    }

    renderCheckHeader = () => {
        return <Checkbox checked={this.state.globalSelectStatus} onChange={this.handleHeaderCheckClick}/>;
    }

    render() {
        const { bordered, columns, headerHeight, height, noRowsRenderer, onSort, rowCount, rowGetter, rowHeight, selectable, sortBy, sortDirection, width } = this.props;

        let tableHeight = height;

        if (height) {
            const expectedHeight = rowCount > 0 ? headerHeight + (rowHeight * rowCount) : headerHeight + rowHeight;
            tableHeight =  expectedHeight < height ? expectedHeight : height;
        }

        columns.map(column => defaults(column, defaultColumnProps));

        return (
            <AutoSizer>
                {(auto) => (
                    <RVTable
                        className={classnames({'ReactVirtualized__Table__bordered': bordered})}
                        headerHeight={headerHeight}
                        height={height ? tableHeight : auto.height}
                        rowCount={rowCount}
                        rowGetter={rowGetter}
                        rowHeight={rowHeight}
                        width={width ? width : auto.width}
                        noRowsRenderer={noRowsRenderer}
                        rowClassName={this.getRowClassName}
                        sort={onSort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    >
                        {selectable &&
                            <Column
                                width={36}
                                disableSort={true}
                                dataKey={'_select'}
                                cellRenderer={this.renderCheckColumn}
                                headerRenderer={this.renderCheckHeader}
                                flexGrow={0}
                                className='ReactVirtualized__Table__selectColumnRow'
                                headerClassName='ReactVirtualized__Table__selectColumnHeader'
                            />
                        }
                        {columns.map((column, i) =>
                            <Column
                                key={i}
                                {...column}
                            />
                        )}
                    </RVTable>
                )}
            </AutoSizer>
        );
    }
}

Table.propTypes = {
    bordered: PropTypes.bool,
    columns: PropTypes.array.isRequired,
    headerHeight: PropTypes.number,
    height: PropTypes.number,
    noRowsRenderer: PropTypes.func,
    onRowSelectChange: PropTypes.func,
    onSort: PropTypes.func,
    rowCount: PropTypes.number.isRequired,
    rowGetter: PropTypes.func.isRequired,
    rowHeight: React.PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    selectable: PropTypes.bool,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    width: PropTypes.number
};

Table.defaultProps = {
    bordered: false,
    headerHeight: 40,
    noRowsRenderer: () => <div className="alert alert-warning text-center">No items to show</div>,
    onRowSelectChange: () => {},
    rowHeight: 40,
    selectable: false
};
