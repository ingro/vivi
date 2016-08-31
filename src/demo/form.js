import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import Input from '../Form/Input';

const validate = values => {
    const errors = {};

    if (! values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 3) {
        errors.name = 'Must be 3 characters or more'
    }

    return errors;
}

export class Form extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className="form-horizontal">
                <div>Here is a normal input</div>
                <Field name="name" component={Input} placeholder="name" label="Nome" horizontal={true} />
                <div>Here is a select</div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'example',
    validate
})(Form);