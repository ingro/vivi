import React, { Component, PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';
import uncontrollable from 'uncontrollable/batching';

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.checkboxId = uniqueId('checkbox');
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
                    className="Checkbox__cmp-checkbox"
                    onChange={() => onChange(this.refs.checkbox.checked)}
                    checked={checked}
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
    checked: false,
    disabled: false,
    onChange: () => {},
    onClick: () => {}
};

export default uncontrollable(Checkbox, {
    checked: 'onChange'
});