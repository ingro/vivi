import React, { Component, PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';
import uncontrollable from 'uncontrollable/batching';

class Switch extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('switch');
    }

    render() {
        const { checked, disabled, onChange, onClick } = this.props;

        return (
            <span>
                <input
                    disabled={disabled}
                    ref="checkbox"
                    onClick={onClick}
                    id={this.checkboxId}
                    type="checkbox"
                    className="Switch__tgl Switch__tgl-switch"
                    onChange={() => onChange(this.refs.checkbox.checked)}
                    checked={checked}
                />
                <label
                    htmlFor={this.checkboxId}
                    className="Switch__tgl-btn"
                />
            </span>
        );
    }
}

Switch.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Switch.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};

export default uncontrollable(Switch, {
    checked: 'onChange'
});