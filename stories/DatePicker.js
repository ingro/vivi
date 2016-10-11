import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, number } from '@kadira/storybook-addon-knobs';
import moment from 'moment';

import DatePicker from '../src/DatePicker';

const stories = storiesOf('DatePicker', module);

stories.addDecorator(withKnobs);
    
stories
    .addWithInfo('Default', 'Component Info', () =>
        <DatePicker
            onChange={action('Date changed')}
        />
    )
    .add('With an existing date', () =>
        <DatePicker
            date={moment().add(30, 'day')}
        />
    )
    .add('With custom format', () =>
        <DatePicker
            date={moment().add(3, 'day')}
            displayFormat="Do MMM Y"
        />
    )
    .add('With custom placeholder', () =>
        <DatePicker
            placeholder={text('Placeholder', 'Data')}
        />
    )
    .add('With custom number of months', () =>
        <DatePicker
            numberOfMonths={number('Number of Months', 2)}
        />
    );