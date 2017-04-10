import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uncontrollable from 'uncontrollable';

import TetherContent from './TetherContent';

const defaultTetherConfig = {
    classPrefix: 'bs-tether',
    classes: { element: 'dropdown', enabled: 'open' },
    constraints: [
        // { to: 'scrollParent', attachment: 'together' },
        // { to: 'window', attachment: 'together' }
    ]
};

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.isOpen = props.isOpen;
    }

    close = () => {
        this.isOpen = false;
        this.props.toggle(false);
    }

    open = () => {
        this.isOpen = true;
        this.props.toggle(true);
    }

    toggle = () => {
        // To allow onClick handlers on li > a to trigger
        setImmediate(() => {
            this.isOpen = ! this.isOpen;
            this.props.toggle(this.isOpen);
        });
    }

    attachRef = (ref) => {
        this.el = ref;
    }

    getTetherTarget() {
        return this.el;
    }

    getTetherConfig() {
        const target = () => this.getTetherTarget();
        let vElementAttach = 'top';
        let hElementAttach = 'left';
        let vTargetAttach = 'bottom';
        let hTargetAttach = 'left';

        if (this.props.right) {
            hElementAttach = 'right';
            hTargetAttach = 'right';
        }

        if (this.props.dropup) {
            vElementAttach = 'bottom';
            vTargetAttach = 'top';
        }

        return {
            ...defaultTetherConfig,
            attachment: vElementAttach + ' ' + hElementAttach,
            targetAttachment: vTargetAttach + ' ' + hTargetAttach,
            target
        };
    }

    renderNavbarDropdown() {
        const elClass = classnames('dropdown', { active: this.props.isOpen });

        return (
            <li
                className={elClass}
                onClick={this.toggle}
                ref={this.attachRef}
            >
                <a className="dropdown-toggle">
                    {this.props.text} <span className="caret" />
                </a>
                {this.renderContent()}
            </li>
        );
    }

    renderButtonDropdown() {
        const elClass = classnames('btn', 'dropdown-toggle', this.props.btnClassName);

        return (
            <span>
                <button
                    className={elClass}
                    onClick={this.toggle}
                    ref={this.attachRef}
                >
                    {this.props.text} <span className="caret" />
                </button>
                {this.renderContent()}
            </span>
        );
    }

    renderContent() {
        return (
            <TetherContent
                tether={this.getTetherConfig()}
                toggle={this.toggle}
                isOpen={this.props.isOpen}
                closeOnClick={this.props.closeOnClick}
            >
                <ul className="dropdown-menu Dropdown__dropdown-menu">
                    {this.props.children}
                </ul>
            </TetherContent>
        )
    }

    render() {
        return this.props.type === 'navbar' ? this.renderNavbarDropdown() : this.renderButtonDropdown();
    }
}

Dropdown.propTypes = {
    btnClassName: PropTypes.string,
    children: PropTypes.any.isRequired,
    closeOnClick: PropTypes.bool,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    isOpen: PropTypes.bool,
    right: PropTypes.bool,
    text: PropTypes.string.isRequired,
    toggle: PropTypes.func,
    type: PropTypes.oneOf(['navbar', 'button']).isRequired
};

Dropdown.defaultProps = {
    btnClassName: 'btn-default',
    closeOnClick: true,
    dropup: false,
    isOpen: false,
    right: false
};

export default uncontrollable(Dropdown, {
    isOpen: 'toggle'
});