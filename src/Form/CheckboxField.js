import React from 'react';
import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';
import Checkbox from '../Checkbox';
import Switch from '../Switch';

function CheckboxComponent(props) {
    if (props.controlType === 'checkbox') {
        return <Checkbox
            {...props.input}
            disabled={props.disabled}
        />;
    }

    return <Switch
            {...props.input}
            disabled={props.disabled}
        />;
}

CheckboxComponent.propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    controlType: PropTypes.oneOf(['checkbox', 'switch'])
};

CheckboxComponent.defaultProps = {
    controlType: 'checkbox'
};

export default InputGroupHoc(CheckboxComponent);