import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import moment from 'moment';

import DateRangePicker from '../src/DateRangePicker';

storiesOf('DateRangePicker', module)
    .add('Default', () =>
        <DateRangePicker
            onChange={action('Date changed')}
        />
    )
    .add('With an existing range', () =>
        <DateRangePicker
            startDate={moment().add(3, 'day')}
            endDate={moment().add(8, 'day')}
        />
    );