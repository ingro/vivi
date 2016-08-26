import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import '../src/style.css';
import 'react-dates/lib/css/_datepicker.css';

function loadStories() {
	require('../stories/Checkbox');
	require('../stories/DatePicker');
	require('../stories/DateRangePicker');
	require('../stories/LoadingButton');
	require('../stories/Switch');
	require('../stories/Table');
}

setAddon(infoAddon);

configure(loadStories, module);