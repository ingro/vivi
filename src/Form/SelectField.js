import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Select from '../Select';

function renderSelect(props) {
    // onBlur necessario altrimenti si resetta il valore del select al blur...
    return <Select
        className="form-control"
        placeholder={props.placeholder}
        options={props.options}
        {...props.input}
        {...props.selectOptions}
        onBlur={() => props.input.onBlur()}
    />;
}

const SelectField = (props) => {
    if (props.onlyInput) {
        return renderSelect(props);
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { 'col-sm-2': props.horizontal});
    const inputWrapperClass = classnames({ 'col-sm-10': props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.name}</label>
            <div className={inputWrapperClass}>
                {renderSelect(props)}
                {props.meta.touched && props.meta.error &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
};

SelectField.propTypes = {
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
    placeholder: PropTypes.string,
    selectOptions: PropTypes.object
};

SelectField.defaultProps = {
    horizontal: true,
    onlyInput: false,
    selectOptions: {}
};

export default SelectField;