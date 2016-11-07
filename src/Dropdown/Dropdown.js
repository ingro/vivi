import React, { Component, PropTypes} from 'react';
// import ReactDOM from 'react-dom';
// import Portal from 'react-portal';
import classnames from 'classnames';

import TetherContent from './TetherContent';

const defaultTetherConfig = {
    classPrefix: 'bs-tether',
    classes: { element: 'dropdown', enabled: 'open' },
    constraints: [
        { to: 'scrollParent', attachment: 'together none' },
        { to: 'window', attachment: 'together none' }
    ]
};

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this._isMounted = false;

        this.state = {
            isOpened: false,
            top: 0,
            left: 0
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isOpened && this.list) {
            const menu = this.list.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect();

            // I'm using this.state.left instead of menu.left because the position of the menu takes more time to change and so it would trigger
            // another change before it stabilize
            if (bodyRect.width < (this.state.left + menu.width)) {
                this.setState({
                    left: this.state.left - (menu.width - 160)
                });
            }
        }

        if(this.state.isOpened === prevState.isOpened) {
            return;
        }

        if (this.state.isOpened && ! prevState.isOpened) {
            if (this.list && this.props.closeOnClick) {
                this.list.addEventListener('click', this.onClose);
            }
        } else if (! this.state.isOpened && prevState.isOpened) {
            if (this.list && this.props.closeOnClick) {
                this.list.removeEventListener('click', this.onClose);
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    close = () => {
        this.setState({
            isOpened: false
        });
    }

    onClick = () => {
        if (this.state.isOpened) {
            this.setState({
                isOpened: false
            });

            return;
        }

        const bodyRect = document.body.getBoundingClientRect();
        const targetRect = this.el.getBoundingClientRect();

        const projectedLeft = targetRect.left - bodyRect.left;

        // console.warn('body left', bodyRect.left);
        // console.warn('target left', targetRect.left);
        // console.warn('final left', projectedLeft);

        // if ((projectedLeft + 160) >= bodyRect.right) {
        //     console.warn('OUT OF BOUNDS');
        // }

        this.setState({
            isOpened: true,
            top: targetRect.bottom - bodyRect.top,
            left: (projectedLeft + 160) >= bodyRect.right ? (targetRect.right - 160) : projectedLeft
        });
    }

    onClose = () => {
        setImmediate(() => {
            if (this._isMounted) {
                this.setState({ isOpened: false });
            }
        });
    }

    getPortalStyle() {
        const { top, left } = this.state;

        return {
            position: 'absolute',
            top,
            left
        };
    }

    getTetherTarget() {
        return this.el;
        // const container = ReactDOM.findDOMNode(this);

        // return container.querySelector('.Dropdown__dropdown-menu');
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

    toggle = (e) => {
        this.setState({
            isOpened: ! this.state.isOpened
        });
        // if (this.props.disabled) {
        //     return e && e.preventDefault();
        // }

        // return this.props.toggle();
    }

    renderNavbarDropdown() {
        const elClass = classnames('dropdown', { active: this.state.isOpened })

        return (
            <li
                className={elClass}
                onClick={this.onClick}
                ref={ref => this.el = ref}
            >
                <a className="dropdown-toggle">
                    {this.props.text} <span className="caret" />
                </a>
                {this.renderPortal()}
            </li>
        );
    }

    renderButtonDropdown() {
        const elClass = classnames('btn', 'dropdown-toggle', this.props.btnClassName);

        return (
            <span>
                <button
                    className={elClass}
                    onClick={this.onClick}
                    ref={ref => this.el = ref}
                >
                    {this.props.text} <span className="caret" />
                </button>
                {this.renderPortal()}
            </span>
        );
    }

    renderPortal() {
        console.warn(this.getTetherConfig());
        // console.warn(this.getTetherTarget());
        return (
            <TetherContent
                tether={this.getTetherConfig()}
                toggle={this.toggle}
                isOpen={this.state.isOpened}
            >
                <ul className="dropdown-menu Dropdown__dropdown-menu">
                    {this.props.children}
                </ul>
            </TetherContent>
        )
    }

    // renderPortal() {
    //     return (
    //         <Portal
    //             closeOnOutsideClick={true}
    //             isOpened={this.state.isOpened}
    //             onClose={this.onClose}
    //         >
    //             <ul className="dropdown-menu Dropdown__dropdown-menu" style={this.getPortalStyle()} ref={ref => this.list = ref}>
    //                 {this.props.children}
    //             </ul>
    //         </Portal>
    //     )
    // }

    render() {
        return this.props.type === 'navbar' ? this.renderNavbarDropdown() : this.renderButtonDropdown();
    }
}

Dropdown.propTypes = {
    btnClassName: PropTypes.string,
    children: PropTypes.any.isRequired,
    closeOnClick: PropTypes.bool,
    dropup: PropTypes.bool,
    right: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['navbar', 'button']).isRequired
};

Dropdown.defaultProps = {
    btnClassName: 'btn-default',
    closeOnClick: true,
    dropup: false,
    right: false
};