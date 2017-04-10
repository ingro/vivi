import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uncontrollable from 'uncontrollable';

class RadioGroup extends Component {

    handleClick = (event) => {
        event.stopPropagation();
        this.props.onChange(event.target.value)
    }

    render() {
        const { disabled, name, options, value } = this.props;

        return (
            <div>
                {options.map((option, i) => {
                    return (
                        <label key={i} className="RadioGroup RadioGroup__radio">{option.label}
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                onChange={() => {}}
                                onClick={this.handleClick}
                                disabled={disabled ? disabled : option.disabled}
                                checked={option.value == value}
                            />
                            <div className="RadioGroup__indicator" />
                        </label>
                    );
                })}
            </div>
        );
    }
}

RadioGroup.propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    value: PropTypes.string
};

RadioGroup.defaultProps = {
    disabled: false,
    onChange: () => {},
    options: []
};

export default uncontrollable(RadioGroup, {
    value: 'onChange'
});
