import React, { PropTypes } from 'react';
import classnames from 'classnames';

import RadioGroup from '../RadioGroup';

function renderRadioGroup(props) {
    return <RadioGroup
        options={props.options}
        {...props.input}
    />;
}

const RadioGroupField = (props) => {
    if (props.onlyInput) {
        return renderRadioGroup(props);
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { 'col-sm-2': props.horizontal});
    const inputWrapperClass = classnames({ 'col-sm-10': props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.name}</label>
            <div className={inputWrapperClass}>
                {renderRadioGroup(props)}
                {props.meta.touched && props.meta.error &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
};

RadioGroupField.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    meta: PropTypes.object,
    name: PropTypes.string.isRequired,
    onlyInput: PropTypes.bool,
    options: PropTypes.array.isRequired,
};

RadioGroupField.defaultProps = {
    horizontal: true,
    onlyInput: false
};

export default RadioGroupField;