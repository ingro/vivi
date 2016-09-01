import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';
import Checkbox from '../Checkbox';
import Switch from '../Switch';

function CheckboxComponent(props) {
    if (props.type === 'checkbox') {
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
    type: PropTypes.oneOf(['checkbox', 'switch'])
};

CheckboxComponent.defaultProps = {
    type: 'checkbox'
};

export default InputGroupHoc(CheckboxComponent);