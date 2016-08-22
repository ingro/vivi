import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import LoadingButton from '../src/LoadingButton';

class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    handleClick() {
        action('Click')();

        this.setState({
            isLoading: true
        });

        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 3000);
    }

    render() {
        return <LoadingButton loading={this.state.isLoading} onClick={this.handleClick.bind(this)}>Save</LoadingButton>
    }
}

storiesOf('LoadingButton', module)
    .addWithInfo(
        'Normal',
        'Button in normal state',
        () =>
            <LoadingButton
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .addWithInfo(
        'With bootstrap classes',
        'Button in normal state with bootstrap class applied',
        () =>
            <LoadingButton
                bsClass="warning"
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .addWithInfo(
        'Loading',
        'Button in loading state',
        () =>
            <LoadingButton
                loading={true}
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .addWithInfo(
        'Custom loading message',
        'Button in loading state with custom message',
        () =>
            <LoadingButton
                loading={true}
                loadingMsg={<span>zZzZzZZzzZ...</span>}
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .add('Working', () => <Wrapper />);