import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, select } from '@kadira/storybook-addon-knobs';
import moment from 'moment';

import TimeAgo from '../src/TimeAgo';

const stories = storiesOf('TimeAgo', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Default', 'ComponentInfo', () =>
        <TimeAgo
            date={"2016-08-29 05:01:37"}
        />
    )
    .add('From a date object', () =>
        <TimeAgo
            date={moment().subtract(3, 'day').toDate()}
        />
    )
    .add('With tooltip', () =>
        <div style={{ margin: 100 }}>
            <TimeAgo
                date={moment().subtract(3, 'day').toDate()}
                tooltip={true}
            />
        </div>
    )
    .add('With custom tooltip content and position', () =>
        <div style={{ margin: 100 }}>
            <TimeAgo
                date={moment().subtract(3, 'day').toDate()}
                tooltip={true}
                tooltipPosition={select('Tooltip position', ['top', 'right', 'bottom', 'left'], 'right')}
                tooltipDateFormat="dddd DD MMMM YYYY"
            />
        </div>
    );