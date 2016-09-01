import React, { Component, PropTypes } from 'react';

export default class RadioGroup extends Component {

    handleClick = (event) => {
        event.stopPropagation();
        this.props.onChange(event.target.value)
    }

    render() {
        const { defaultValue, disabled, name, options, value } = this.props;

        return (
            <div>
                {options.map((option, i) => {
                    const controlled = value ? { checked: option.value === value } : { defaultChecked: option.value === defaultValue };

                    return (
                        <label key={i} className="control control--radio">{option.label}
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                onChange={() => {}}
                                onClick={this.handleClick}
                                disabled={disabled ? disabled : option.disabled}
                                {...controlled}
                            />
                            <div className="control__indicator" />
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
