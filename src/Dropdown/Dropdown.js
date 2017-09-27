// See https://github.com/reactstrap/reactstrap/blob/v5/src/Dropdown.js per ispirazione
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Target, Popper } from 'react-popper'
import classnames from 'classnames';
import uncontrollable from 'uncontrollable';

const keyCodes = {
    esc:   27,
    space: 32,
    tab:   9,
    up:    38,
    down:  40,
};

// import TetherContent from './TetherContent';

// const defaultTetherConfig = {
//     classPrefix: 'bs-tether',
//     classes: { element: 'dropdown', enabled: 'open' },
//     constraints: [
//         // { to: 'scrollParent', attachment: 'together' },
//         // { to: 'window', attachment: 'together' }
//     ]
// };

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen
        };
    }

    componentDidMount() {
        this.handleProps();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            this.handleProps();
        }
    }

    componentWillUnmount() {
        this.removeEvents();
    }

    handleProps() {
        if (this.props.isOpen) {
          this.addEvents();
        } else {
          this.removeEvents();
        }
    }

    // close = () => {
    //     this.isOpen = false;
    //     this.props.toggle(false);
    // }

    // open = () => {
    //     this.isOpen = true;
    //     this.props.toggle(true);
    // }

    addEvents() {
        ['click', 'touchstart', 'keyup'].forEach(event =>
            document.addEventListener(event, this.handleDocumentClick, true)
        );
    }

    removeEvents() {
        ['click', 'touchstart', 'keyup'].forEach(event =>
            document.removeEventListener(event, this.handleDocumentClick, true)
        );
    }

    getContainer() {
        return ReactDOM.findDOMNode(this);
    }

    handleDocumentClick = (e) => {
        if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
        const container = this.getContainer();

        if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
            return;
        }

        this.toggle(e);
    }

    toggle = () => {
        // To allow onClick handlers on li > a to trigger
        setImmediate(() => {
            this.setState({
                isOpen: !this.state.isOpen
            }, () => {
                this.props.toggle(this.state.isOpen);
            });
            // this.isOpen = ! this.isOpen;
            // this.props.toggle(this.isOpen);
        });
    }

    // attachRef = (ref) => {
    //     this.el = ref;
    // }

    // getTetherTarget() {
    //     return this.el;
    // }

    // getTetherConfig() {
    //     const target = () => this.getTetherTarget();
    //     let vElementAttach = 'top';
    //     let hElementAttach = 'left';
    //     let vTargetAttach = 'bottom';
    //     let hTargetAttach = 'left';

    //     if (this.props.right) {
    //         hElementAttach = 'right';
    //         hTargetAttach = 'right';
    //     }

    //     if (this.props.dropup) {
    //         vElementAttach = 'bottom';
    //         vTargetAttach = 'top';
    //     }

    //     return {
    //         ...defaultTetherConfig,
    //         attachment: vElementAttach + ' ' + hElementAttach,
    //         targetAttachment: vTargetAttach + ' ' + hTargetAttach,
    //         target
    //     };
    // }

    getPopperPlacement = () => {
        const vertical = this.props.dropup ? 'top' : 'bottom';
        const horizontal = this.props.right ? 'end' : 'start';

        return `${vertical}-${horizontal}`;
    }

    renderNavbarDropdown() {
        const elClass = classnames('dropdown', { active: this.state.isOpen });

        const placement = this.getPopperPlacement();

        return (
            <Manager>
                <Target>
                    {({ targetProps }) => {
                        return (
                            <li
                                className={elClass}
                                {...targetProps}
                                onClick={this.toggle}
                                aria-expanded={this.state.isOpen}
                                // ref={this.attachRef}
                            >
                                <a className="dropdown-toggle">
                                    {this.props.text} <span className="caret" />
                                </a>
                            </li>
                        );
                    }}
                </Target>
                {this.state.isOpen &&
                    <Popper placement={placement}>
                        {({ popperProps }) => {
                            return (
                                <ul onClick={this.toggle} className="dropdown-menu Dropdown__dropdown-menu" {...popperProps}>
                                    {this.props.children}
                                </ul>
                            );
                        }}
                    </Popper>
                }
            </Manager>
        );
    }

    renderButtonDropdown() {
        const elClass = classnames('btn', 'dropdown-toggle', this.props.btnClassName);

        const placement = this.getPopperPlacement();

        return (
            <Manager>
                <Target>
                    {({ targetProps }) => {
                        return (
                            <button
                                className={elClass}
                                {...targetProps}
                                onClick={this.toggle}
                                aria-expanded={this.state.isOpen}
                                // ref={this.attachRef}
                            >
                                {this.props.text} <span className="caret" />
                            </button>
                        );
                    }}
                </Target>
                {this.state.isOpen &&
                    <Popper placement={placement}>
                        {({ popperProps }) => {
                            return (
                                <ul onClick={this.toggle} className="dropdown-menu Dropdown__dropdown-menu" {...popperProps}>
                                    {this.props.children}
                                </ul>
                            );
                        }}
                    </Popper>
                }
            </Manager>
        );
    }

    // renderContent() {
    //     return (
    //         <ul className="dropdown-menu Dropdown__dropdown-menu">
    //             {this.props.children}
    //         </ul>
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