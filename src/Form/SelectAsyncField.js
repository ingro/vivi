import React, { PropTypes } from 'react';
import classnames from 'classnames';

import SelectAsync from '../SelectAsync';

function renderSelect(props) {
    // onBlur necessario altrimenti si resetta il valore del select al blur...
    return <SelectAsync
        className="form-control"
        placeholder={props.placeholder}
        loadOptions={props.loadOptions}
        {...props.input}
        {...props.selectOptions}
        onBlur={() => props.input.onBlur()}
    />;
}

const SelectAsyncField = (props) => {
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

SelectAsyncField.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    loadOptions: PropTypes.func.isRequired,
    meta: PropTypes.object,
    name: PropTypes.string.isRequired,
    onlyInput: PropTypes.bool,
    placeholder: PropTypes.string,
    selectOptions: PropTypes.object
};

SelectAsyncField.defaultProps = {
    horizontal: true,
    onlyInput: false,
    selectOptions: {}
};

export default SelectAsyncField;