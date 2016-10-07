import React, { Component, PropTypes } from 'react';
import Pagination from 'rc-pagination';
import uncontrollable from 'uncontrollable/batching';

import Select from '../Select';

const locale = {
    // Options.jsx
    items_per_page: 'oggetti per pagina',
    jump_to: 'Vai a',
    page: 'Pagina',

    // Pager.jsx
    first_page: 'Prima pagina',
    last_page: 'Ultima pagina',

    // Pagination.jsx
    prev_page: 'Pagina precedente',
    next_page: 'Pagina successiva',
    prev_5: '5 Pagine avanti',
    next_5: '5 Pagine indietro'
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
        const { current, onChange, pageSize, showSizeChanger, showStatusText, total } = this.props;

        return (
            <div className="container-fluid">
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
                <div className="paginator-info pull-right" style={{ margin: 20 }}>
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
    showSizeChanger: false,
    showStatusText: false,
    sizeChangerOptions: {}
};

export default uncontrollable(Paginator, {
    current: 'onChange'
});