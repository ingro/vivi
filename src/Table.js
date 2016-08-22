import React, { Component, PropTypes } from 'react';
import { AutoSizer, FlexTable, FlexColumn } from 'react-virtualized';
import _ from 'lodash';

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

    handleHeaderCheckClick = (e) => {
        const checked = e.target.checked;

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

    handleRowCheckClick = (rowData, rowIndex, e) => {
        const checked = e.target.checked;

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

    getRowStyle = (data) => {
        const { index } = data;

        const checked = this.state.selectedRows.indexOf(index) > -1;

        if (checked) {
            return { backgroundColor: 'yellow' };
        }

        if (index > -1) {
            return index % 2 ? { backgroundColor: '#f9f9f9' } : { backgroundColor: '#fff' };
        }

        return {};
    }

    renderCheckColumn = (data) => {
        const { rowData, rowIndex } = data;

        const index = this.state.selectedRows.indexOf(rowIndex);

        const checked = index > -1;

        return <input type="checkbox" checked={checked} onChange={this.handleRowCheckClick.bind(this, rowData, rowIndex)} />;
    }

    renderCheckHeader = () => {
        return <input type="checkbox" checked={this.state.globalSelectStatus} onChange={this.handleHeaderCheckClick} />;
    }

    render() {
        const { columns, headerHeight, height, noRowsRenderer, onSort, rowCount, rowGetter, rowHeight, selectable, sortBy, sortDirection, width } = this.props;

        const expectedHeight = rowCount > 0 ? headerHeight + (rowHeight * rowCount) : headerHeight + rowHeight;
        const tableHeight =  expectedHeight < height ? expectedHeight : height;

        columns.map(column => _.defaults(column, defaultColumnProps));

        return (
            <AutoSizer>
                {(auto) => (
                    <FlexTable
                        headerHeight={headerHeight}
                        height={tableHeight}
                        rowCount={rowCount}
                        rowGetter={rowGetter}
                        rowHeight={rowHeight}
                        width={width ? width : auto.width}
                        noRowsRenderer={noRowsRenderer}
                        rowStyle={this.getRowStyle}
                        sort={onSort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    >
                        {selectable &&
                            <FlexColumn
                                width={36}
                                disableSort
                                dataKey={'_select'}
                                cellRenderer={this.renderCheckColumn}
                                headerRenderer={this.renderCheckHeader}
                                flexGrow={0}
                            />
                        }
                        {columns.map((column, i) =>
                            <FlexColumn
                                key={i}
                                {...column}
                            />
                        )}
                    </FlexTable>
                )}
            </AutoSizer>
        );
    }
}

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    headerHeight: PropTypes.number,
    height: PropTypes.number.isRequired,
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
    headerHeight: 40,
    noRowsRenderer: () => <div className="alert alert-warning text-center">No items to show</div>,
    onRowSelectChange: () => {},
    rowHeight: 40,
    selectable: false
};
