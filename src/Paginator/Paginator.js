import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';
import uncontrollable from 'uncontrollable';

import Select from '../Select';
import TranslatorHoc from '../TranslatorHoc';

const localeDefault = {
    // Options.jsx
    items_per_page: 'items per page',
    jump_to: 'Go to',
    page: 'Page',

    // Pager.jsx
    first_page: 'First page',
    last_page: 'Last page',

    // Pagination.jsx
    prev_page: 'Previous page',
    next_page: 'Next page',
    prev_5: '5 pages ahead',
    next_5: '5 pages behind'
};

class Paginator extends Component {

    onSizeChange = (option) => {
        this.props.onSizeChange(option.value);
    }

    getSizer() {
        const { pageSize, sizeChangerOptions, sizeOptions } = this.props;

        return (
            <div>
                <Select
                    value={pageSize}
                    options={sizeOptions.map(size => ({ value: size, label: size }))}
                    onChange={this.onSizeChange}
                    valueKey="value"
                    labelKey="label"
                    clearable={false}
                    {...sizeChangerOptions}
                />
            </div>
        );
    }

    getStatusText() {
        const { current, pageSize, total, displaying } = this.props;

        const start = ((current - 1) * pageSize) + 1;
        const pageEnd = current * pageSize;

        const end = (displaying && displaying < pageEnd) ? displaying : pageEnd;

        return `${start}-${total < end ? total : end} di ${total}`;
    }

    render() {
        const { current, locale, onChange, pageSize, showSizeChanger, showStatusText, total } = this.props;

        return (
            <div>
                {total > pageSize &&
                    <Pagination
                        current={current}
                        className="pagination"
                        locale={locale}
                        total={total}
                        pageSize={pageSize}
                        onChange={onChange}
                    />
                }
                {' '}
                <div className="paginator-info pull-right" style={{ margin: '20px 20px 0' }}>
                    {(showSizeChanger && total > 0) && this.getSizer()}
                    {(showStatusText && total > 0) && this.getStatusText()}
                </div>
            </div>
        );
    }
}

Paginator.propTypes = {
    current: PropTypes.number.isRequired,
    displaying: PropTypes.number,
    locale: PropTypes.object,
    onChange: PropTypes.func,
    onSizeChange: PropTypes.func,
    pageSize: PropTypes.number.isRequired,
    showSizeChanger: PropTypes.bool,
    showStatusText: PropTypes.bool,
    sizeChangerOptions: PropTypes.object,
    sizeOptions: PropTypes.array,
    total: PropTypes.number.isRequired
};

Paginator.defaultProps = {
    locale: localeDefault,
    showSizeChanger: false,
    showStatusText: false,
    sizeChangerOptions: {}
};

const UncontrollablePaginator = uncontrollable(Paginator, {
    current: 'onChange'
});

export default TranslatorHoc(UncontrollablePaginator, {
    locale: 'Paginator.locale'
});