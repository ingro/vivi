import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class LoadingButton extends Component {

    render() {
        const { className, disabled, loading, loadingMsg, onClick } = this.props;

        const btnClass = classnames('btn', className.split(' '));

        return (
            <button
                className={btnClass}
                disabled={disabled || loading}
                onClick={onClick}
            >
                {!loading && this.props.children}
                {loading && loadingMsg}
            </button>
        );
    }
}

LoadingButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    loadingMsg: PropTypes.any,
    onClick: PropTypes.func
};

LoadingButton.defaultProps = {
    className: 'btn-default',
    disabled: false,
    loading: false,
    loadingMsg: <span><i className="fa fa-spin fa-spinner" /> Loading...</span>,
    onClick: () => {}
};
