import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

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
    .add(
        'Normal',
        withInfo('Button in normal state'),
        () =>
            <LoadingButton
                onClick={action('Change')}
            >
                Save
            </LoadingButton>,
    )
    .add('Disabled', () =>
        <LoadingButton
            disabled={true}
            onClick={action('Change')}
        >
            Disabled :(
        </LoadingButton>
    )
    .add(
        'Customized',
        withInfo('Button in normal state with some bootstrap classes applied'),
        () =>
            <LoadingButton
                className="btn-warning btn-lg"
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .add(
        'Loading',
        withInfo('Button in loading state'),
        () =>
            <LoadingButton
                loading={true}
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .add(
        'Custom loading message',
        withInfo('Button in loading state with custom message'),
        () =>
            <LoadingButton
                loading={true}
                loadingMsg={<span><i className="fa fa-spin fa-refresh" /> zZzZzZZzzZ...</span>}
                onClick={action('Change')}
            >
                Save
            </LoadingButton>
    )
    .add('Working (with a wrapper)', () => <Wrapper />);