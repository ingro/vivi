import { configure } from '@kadira/storybook';

import '../src/style.css';

function loadStories() {
	require('../stories/Switch');
	require('../stories/Table');
}

configure(loadStories, module);