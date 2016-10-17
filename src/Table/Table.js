import React, { Component, PropTypes } from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import Column from 'react-virtualized/dist/commonjs/Table/Column';
import RVTable from 'react-virtualized/dist/commonjs/Table/Table';
import classnames from 'classnames';
import defaults from 'lodash/defaults';

import Checkbox from '../Checkbox';
import getTranslation from '../utils/getTranslation';

const defaultColumnProps = {
    flexGrow: 1,
    width: 50
};

export default class Table extends Component {
    handleHeaderCheckClick = (checked) => {
        if (this.props.onHeaderCheckClick) {
            this.props.onHeaderCheckClick(checked);
        }
    }

    handleRowCheckClick = (rowData, checked) => {
        if (this.props.onRowCheckClick) {
            return this.props.onRowCheckClick(rowData, checked);
        }
    }

    getRowClassName = ({ index }) => {
        const checked = this.props.selectable && this.props.isSelected(index);

        return classnames({
            'ReactVirtualized__Table__row__selected': checked,
            'ReactVirtualized__Table__row__striped': ! (index % 2)
        });
    }

    renderCheckColumn = (data) => {
        const { rowData, rowIndex } = data;

        const checked = this.props.isSelected(rowIndex);

        return <Checkbox checked={checked} onChange={this.handleRowCheckClick.bind(this, rowData)}/>;
    }

    renderCheckHeader = () => {
        const { rowCount, selectedRowsCount } = this.props;

        return <Checkbox checked={(rowCount > 0) && rowCount === selectedRowsCount} onChange={this.handleHeaderCheckClick}/>;
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
    isSelected: PropTypes.func,
    noRowsRenderer: PropTypes.func,
    noRowsText: PropTypes.string,
    onHeaderCheckClick: PropTypes.func,
    onRowCheckClick: PropTypes.func,
    onSort: PropTypes.func,
    rowCount: PropTypes.number.isRequired,
    rowGetter: PropTypes.func.isRequired,
    rowHeight: React.PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    selectable: PropTypes.bool,
    selectedRowsCount: PropTypes.number,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
    width: PropTypes.number
};

Table.defaultProps = {
    bordered: false,
    headerHeight: 40,
    noRowsRenderer: () => <div className="alert alert-warning text-center">{getTranslation(this, 'noRowsText', 'No item to show')}</div>,
    rowHeight: 40,
    selectable: false
};

Table.contextTypes = {
    vivi: PropTypes.object
};