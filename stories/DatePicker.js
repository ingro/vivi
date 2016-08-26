import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import moment from 'moment';

import DatePicker from '../src/DatePicker';

storiesOf('DatePicker', module)
    .add('Default', () =>
        <DatePicker
            onChange={action('Date changed')}
        />
    )
    .add('With an existing date', () =>
        <DatePicker
            date={moment().add(3, 'day')}
        />
    );