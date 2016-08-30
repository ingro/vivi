import React, { Component, PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';

export default class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('checkbox');
    }

    render() {
        const { checked, defaultChecked, disabled, onChange, onClick } = this.props;

        const controlled = typeof checked === 'boolean' ? { checked } : { defaultChecked };

        return (
            <span>
                <input
                    disabled={disabled}
                    ref="checkbox"
                    onClick={onClick}
                    id={this.checkboxId}
                    type="checkbox"
                    className="Checkbox__cmp-checkbox"
                    onChange={() => onChange(this.refs.checkbox.checked)}
                    {...controlled}
                />
                <label
                    htmlFor={this.checkboxId}
                    className="Checkbox__cmp-btn"
                />
            </span>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Checkbox.defaultProps = {
    defaultChecked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};
