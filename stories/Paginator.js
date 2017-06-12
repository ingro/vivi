import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
            defaultCurrent={2}
        />
    )
    .add('Not necessary', () =>
        <Paginator
            total={10}
            pageSize={20}
            defaultCurrent={2}
        />
    )
    .add('With status text', () =>
        <Paginator
            total={96}
            pageSize={20}
            defaultCurrent={5}
            showStatusText={true}
        />
    ).add('With size changer', () =>
        <Paginator
            total={100}
            pageSize={20}
            defaultCurrent={2}
            showSizeChanger={true}
            sizeOptions={[20, 50, 100]}
            onSizeChange={action('Change size')}
        />
    );