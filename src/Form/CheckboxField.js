import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Checkbox from '../Checkbox';
import Switch from '../Switch';

function renderCheckbox(props) {
    if (props.type === 'checkbox') {
        return <Checkbox
            {...props.input}
        />;
    }

    return <Switch
                {...props.input}
            />;
}

const CheckboxField = (props) => {
    if (props.onlyInput) {
        return renderCheckbox(props);
    }

    const groupClass = classnames('form-group', { 'has-error': props.meta.touched && props.meta.error });
    const labelClass = classnames('control-label', { 'col-sm-2': props.horizontal});
    const inputWrapperClass = classnames({ 'col-sm-10': props.horizontal });

    return (
        <div className={groupClass}>
            <label className={labelClass}>{props.label || props.name}</label>
            <div className={inputWrapperClass}>
                {renderCheckbox(props)}
                {props.meta.touched && props.meta.error &&
                    <span className="help-block">{props.meta.error}</span>
                }
            </div>
        </div>
    );
};

CheckboxField.propTypes = {
    horizontal: PropTypes.bool,
    input: PropTypes.object,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    meta: PropTypes.object,
    name: PropTypes.string.isRequired,
    onlyInput: PropTypes.bool,
    type: PropTypes.oneOf(['checkbox', 'switch'])
};

CheckboxField.defaultProps = {
    horizontal: true,
    onlyInput: false,
    type: 'checkbox'
};

export default CheckboxField;