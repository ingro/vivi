import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/style.css';

function loadStories() {
	require('../stories/LoadingButton');
	require('../stories/Switch');
	require('../stories/Table');
}

setAddon(infoAddon);

configure(loadStories, module);