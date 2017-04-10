import React from 'react';

import PropTypes from 'prop-types';

import InputGroupHoc from './InputGroupHoc';

function TextareaComponent(props) {
    return <textarea
        className="form-control"
        {...props.input}
        placeholder={props.placeholder}
    />;
}

TextareaComponent.propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string
};

export default InputGroupHoc(TextareaComponent);