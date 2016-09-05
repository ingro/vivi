import React, { PropTypes } from 'react';
import classnames from 'classnames';

const InputGroup = (props) => {
    const inputProps = {...props, InputComponent: null };

    if (props.onlyInput) {
        // TODO: passare tutte le props eccetto InputComponent
        return React.createElement(props.InputComponent, inputProps);
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { 'col-sm-2': props.horizontal});
    const inputWrapperClass = classnames({ 'col-sm-10': props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.name}</label>
            <div className={inputWrapperClass}>
                {React.createElement(props.InputComponent, inputProps)}
                {props.meta.touched && props.meta.error &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
}

const InputGroupHoc = (InputComponent) => {
    return function InputGroupWrapper(props) {
        return React.createElement(InputGroup, {...props, InputComponent});
    }
}

InputGroup.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    InputComponent: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    meta: PropTypes.object,
    name: PropTypes.string.isRequired,
    onlyInput: PropTypes.bool,
    placeholder: PropTypes.string
};

InputGroup.defaultProps = {
    horizontal: true,
    onlyInput: false
};

export default InputGroupHoc;