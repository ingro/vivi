import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/Select';

const list = [
    {
        value: 1,
        label: 'Braccobaldo'
    },
    {
        value: 2,
        label: 'Scooby Doo'
    },
    {
        value: 3,
        label: 'Pongo'
    },
    {
        value: 4,
        label: 'Bolt'
    },
    {
        value: 5,
        label: 'Peggy'
    },
    {
        value: 6,
        label: 'Rex'
    },
    {
        value: 7,
        label: 'Lassie'
    },
    {
        value: 8,
        label: 'Marley'
    },
    {
        value: 9,
        label: 'Snoopy'
    },
    {
        value: 10,
        label: 'Santa\'s Little helper'
    },
    {
        value: 11,
        label: 'Pluto'
    },
    {
        value: 12,
        label: 'Lilly'
    },
    {
        value: 13,
        label: 'Vagabondo'
    },
    {
        value: 14,
        label: 'Beethoven'
    },
    {
        value: 15,
        label: 'Rin Tin Tin'
    },
    {
        value: 16,
        label: 'Raudi'
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
            create={this.props.create}
            onChange={this.handleChange.bind(this)}
        />
    }
}

Wrapper.defaultProps = {
    create: false
};

storiesOf('Select', module)
    .add('Default', () =>
        <Select
            options={list}
            onChange={action('Change')}
        />
    )
    .add('Disabled', () =>
        <Select
            options={list}
            onChange={action('Change')}
            value={9}
            disabled={true}
        />
    )
    .add('Custom placeholder', () =>
        <Select
            options={list}
            placeholder="Scegli attentamente un oggetto"
        />
    )
    .add('Open dropdown up', () =>
        <div style={{ marginTop: 250 }}>
            <Select
                options={list}
                openUp={true}
            />
        </div>
    )
    .add('Create options', () =>
        <Select
            options={list}
            multi={true}
            create={true}
        />
    )
    .add('Default (with a wrapper)', () =>
        <Wrapper multi={false} />
    )
    .add('Multi (with a wrapper)', () =>
        <Wrapper multi={true} />
    );