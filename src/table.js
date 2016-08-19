import React, { Component, PropTypes } from 'react';
import { FlexTable, FlexColumn } from 'react-virtualized';

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
            return index % 2 ? { backgroundColor: '#eee' } : { backgroundColor: '#fff' };
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
        const { columns, headerHeight, height, rowCount, rowGetter, rowHeight, selectable, width } = this.props;

        return (
            <FlexTable
                headerHeight={headerHeight}
                height={height}
                rowCount={rowCount}
                rowGetter={rowGetter}
                rowHeight={rowHeight}
                width={width}
                rowStyle={this.getRowStyle}
            >
                {selectable &&
                    <FlexColumn
                        width={20}
                        dataKey={'_select'}
                        cellRenderer={this.renderCheckColumn}
                        headerRenderer={this.renderCheckHeader}
                    />
                }
                {columns.map((col, i) =>
                    <FlexColumn
                        key={i}
                        width={col.width}
                        label={col.label}
                        dataKey={col.dataKey}
                    />
                )}
            </FlexTable>
        );
    }
}

Table.propTypes = {
    columns: PropTypes.array,
    headerHeight: PropTypes.number,
    height: PropTypes.number,
    onRowSelectChange: PropTypes.func,
    rowCount: PropTypes.number,
    rowGetter: PropTypes.func,
    rowHeight: React.PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    selectable: PropTypes.bool,
    width: PropTypes.number
};

Table.defaultProps = {
    onRowSelectChange: () => {},
    selectable: false
};
