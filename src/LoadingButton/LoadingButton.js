import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import TranslatorHoc from '../TranslatorHoc';

export class LoadingButton extends Component {

    render() {
        const { children, className, disabled, loading, loadingMsg, loadingIndicator, onClick } = this.props;

        const btnClass = classnames('btn', className.split(' '));

        return (
            <button
                className={btnClass}
                disabled={disabled || loading}
                onClick={onClick}
            >
                {!loading && children}
                {loading && <span>{loadingIndicator}{' '}{loadingMsg}</span>}
            </button>
        );
    }
}

LoadingButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    loadingIndicator: PropTypes.any,
    loadingMsg: PropTypes.any,
    onClick: PropTypes.func
};

LoadingButton.defaultProps = {
    className: 'btn-default',
    disabled: false,
    loading: false,
    loadingIndicator: <i className="fa fa-spin fa-spinner" />,
    loadingMsg: 'Loading...',
    onClick: () => {}
};

export default TranslatorHoc(LoadingButton, {
    loadingMsg: 'LoadingButton.loadingMsg'
});