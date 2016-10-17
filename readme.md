# Vivi

Vivi is a collection of UI-components oriented to the creation of dashboards and back offices.

## Installation

Install vivi with npm: `$ npm install vivi --save`

## Usage

Vivi richiede l'utilizzo di un bundler come Webpack o Browserify. Utilizzando la sintassi ES6 si possono richiedere i singoli componenti nei seguenti modi:
- `import { Select } from 'vivi'`;
- `import Select from 'vivi/lib/Select'`;

Da notare che importando tutto il pacchetto Vivi sarà necessario avere installate anche tutte le dipendenze opzionali, mentre richiedendo i singoli componenti saranno richieste solo le loro (eventuali) dipendenze.

## Development

- Clonare il repository;
- Installare le dipendenze tramite il comando `npm install`;
- Lanciare il comando `npm start` per compilare i files sorgente e aggiornarli in tempo reale.

Una pagina dove sono mostrati i vari componenti e può essere usata per lo sviluppo sarà accessibile all'url [http://localhost:3001/](http://localhost:3001/).
In alternativa è possibile usare [storybook](https://github.com/kadirahq/react-storybook) per lavorare su diverse varianti dei singoli componenti. Per lanciare il server di storybook digitare da riga di comando `npm run storybook`, che sarà accessibile all'url [http://localhost:9001/](http://localhost:9001/).

## External dependencies

Vivi richiede una serie di dipendenze esterne che si suppone siano già presenti nel progetto nel quale viene utilizzato:

**Required dependencies:**

- lodash: >= 4.0.0
- react: >= 0.14.0
- react-addons-shallow-compare: >= 0.14.0
- react-dom: >= 0.14.0

**Optional dependencies:**

- moment: >= 2.0.0 (required for Datepicker, DateRangePicker and TimeAgo)
- react-dates: >= 3.2.0 (required for DatePicker and DateRangePicker)
- react-modal: >= 1.0.0 (required for Modal)
- react-virtualized: >= 8.0.0 (required for Table)
- rc-pagination: >= 1.0.0 (required for Paginator)
- rc-tooltip: >= 3.0.0 (required for Tooltip)
- react-select: 1.0.0-rc.2 (required for Select, SelectAsync and Paginator)
- react-timeago: >= 3.0.0 (required for TimeAgo)