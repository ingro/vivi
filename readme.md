# Vivi

Vivi is a collection of UI-components oriented to the creation of dashboards and back offices.

## Installation

Install vivi with npm: `$ npm install vivi --save`

## Usage

Vivi requires to be used with a bundler like [webpack](https://webpack.github.io/) or [browserify](http://browserify.org/). Using es6 syntax you could require components in two ways:

- `import { Select } from 'vivi'`;
- `import Select from 'vivi/lib/Select'`;

Please not that requiring `vivi` will pull the whole package (also requiring all the optional dependencies), so you can save a lot of space importing the single components directly.

## Development

- Clone the repository;
- Install dependencies with `npm install`;
- Type `npm start` to compile the source code and watch for changes;

A demo page where you can see in action all the components could be found at [http://localhost:3001/](http://localhost:3001/).
Alternatively you could use [storybook](https://github.com/kadirahq/react-storybook) to work with components in many different scenarios.
To launch storybook's server simple type `npm run storybook` and point your browser to [http://localhost:9001/](http://localhost:9001/).

## External dependencies

Vivi requires external dependencies in order to work, some globally and some optionally (needed only for specific components);

**Required dependencies:**

- lodash: >= 4.0.0
- react: >= 0.14.0
- react-addons-shallow-compare: >= 0.14.0
- react-dom: >= 0.14.0

**Optional dependencies:**

- moment: >= 2.0.0 (required for Datepicker, DateRangePicker and TimeAgo)
- react-dates: >= 6.0.0 (required for DatePicker and DateRangePicker)
- react-modal: >= 1.0.0 (required for Modal)
- react-virtualized: >= 8.11.0 (required for Table)
- rc-pagination: >= 1.0.0 (required for Paginator)
- rc-tooltip: >= 3.0.0 (required for Tooltip)
- react-select: 1.0.0-rc.3 (required for Select, SelectAsync and Paginator)
- react-timeago: >= 3.0.0 (required for TimeAgo)