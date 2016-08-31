import React from 'react';
import { storiesOf } from '@kadira/storybook';
import moment from 'moment';

import TimeAgo from '../src/TimeAgo';

storiesOf('TimeAgo', module)
    .add('Default', () =>
        <TimeAgo
            date={"2016-08-29 05:01:37"}
        />
    )
    .add('From a moment object', () =>
        <TimeAgo
            date={moment().subtract(3, 'day')}
        />
    )
    .add('With tooltip', () =>
        <TimeAgo
            date={moment().subtract(3, 'day')}
            tooltip={true}
        />
    );