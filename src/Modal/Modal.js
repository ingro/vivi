import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RcModal from 'react-modal';

export default class Modal extends Component {

    render() {
        const { children, contentLabel, isOpen, className, onClose, staticModal, style } = this.props;

        return (
            <RcModal
                className={className}
                style={style}
                contentLabel={contentLabel}
                isOpen={isOpen}
                closeTimeoutMS={150}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick={! staticModal}
            >
                {children}
            </RcModal>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    contentLabel: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    staticModal: PropTypes.bool,
    style: PropTypes.object
};

Modal.defaultProps = {
    contentLabel: 'Modal',
    isOpen: false,
    onClose: () => {},
    staticModal: false,
    style: {}
};
