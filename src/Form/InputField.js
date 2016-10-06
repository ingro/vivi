import React, { PropTypes } from 'react';

import InputGroupHoc from './InputGroupHoc';

function InputComponent(props) {
    return <input
        type={props.type}
        className="form-control"
        {...props.input}
        placeholder={props.placeholder}
    />;
}

InputComponent.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

InputComponent.defaultProps = {
    type: 'text'
};

export default InputGroupHoc(InputComponent);