import React, { Component, PropTypes} from 'react';
import Portal from 'react-portal';
import classnames from 'classnames';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
            top: 0,
            left: 0
        };
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
        setImmediate(() => this.setState({ isOpened: false }));
    }

    getPortalStyle() {
        const { top, left } = this.state;

        return {
            position: 'absolute',
            top,
            left
        };
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
        return (
            <Portal 
                closeOnOutsideClick={true} 
                isOpened={this.state.isOpened}
                onClose={this.onClose}
            >
                <ul className="dropdown-menu Dropdown__dropdown-menu" style={this.getPortalStyle()}>
                    {this.props.children}
                </ul>
            </Portal>
        )
    }

    render() {
        return this.props.type === 'navbar' ? this.renderNavbarDropdown() : this.renderButtonDropdown();
    }
}

Dropdown.propTypes = {
    btnClassName: PropTypes.string,
    children: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['navbar', 'button']).isRequired
};

Dropdown.defaultProps = {
    btnClassName: 'btn-default'
};