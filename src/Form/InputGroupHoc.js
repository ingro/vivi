import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = (props) => {
    const inputProps = {...props, InputComponent: null };

    const { InputComponent, inputHorizontalSizeClass, labelHorizontalSizeClass } = props;

    if (props.onlyInput) {
        return <InputComponent {...inputProps} />;
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { [labelHorizontalSizeClass]: props.horizontal, 'col-sm-12': !props.horizontal, 'text-left': !props.horizontal });
    const inputWrapperClass = classnames({ [inputHorizontalSizeClass]: props.horizontal, 'col-sm-12': !props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.input.name}</label>
            <div className={inputWrapperClass}>
                <InputComponent {...inputProps} />
                {(props.meta.touched && props.meta.error) &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
}

const InputGroupHoc = (InputComponent) => {
    return function InputGroupWrapper(props) {
        return <InputGroup {...props} InputComponent={InputComponent} />;
    }
}

InputGroup.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    inputHorizontalSizeClass: PropTypes.string,
    InputComponent: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    labelHorizontalSizeClass: PropTypes.string,
    meta: PropTypes.object,
    onlyInput: PropTypes.bool,
    placeholder: PropTypes.string
};

InputGroup.defaultProps = {
    horizontal: true,
    inputHorizontalSizeClass: 'col-sm-10',
    labelHorizontalSizeClass: 'col-sm-2',
    onlyInput: false
};

export default InputGroupHoc;