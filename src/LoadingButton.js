import React, { Component, PropTypes } from 'react';

export default class LoadingButton extends Component {

    render() {
        const { bsClass, loading, loadingMsg, onClick } = this.props;

        return (
            <button className={`btn btn-${bsClass}`} disabled={loading} onClick={onClick}>
                {!loading && this.props.children}
                {loading && loadingMsg}
            </button>
        );
    }
}

LoadingButton.propTypes = {
    bsClass: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'default']),
    children: PropTypes.any,
    loading: PropTypes.bool,
    loadingMsg: PropTypes.any,
    onClick: PropTypes.func
};

LoadingButton.defaultProps = {
    bsClass: 'default',
    loading: false,
    loadingMsg: <span><i className="fa fa-spin fa-spinner" /> Loading...</span>,
    onClick: () => {}
};
