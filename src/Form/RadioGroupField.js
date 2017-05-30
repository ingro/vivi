import React from 'react';
import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';
import RadioGroup from '../RadioGroup';

function RadioGroupComponent(props) {
    return <RadioGroup
        options={props.options}
        {...props.input}
        disabled={props.disabled}
    />;
}

RadioGroupComponent.propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
};

export default InputGroupHoc(RadioGroupComponent);