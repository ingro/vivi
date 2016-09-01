import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';
import RadioGroup from '../RadioGroup';

function RadioGroupComponent(props) {
    return <RadioGroup
        options={props.options}
        {...props.input}
    />;
}

RadioGroupComponent.propTypes = {
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
};

export default InputGroupHoc(RadioGroupComponent);