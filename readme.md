# Vivi

Vivi è una collezione di componenti per l'UI, specialmente orientata alle dashboard.

## Installazione

Installare tramite npm: `$ npm install vivi --save`

## Utilizzo

Vivi richiede l'utilizzo di un bundler come Webpack o Browserify. Utilizzando la sintassi ES6 si possono richiedere i singoli componenti nei seguenti modi:
- `import { Select } from 'vivi'`;
- `import Select from 'vivi/Select'`;

## Sviluppo

- Clonare il repository;
- Installare le dipendenze tramite il comando `npm install`;
- Lanciare il comando `npm start` per compilare i files sorgente e aggiornarli in tempo reale.

Una pagina dove sono mostrati i vari componenti e può essere usata per lo sviluppo sarà accessibile all'url [http://localhost:3001/](http://localhost:3001/).
In alternativa è possibile usare [storybook](https://github.com/kadirahq/react-storybook) per lavorare su diverse varianti dei singoli componenti. Per lanciare il server di storybook digitare da riga di comando `npm run storybook`, che sarà accessibile all'url [http://localhost:9001/](http://localhost:9001/).

## Dipendenze esterne

Vivi richiede una serie di dipendenze esterne che si suppone siano già presenti nel progetto nel quale viene utilizzato:

**Dipendenze obbligatorie:**

- lodash: >= 4.0.0
- react: >= 0.14.0
- react-addons-shallow-compare: >= 0.14.0
- react-dom: >= 0.14.0

**Dipendenze opzionali:**
- moment: >= 2.0.0 (necessario per Datepicker, DateRangePicker e TimeAgo)
- react-dates: >= 2.0.0 (necessario per DatePicker e DateRangePicker)
- react-modal: >= 1.0.0 (necessario per Modal)
- react-virtualized: >= 7.0.0 (necessario per Table)
- rc-pagination: >= 1.0.0 (necessario per Paginator)
- rc-tooltip: >= 3.0.0 (necessario per Tooltip)
- react-select: 1.0.0-beta14 (necessario per Select e SelectAsync)
- react-timeago: >= 3.0.0 (necessario per TimeAgo)