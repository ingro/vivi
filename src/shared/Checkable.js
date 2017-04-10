import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

class Checkable extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('checkbox');
    }

    render() {
        const { checked, disabled, inputClassName, labelClassName, onChange, onClick } = this.props;

        return (
            <span>
                <input
                    disabled={disabled}
                    ref={checkbox => this.checkbox = checkbox}
                    onClick={onClick}
                    id={this.checkboxId}
                    type="checkbox"
                    className={inputClassName}
                    onChange={() => onChange(this.checkbox.checked)}
                    checked={checked}
                />
                <label
                    htmlFor={this.checkboxId}
                    className={labelClassName}
                />
            </span>
        );
    }
}

Checkable.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    inputClassName: PropTypes.string.isRequired,
    labelClassName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

Checkable.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};

export default Checkable;