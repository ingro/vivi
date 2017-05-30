import React from 'react';
import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';
import Select from '../Select';

function SelectComponent(props) {
    // onBlur necessario altrimenti si resetta il valore del select al blur...
    return <Select
        placeholder={props.placeholder}
        options={props.options}
        {...props.input}
        {...props.selectOptions}
        disabled={props.disabled}
        onBlur={() => props.input.onBlur()}
    />;
}

SelectComponent.propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    selectOptions: PropTypes.object
};

SelectComponent.defaultProps = {
    selectOptions: {}
};

export default InputGroupHoc(SelectComponent);