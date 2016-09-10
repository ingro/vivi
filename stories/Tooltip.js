import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

import Tooltip from '../src/Tooltip';

storiesOf('Tooltip', module)
.addDecorator(withKnobs)
.add('Default', () =>
        <div style={{ margin: 100 }}>
            <Tooltip
                content={text('Content', 'Im a tooltip!')}
            >
                <span className="btn btn-danger">Delete</span>
            </Tooltip>
        </div>
    )
    .add('Right', () =>
        <div style={{ margin: 100 }}>
            <Tooltip
                content={'Im a tooltip!'}
                position="right"
            >
                <span className="btn btn-danger">Delete</span>
            </Tooltip>
        </div>
    )
    .add('Show on click', () =>
        <div style={{ margin: 100 }}>
            <Tooltip
                content={'Im a tooltip!'}
                trigger={["click"]}
            >
                <span className="btn btn-danger">Delete</span>
            </Tooltip>
        </div>
    )
    .add('Long delays', () =>
        <div style={{ margin: 100 }}>
            <Tooltip
                content={'Im a tooltip!'}
                enterDelay={1}
                leaveDelay={1}
            >
                <span className="btn btn-danger">Delete</span>
            </Tooltip>
        </div>
    );