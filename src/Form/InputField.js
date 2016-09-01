import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';

function InputComponent(props) {
    return <input
        type="text"
        className="form-control"
        {...props.input}
        placeholder={props.placeholder}
    />;
}

InputComponent.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string
};

export default InputGroupHoc(InputComponent);