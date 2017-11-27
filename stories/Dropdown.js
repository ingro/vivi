import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Dropdown from '../src/Dropdown';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.add('Button', withInfo('ComponentInfo'), () =>
        <Dropdown
            type="button"
            text={text('Handler text', 'Click me!')}
        >
            <li>
                <a>Foo</a>
            </li>
            <li>
                <a>Bar</a>
            </li>
        </Dropdown>
    )
    .add('Navbar', withInfo('ComponentInfo'), () =>
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                    <Dropdown
                        type="navbar"
                        text={text('Handler text', 'Click me!')}
                    >
                        <li>
                            <a>Foo</a>
                        </li>
                        <li>
                            <a>Bar</a>
                        </li>
                    </Dropdown>
                </ul>
            </div>
        </div>
    )
    .add('Don\'t close menu on click', () =>
        <Dropdown
            type="button"
            text={text('Handler text', 'Click me!')}
            closeOnClick={false}
        >
            <li>
                <a>Foo</a>
            </li>
            <li>
                <a>Bar</a>
            </li>
        </Dropdown>
    );