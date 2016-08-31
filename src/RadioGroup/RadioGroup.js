import React, { Component, PropTypes } from 'react';

export default class RadioGroup extends Component {

    handleClick = (event) => {
        event.stopPropagation();
        this.props.onChange(event.target.value)
    }

    render() {
        const { name, options, value } = this.props;

        return (
            <div>
                {options.map((option, i) =>
                    <label key={i} className="control control--radio">{option.label}
                        <input type="radio" name={name} value={option.value} checked={option.value === value} onChange={() => {}} onClick={this.handleClick}/>
                        <div className="control__indicator" />
                    </label>
                )}
            </div>
        );
    }
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
};

RadioGroup.defaultProps = {
    options: []
};
