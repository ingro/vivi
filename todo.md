# Vivi TODO

## Strutturali
- Decidere libreria per tests e scriverli per i vari componenti. Come Runner si potrebbero utilizzare mocha ava o jest, come librerie enzyme.
- Decidere metodologia di gestire style dei vari componenti e come generare il file CSS pubblico.
- Decidere se creare un bundle con le varie dipendenze o mantenerle come peer depedencies e compilare semplicemente i files sorgenti con babel.
- Definire nomenclatura unica nomi componenti, callbacks etc.
- Valutare se utilizzare lodash per intero o piccoli moduli separati (nel caso di lodash valutare build con webpack e webpack plugin lodash)
- Valutare se utilizzare moduli specifici al posto di lodash
- Come gestire tutte le peer dependencies???
- Trovare modo di esportare componenti Form in index libreria
- Esportare anche i singoli file CSS?
- Documentare ViviProvider
- Pubblicare storybook su github pages
- Usare import diretti componenti per evitare di importare intere librerie (vedere come esempio import di componenti da `react-virtualized` in Table, altri candidati sono `react-select` e `react-dates`)
- Valutare passaggio a `react-widget` per `Select` e `SelectAsync`
- Valutare scrittura componente `TimeAgo` custom con utilizzo diretto di `date-fns`

## Componenti
- A molti componenti vengono passati esplicitamente props come name, onChange, onFocus quando forse basterebbe usare lo spread operator per semplificarli e ridurre le propTypes

### Regular Components

#### Checkbox

#### ClearableInput

#### Datepicker
- Se passo l'attributo `value` come array passarlo nelle options di flatpickr come `defaultDate`
- Valutare utilzzo di `react-flatpickr` al posto di componente custom <--

#### Dropdown

#### LoadingButton
- Valutare utilizzo animakit-rotator? https://animakit.github.io

#### Modal

#### Paginator
- Limitare larghezza info e size changer

#### RadioGroup

#### Select & SelectAsync
- Utilizzare debounce input per ricerca con Async?

#### Switch

#### Table
- Allineamento verticale contenuto celle???

#### TimeAgo

#### Tooltip
- Valutare switch a https://github.com/slmgc/react-hint

### Form Components
- Meglio Component regolare o functional component per InputGroupHoc?
- Possibilita di maggiori customizzazioni Field? (classe, presenza o meno di testo errori etc.)
- Scrivere storie per i componenti Form
- Gestire opzioni disabled per i vari fields

#### CheckboxField

#### InputField

#### RadioGroupField

#### SelectField

#### SelectAsyncField

#### TextareaField

### Componenti da sviluppare
- NumberPicker
- Form/Dropzone, vedi [esempio](https://github.com/BBB/dropzone-redux-form-example)

### Bug da risolvere con React 16.0
- Usare react-popper anche per tooltip?