// Inspired by https://github.com/reactstrap/reactstrap/blob/master/src/TetherContent.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tether from 'tether';
import isFunction from 'lodash/isFunction';

export default class TetherContent extends Component {
    componentDidMount() {
        this.handleProps();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            this.handleProps();
        } else if (this._element) {
            // rerender
            this.renderIntoSubtree();
        }
    }

    componentWillUnmount() {
        this.hide();
    }

    getTarget() {
        const target = this.props.tether.target;

        if (isFunction(target)) {
            return target();
        }

        return target;
    }

    getTetherConfig() {
        const config = {
            ...this.props.tether
        };

        config.element = this._element;
        config.target = this.getTarget();
        return config;
    }

    handleDocumentClick = (e) => {
        const container = this._element;

        const target = this.getTarget();

        const isClickOnTarget = (e.target === target || target.contains(e.target));
        const isClickonContainer = (e.target === container || container.contains(e.target));
        const isClickOutside = !container.contains(e.target);

        if ((isClickonContainer && this.props.closeOnClick) || (isClickOutside && ! isClickOnTarget)) {
            this.toggle(e);
        }
    }

    handleProps() {
        if (this.props.isOpen) {
            this.show();
        } else {
            this.hide();
        }
    }

    hide() {
        document.removeEventListener('click', this.handleDocumentClick, true);

        if (this._element) {
            document.body.removeChild(this._element);
            ReactDOM.unmountComponentAtNode(this._element);
            this._element = null;
        }

        if (this._tether) {
            this._tether.destroy();
            this._tether = null;
            this.props.tetherRef(this._tether);
        }
    }

    show() {
        document.addEventListener('click', this.handleDocumentClick, true);

        this._element = document.createElement('div');
        document.body.appendChild(this._element);
        this.renderIntoSubtree();

        if (this.props.arrow) {
            const arrow = document.createElement('div');
            arrow.className = `${this.props.arrow}-arrow`;
            this._element.appendChild(arrow);
        }

        this._tether = new Tether(this.getTetherConfig());
        this.props.tetherRef(this._tether);
        this._tether.position();
        // this._element.childNodes[0].focus();
    }

    toggle = (e) => {
        if (this.props.disabled) {
            return e && e.preventDefault();
        }

        return this.props.toggle();
    }

    renderIntoSubtree() {
        ReactDOM.createPortal(
            // this._element,
            this.renderChildren(),
            this._element
        );
    }

    renderChildren() {
        const { children } = this.props;

        return React.cloneElement(children);
    }

    render() {
        return null;
    }
}

TetherContent.propTypes = {
    arrow: PropTypes.string,
    children: PropTypes.node.isRequired,
    closeOnClick: PropTypes.bool,
    disabled: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    tether: PropTypes.object.isRequired,
    tetherRef: PropTypes.func,
    toggle: PropTypes.func.isRequired
};

TetherContent.defaultProps = {
    closeOnClick: true,
    isOpen: false,
    tetherRef: () => {}
};