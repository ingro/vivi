import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';

class ClearableInput extends Component {
    clearInput = () => {
        this.props.onChange('');
    }

    changeInput = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const { clearButtonColor, disabled, name, placeholder, value } = this.props;

        return (
            <div className="ClearableInput__wrapper">
                <input 
                    className="form-control" 
                    type="text"
                    disabled={disabled}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.changeInput}
                />
                <i 
                    onClick={this.clearInput} 
                    className="ClearableInput__trigger fa fa-times" 
                    style={{ color: clearButtonColor }}
                />
            </div>
        );
    }
}

ClearableInput.propTypes = {
    clearButtonColor: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

ClearableInput.defaultProps = {
    clearButtonColor: '#a94442',
    disabled: false,
    value: ''
};

export default uncontrollable(ClearableInput, {
    value: 'onChange'
});