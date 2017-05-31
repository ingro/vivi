import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
            value={[moment().add(30, 'day').format('YYYY-MM-DD')]}
        />
    )
    .add('With custom format', () =>
        <DatePicker
            value={moment().add(3, 'day').format('YYYY-MM-DD')}
            displayFormat="F j, Y h:i K"
        />
    )
    .add('With custom placeholder', () =>
        <DatePicker
            placeholder={text('Placeholder', 'Please insert a valid date')}
        />
    )
    .add('Clearable', () =>
        <DatePicker
            value={moment().add(30, 'day').format('YYYY-MM-DD')}
            clearable={true}
        />
    )
    .add('With icon', () =>
        <DatePicker
            value={moment().add(30, 'day').format('YYYY-MM-DD')}
            showIcon={true}
        />
    )
    .add('Range Mode', () =>
        <DatePicker
            range={true}
            onChange={action('Date changed')}
        />
    )
    .add('Range mode with an existing range', () =>
        <DatePicker
            range={true}
            value={[moment().add(60, 'day').format('YYYY-MM-DD'), moment().add(73, 'day').format('YYYY-MM-DD')]}
        />
    )
    .add('Range mode With custom format', () =>
        <DatePicker
            range={true}
            value={[moment().add(60, 'day').format('YYYY-MM-DD'), moment().add(73, 'day').format('YYYY-MM-DD')]}
            displayFormat="F j, Y h:i K"
        />
    )
    .add('Range mode with custom placeholders', () =>
        <DatePicker
            range={true}
            value={[moment().add(60, 'day').format('YYYY-MM-DD'), moment().add(73, 'day').format('YYYY-MM-DD')]}
            placeholder="Select a valid range of dates"
        />
    )
    .add('Range mode with clearable option', () =>
        <DatePicker
            range={true}
            value={[moment().add(60, 'day').format('YYYY-MM-DD'), moment().add(73, 'day').format('YYYY-MM-DD')]}
            clearable={true}
        />
    );