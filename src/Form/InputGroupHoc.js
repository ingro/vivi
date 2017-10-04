import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tooltip from '../Tooltip';

const InputGroup = (props) => {
    const inputProps = {...props, InputComponent: null };

    const { InputComponent, inputHorizontalSizeClass, labelHorizontalSizeClass } = props;

    if (props.onlyInput) {
        return <InputComponent {...inputProps} />;
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { [labelHorizontalSizeClass]: props.horizontal, 'col-sm-12': !props.horizontal, 'text-left': !props.horizontal });
    const inputWrapperClass = classnames({ [inputHorizontalSizeClass]: props.horizontal, 'col-sm-12': !props.horizontal });

    if (props.inline) {
        return (
            <div className={groupClass}>
                <Tooltip
                    content={props.meta.error || ''}
                    position={props.errorTooltipPosition}
                    visible={Boolean((props.meta.touched && props.meta.error))}
                    overlayClassName="rc-tooltip-error"
                >
                    <InputComponent {...inputProps} />
                </Tooltip>
            </div>
        );
    }

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
    errorTooltipPosition: PropTypes.string,
    horizontal: PropTypes.bool,
    inline: PropTypes.bool,
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
    errorTooltipPosition: 'right',
    horizontal: true,
    inline: false,
    inputHorizontalSizeClass: 'col-sm-10',
    labelHorizontalSizeClass: 'col-sm-2',
    onlyInput: false
};

export default InputGroupHoc;