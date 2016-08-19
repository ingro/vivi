import { configure } from '@kadira/storybook';

import '../src/Table.css';

function loadStories() {
	require('../stories/Table');
}

configure(loadStories, module);