import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Switch from '../src/Switch';

storiesOf('Switch', module)
    .add('Controlled', () =>
        <Switch
            checked={false}
            onClick={action('Click')}
        />
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
            disabled
            onChange={action('Change')}
        />
    );