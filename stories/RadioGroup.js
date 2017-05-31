import React from 'react';
import { storiesOf, action } from '@storybook/react';

import RadioGroup from '../src/RadioGroup';

const colors = [
    {
        value: 'yellow',
        label: 'Giallo'
    }, {
        value: 'blu',
        label: 'Blu'
    }, {
        value: 'red',
        label: 'Rosso'
    },  {
        value: 'purple',
        label: 'Viola',
        disabled: true
    }
];

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'blu'
        };
    }

    handleChange(value) {
        action('change')(value);

        this.setState({
            color: value
        });
    }

    render() {
        return <RadioGroup
            name="color"
            value={this.state.color}
            onChange={this.handleChange.bind(this)}
            options={colors.slice(0, 3)}
        />
    }
}

storiesOf('RadioGroup', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper />
    )
    .add('Uncontrolled', () =>
        <RadioGroup
            name="color"
            defaultChecked="red"
            options={colors.slice(0, 3)}
            onChange={action('Change')}
        />
    )
    .add('All disabled', () =>
        <RadioGroup
            name="color"
            defaultChecked="red"
            options={colors.slice(0, 3)}
            onChange={action('Change')}
            disabled={true}
        />
    )
    .add('Partly disabled', () =>
        <RadioGroup
            name="color"
            defaultChecked="red"
            options={colors}
            onChange={action('Change')}
        />
    );