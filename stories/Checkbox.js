import React from 'react';
import { storiesOf, action } from '@storybook/react';

import Checkbox from '../src/Checkbox';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        };
    }

    handleClick() {
        action('Click')();

        this.setState({
            isChecked: ! this.state.isChecked
        });
    }

    render() {
        return <Checkbox checked={this.state.isChecked} onClick={this.handleClick.bind(this)} />
    }
}

storiesOf('Checkbox', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper />
    )
    .add('Uncontrolled', () =>
        <Checkbox
            defaultChecked={true}
            onChange={action('Change')}
        />
    )
    .add('Disabled', () =>
        <Checkbox
            defaultChecked={true}
            disabled={true}
            onChange={action('Change')}
        />
    );