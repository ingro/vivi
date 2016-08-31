import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/style.css';

function loadStories() {
	require('../stories/Checkbox');
	require('../stories/DatePicker');
	require('../stories/DateRangePicker');
	require('../stories/LoadingButton');
	require('../stories/Paginator');
	require('../stories/Select');
	require('../stories/SelectAsync');
	require('../stories/Switch');
	require('../stories/Table');
	require('../stories/TimeAgo');
	require('../stories/Tooltip');
}

setAddon(infoAddon);

configure(loadStories, module);