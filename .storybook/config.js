import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import '../src/style.css';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/airbnb.css';

setOptions({
    name: 'Vivi',
    url: 'https://www.npmjs.com/package/vivi',
    downPanelInRight: true
});

const req = require.context('../stories', true, /.js$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

setAddon(infoAddon);

configure(loadStories, module);