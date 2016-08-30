import React, { Component, PropTypes } from 'react';

import Pagination from 'rc-pagination';

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

export default class Paginator extends Component {

    // constructor(props) {
    //     super(props);
    // }

    onSizeChange = (e) => {
        this.props.onSizeChange(e.target.value);
    }

    getSizer() {
        const { sizeOptions } = this.props;

        return (
            <div>
                <select
                    value={10}
                    onChange={this.onSizeChange}
                >
                    {sizeOptions.map((o, key) => <option key={key} value={o}>{o}</option>)}
                </select>
            </div>
        );
    }

    getStatusText() {
        const { current, pageSize, total } = this.props;

        const start = ((current - 1) * pageSize) + 1;
        const end = current * pageSize;

        return `${start}-${end} di ${total}`;
    }

    render() {
        const { current, onChange, pageSize, showSizeChanger, showStatusText, total } = this.props;

        const controller = typeof onChange !== 'undefined' ? {
            current,
            onChange
        } : {
            defaultCurrent: current
        };

        return (
            <div className="container-fluid">
                <Pagination
                    className="pagination"
                    locale={locale}
                    total={total}
                    pageSize={pageSize}
                    {...controller}
                />
                {' '}
                <div className="paginator-info pull-right" style={{ margin: 20 }}>
                    {showSizeChanger && this.getSizer()}
                    {showStatusText && this.getStatusText()}
                </div>
            </div>
        );
    }
}

Paginator.propTypes = {
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    onSizeChange: PropTypes.func,
    pageSize: PropTypes.number.isRequired,
    showSizeChanger: PropTypes.bool,
    showStatusText: PropTypes.bool,
    sizeOptions: PropTypes.array,
    total: PropTypes.number.isRequired
};

Paginator.defaultProps = {
    showSizeChanger: false,
    showStatusText: false
};
