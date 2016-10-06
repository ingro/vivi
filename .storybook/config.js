import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

import '../src/style.css';

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