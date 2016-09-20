import React from 'react';
import axios from 'axios';
import { storiesOf, action } from '@kadira/storybook';

import SelectAsync from '../src/SelectAsync';

function loadPosts(q) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&q=${q}`)
        .then(res => {
            // const options = res.data.map(post => ({ value: post.id, label: post.title }));

            return { options: res.data };
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
            loadOptions={loadPosts}
            multi={this.props.multi}
            labelKey="title"
            onChange={this.handleChange.bind(this)}
        />
    }
}

storiesOf('SelectAsync', module)
    .add('Default', () =>
        <SelectAsync
            loadOptions={loadPosts}
            onChange={action('Change')}
            labelKey="title"
        />
    )
    .add('Disabled', () =>
        <SelectAsync
            loadOptions={loadPosts}
            onChange={action('Change')}
            labelKey="title"
            value={3}
            disabled={true}
        />
    )
    .add('Custom placeholder', () =>
        <SelectAsync
            loadOptions={loadPosts}
            placeholder="Scegli attentamente un articolo"
            labelKey="title"
        />
    )
    .add('Autoload', () =>
        <SelectAsync
            loadOptions={loadPosts}
            placeholder="Scegli attentamente un articolo"
            labelKey="title"
            autoload={true}
        />
    )
    .add('Default (with a wrapper)', () =>
        <Wrapper multi={false} />
    )
    .add('Multi (with a wrapper)', () =>
        <Wrapper multi={true} />
    );