import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/style.css';

const req = require.context('../stories', true, /.js$/)

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

setAddon(infoAddon);

configure(loadStories, module);