import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Paginator from '../src/Paginator';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1
        };
    }

    handleChange = (page) => {
        action('Change')(page);

        this.setState({
            currentPage: page
        });
    }

    render() {
        return <Paginator
            total={100}
            pageSize={20}
            current={this.state.currentPage}
            onChange={this.handleChange}
        />;
    }
}

storiesOf('Paginator', module)
    .add('Controlled (with a wrapper)', () =>
        <Wrapper />
    )
    .add('Not controlled', () =>
        <Paginator
            total={100}
            pageSize={20}
            current={2}
        />
    )
    .add('With status text', () =>
        <Paginator
            total={100}
            pageSize={20}
            current={2}
            showStatusText={true}
        />
    ).add('With size changer', () =>
        <Paginator
            total={1000}
            pageSize={20}
            current={2}
            showSizeChanger={true}
            sizeOptions={[20, 50, 100]}
            onSizeChange={action('Change size')}
        />
    );