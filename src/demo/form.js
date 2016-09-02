import React, { Component } from 'react';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import JsonPretty from 'react-json-pretty';

import CheckboxField from '../Form/CheckboxField';
import InputField from '../Form/InputField';
import RadioGroupField from '../Form/RadioGroupField';
import SelectField from '../Form/SelectField';
import SelectAsyncField from '../Form/SelectAsyncField';
import TextareaField from '../Form/TextareaField';

import { dogs, colors, loadPosts } from './fixtures';

const validate = values => {
    const errors = {};

    if (! values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 3) {
        errors.name = 'Must be 3 characters or more'
    }

    if (! values.fav_dog || values.fav_dog.length === 0) {
        errors.fav_dog = 'Required';
    }

    if (! values.fav_post || values.fav_post.length === 0) {
        errors.fav_post = 'Required';
    }

    // console.log(values);

    return errors;
}

class Values extends Component {
    render() {
        return <JsonPretty id="form" json={this.props.values || {}} />
    }
}

const ConnectedValues = connect(state => ({ values: getFormValues('example')(state) }))(Values);

export class Form extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <div className="col-xs-6">
                    <form onSubmit={handleSubmit} className="form-horizontal">
                <div>Here is a normal input</div>
                <Field
                    name="name"
                    placeholder="Name"
                    label="Nome"
                    component={InputField}
                />
                <div>Here is a select</div>
                <Field
                    name="fav_dog"
                    placeholder="Seleziona uno o più cani"
                    label="Favorite dog"
                    component={SelectField}
                    options={dogs}
                    selectOptions={{
                        multi: true
                    }}
                />
                <div>Here is a select async</div>
                <Field
                    name="fav_post"
                    placeholder="Seleziona un post"
                    label="Favorite post"
                    component={SelectAsyncField}
                    loadOptions={loadPosts}
                    selectOptions={{
                        labelKey: "title"
                    }}
                />
                <div>Here is a checkbox</div>
                <Field
                    name="like"
                    label="I like chocolate"
                    component={CheckboxField}
                    type="switch"
                />
                <div>Here is a radio group</div>
                <Field
                    name="fav_color"
                    label="Favorite color"
                    component={RadioGroupField}
                    options={colors}
                />
                <div>Here is a textarea</div>
                <Field
                    name="message"
                    placeholder="Lascia un messaggio..."
                    label="Message"
                    component={TextareaField}
                />
            </form>
                </div>
                <div className="col-xs-6">
                    <ConnectedValues />
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'example',
    validate
})(Form);