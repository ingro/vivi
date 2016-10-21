import React, { Component, PropTypes } from 'react';
import uncontrollable from 'uncontrollable/batching';

class ClearableInput extends Component {
    componentDidMount() {
        if (this.props.autofocus) {
            this.input.focus();
        }
    }

    clearInput = () => {
        this.props.onChange('');
    }

    changeInput = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const { clearButtonColor, autofocus, ...rest } = this.props;

        return (
            <div className="ClearableInput__wrapper">
                <input
                    ref={ref => this.input = ref}
                    {...rest}
                    onChange={this.changeInput}
                    
                />
                {this.props.value && this.props.value !== '' &&
                    <i 
                        onClick={this.clearInput} 
                        className="ClearableInput__trigger fa fa-times" 
                        style={{ color: clearButtonColor }}
                    />
                }
            </div>
        );
    }
}

ClearableInput.propTypes = {
    autofocus: PropTypes.bool,
    className: PropTypes.string,
    clearButtonColor: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

ClearableInput.defaultProps = {
    autofocus: false,
    className: 'form-control',
    clearButtonColor: '#a94442',
    disabled: false,
    type: 'text',
    value: ''
};

export default uncontrollable(ClearableInput, {
    value: 'onChange'
});