import React from 'react';
import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';
import SelectAsync from '../SelectAsync';

function SelectAsyncComponent(props) {
    // onBlur necessario altrimenti si resetta il valore del select al blur...
    return <SelectAsync
        placeholder={props.placeholder}
        loadOptions={props.loadOptions}
        {...props.input}
        {...props.selectOptions}
        disabled={props.disabled}
        onBlur={() => props.input.onBlur()}
    />;
}

SelectAsyncComponent.propTypes = {
    disabled: PropTypes.bool,
    loadOptions: PropTypes.func.isRequired,
    initialLabel: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    selectOptions: PropTypes.object
};

SelectAsyncComponent.defaultProps = {
    initialLabel: null,
    selectOptions: {}
};

export default InputGroupHoc(SelectAsyncComponent);