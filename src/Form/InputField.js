import React, { PropTypes } from 'react';
import classnames from 'classnames';

function renderInput(props) {
    return <input
        type="text"
        className="form-control"
        {...props.input}
        placeholder={props.placeholder}
    />;
}

const InputField = (props) => {
    if (props.onlyInput) {
        return renderInput(props);
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { 'col-sm-2': props.horizontal});
    const inputWrapperClass = classnames({ 'col-sm-10': props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.name}</label>
            <div className={inputWrapperClass}>
                {renderInput(props)}
                {props.meta.touched && props.meta.error &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
};

InputField.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    meta: PropTypes.object,
    name: PropTypes.string.isRequired,
    onlyInput: PropTypes.bool,
    placeholder: PropTypes.string
};

InputField.defaultProps = {
    horizontal: true,
    onlyInput: false
};

export default InputField;