import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ClearableInput from '../src/ClearableInput';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange(value) {
        action('Change')(value);

        this.setState({
            value
        });
    }

    render() {
        return <ClearableInput value={this.state.value} onChange={this.handleChange.bind(this)} />
    }
}

storiesOf('ClearableInput', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper />
    )
    .add('Uncontrolled', () =>
        <ClearableInput
            autofocus={true}
            onChange={action('Change')}
            name="title"
            placeholder="Insert a title"
        />
    )
    .add('Disabled', () =>
        <ClearableInput
            disabled={true}
            onChange={action('Change')}
        />
    )
    .add('With custom trigger\'s color', () =>
        <ClearableInput
            clearButtonColor="lightblue"
            onChange={action('Change')}
        />
    );