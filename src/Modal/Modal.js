import React, { Component, PropTypes } from 'react';
import RcModal from 'react-modal';

export default class Modal extends Component {

    render() {
        const { children, isOpen, modalClass, onClose, staticModal } = this.props;

        return (
            <RcModal
                className={modalClass}
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
    isOpen: PropTypes.bool,
    modalClass: PropTypes.string,
    onClose: PropTypes.func,
    staticModal: PropTypes.bool
};

Modal.defaultProps = {
    isOpen: false,
    onClose: () => {},
    staticModal: false
};
