import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Select from '../src/Select';

const list = [
    {
        id: 1,
        name: 'Braccobaldo'
    },
    {
        id: 2,
        name: 'Scooby Doo'
    },
    {
        id: 3,
        name: 'Pongo'
    },
    {
        id: 4,
        name: 'Bolt'
    },
    {
        id: 5,
        name: 'Peggy'
    },
    {
        id: 6,
        name: 'Rex'
    },
    {
        id: 7,
        name: 'Lassie'
    },
    {
        id: 8,
        name: 'Marley'
    },
    {
        id: 9,
        name: 'Snoopy'
    },
    {
        id: 10,
        name: 'Santa\'s Little helper'
    },
    {
        id: 11,
        name: 'Pluto'
    },
    {
        id: 12,
        name: 'Lilly'
    },
    {
        id: 13,
        name: 'Vagabondo'
    },
    {
        id: 14,
        name: 'Beethoven'
    },
    {
        id: 15,
        name: 'Rin Tin Tin'
    },
    {
        id: 16,
        name: 'Raudi'
    }
];

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.multi ? [] : null
        };
    }

    handleChange(value) {
        action('Change')(value);

        this.setState({
            value
        });
    }

    render() {
        return <Select
            value={this.state.value}
            options={list}
            multi={this.props.multi}
            onChange={this.handleChange.bind(this)}
        />
    }
}

storiesOf('Select', module)
    .add('Default', () =>
        <Select
            options={list}
            onChange={action('Change')}
        />
    )
    .add('Custom placeholder', () =>
        <Select
            options={list}
            placeholder="Scegli attentamente un oggetto"
        />
    )
    .add('Default (with a wrapper)', () =>
        <Wrapper multi={false} />
    )
    .add('Multi (with a wrapper)', () =>
        <Wrapper multi={true} />
    );