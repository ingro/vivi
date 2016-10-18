import React, { Component, PropTypes } from 'react';
import RcModal from 'react-modal';

export default class Modal extends Component {

    render() {
        const { children, isOpen, className, onClose, staticModal, style } = this.props;

        return (
            <RcModal
                className={className}
                style={style}
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
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    staticModal: PropTypes.bool,
    style: PropTypes.object
};

Modal.defaultProps = {
    isOpen: false,
    onClose: () => {},
    staticModal: false,
    style: {}
};
