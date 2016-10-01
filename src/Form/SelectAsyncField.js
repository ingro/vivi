import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';
import SelectAsync from '../SelectAsync';

function SelectAsyncComponent(props) {
    // onBlur necessario altrimenti si resetta il valore del select al blur...
    
    const initialValue = props.initialLabel && props.meta.pristine && { id: props.input.value, name: props.initialLabel };

    return <SelectAsync
        className="form-control"
        placeholder={props.placeholder}
        loadOptions={props.loadOptions}
        {...props.input}
        {...props.selectOptions}
        value={initialValue ? initialValue : props.input.value}
        onBlur={() => props.input.onBlur()}
    />;
}

SelectAsyncComponent.propTypes = {
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