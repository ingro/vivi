import React from 'react';
import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';

function InputComponent(props) {
    return <input
        type={props.type}
        className="form-control"
        {...props.input}
        disabled={props.disabled}
        placeholder={props.placeholder}
    />;
}

InputComponent.propTypes = {
    disabled: PropTypes.bool,
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

InputComponent.defaultProps = {
    type: 'text'
};

export default InputGroupHoc(InputComponent);