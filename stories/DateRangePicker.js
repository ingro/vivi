import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, number, boolean } from '@kadira/storybook-addon-knobs';
import moment from 'moment';

import DateRangePicker from '../src/DateRangePicker';

const stories = storiesOf('DateRangePicker', module);

stories.addDecorator(withKnobs);

stories
    .addWithInfo('Default', 'Component Info', () =>
        <DateRangePicker
            onChange={action('Date changed')}
        />
    )
    .add('With an existing range', () =>
        <DateRangePicker
            startDate={moment().add(3, 'day')}
            endDate={moment().add(8, 'day')}
        />
    )
    .add('With custom format', () =>
        <DateRangePicker
            startDate={moment().add(3, 'day')}
            endDate={moment().add(8, 'day')}
            displayFormat="Do MMM Y"
        />
    )
    .add('With custom placeholders', () =>
        <DateRangePicker
            startDatePlaceholderText={text('Start placeholder', 'START')}
            endDatePlaceholderText={text('End placeholder', 'END')}
        />
    )
    .add('With custom number of months', () =>
        <DateRangePicker
            numberOfMonths={number('Number of Months', 1)}
        />
    )
    .addWithInfo('With a clear date button', () =>
        <DateRangePicker
            startDate={moment().add(3, 'day')}
            endDate={moment().add(8, 'day')}
            showClearDates={boolean('Show clear dates', true)}
        />
    );