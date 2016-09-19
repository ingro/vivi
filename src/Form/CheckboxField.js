import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';
import Checkbox from '../Checkbox';
import Switch from '../Switch';

function CheckboxComponent(props) {
    if (props.controlType === 'checkbox') {
        return <Checkbox
            {...props.input}
        />;
    }

    return <Switch
            {...props.input}
        />;
}

CheckboxComponent.propTypes = {
    input: PropTypes.object.isRequired,
    controlType: PropTypes.oneOf(['checkbox', 'switch'])
};

CheckboxComponent.defaultProps = {
    controlType: 'checkbox'
};

export default InputGroupHoc(CheckboxComponent);