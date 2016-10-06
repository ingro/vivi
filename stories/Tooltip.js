import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Tooltip from '../src/Tooltip';

storiesOf('Tooltip', module)
.addDecorator(withKnobs)
.addDecorator((story) => (
    <div style={{ margin: 100 }}>
        {story()}
    </div>
))
.add('Default', () =>
        <Tooltip
            content={text('Content', 'Im a tooltip!')}
        >
            <span className="btn btn-danger">Delete</span>
        </Tooltip>
    )
    .add('Right', () =>
        <Tooltip
            content={'Im a tooltip!'}
            position="right"
        >
            <span className="btn btn-danger">Delete</span>
        </Tooltip>
    )
    .add('Show on click', () =>
        <Tooltip
            content={'Im a tooltip!'}
            trigger={["click"]}
        >
            <span className="btn btn-danger">Delete</span>
        </Tooltip>
    )
    .add('Long delays', () =>
        <Tooltip
            content={'Im a tooltip!'}
            enterDelay={1}
            leaveDelay={1}
        >
            <span className="btn btn-danger">Delete</span>
        </Tooltip>
    );