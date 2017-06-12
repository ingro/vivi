import React from 'react';
import axios from 'axios';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectAsync from '../src/SelectAsync';

function loadData(q) {
    return axios.get(`http://swapi.co/api/people?search=${q}`)
        .then(res => {
            const options = res.data.results.map((item, id) => ({ value: id, label: item.name }));

            return { options };
        });
}

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
        return <SelectAsync
            value={this.state.value}
            loadOptions={loadData}
            multi={this.props.multi}
            onChange={this.handleChange.bind(this)}
        />
    }
}

storiesOf('SelectAsync', module)
    .add('Default', () =>
        <SelectAsync
            loadOptions={loadData}
            onChange={action('Change')}
        />
    )
    .add('Disabled', () =>
        <SelectAsync
            loadOptions={loadData}
            onChange={action('Change')}
            value={3}
            disabled={true}
        />
    )
    .add('Custom placeholder', () =>
        <SelectAsync
            loadOptions={loadData}
            placeholder="Select a character of the Star Wars saga"
        />
    )
    .add('Autoload', () =>
        <SelectAsync
            loadOptions={loadData}
            autoload={true}
        />
    )
    .add('Default (with a wrapper)', () =>
        <Wrapper multi={false} />
    )
    .add('Multi (with a wrapper)', () =>
        <Wrapper multi={true} />
    );