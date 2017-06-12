import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Switch from '../src/Switch';

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
        return <Switch checked={this.state.isChecked} onClick={this.handleClick.bind(this)} />
    }
}

storiesOf('Switch', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper />
    )
    .add('Uncontrolled', () =>
        <Switch
            defaultChecked={true}
            onChange={action('Change')}
        />
    )
    .add('Disabled', () =>
        <Switch
            defaultChecked={true}
            disabled={true}
            onChange={action('Change')}
        />
    );