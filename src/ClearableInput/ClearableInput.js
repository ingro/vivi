import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uncontrollable from 'uncontrollable';

class ClearableInput extends Component {
    componentDidMount() {
        if (this.props.autofocus) {
            this.input.focus();
        }
    }

    clearInput = () => {
        this.props.onChange('');
        this.props.onClear();
    }

    changeInput = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const { clearButtonColor, autofocus, onClear, ...rest } = this.props;

        return (
            <div className="ClearableInput__wrapper">
                <input
                    ref={ref => this.input = ref}
                    {...rest}
                    onChange={this.changeInput}

                />
                {(this.props.value && this.props.value !== '') &&
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
    onClear: PropTypes.func,
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
    onClear: () => {},
    type: 'text',
    value: ''
};

export default uncontrollable(ClearableInput, {
    value: 'onChange'
});