# Vivi TODO

## Strutturali
- Decidere libreria per tests e scriverli per i vari componenti. Come Runner si potrebbero utilizzare mocha ava o jest, come librerie enzyme.
- Decidere metodologia di gestire style dei vari componenti e come generare il file CSS pubblico.
- Decidere se creare un bundle con le varie dipendenze o mantenerle come peer depedencies e compilare semplicemente i files sorgenti con babel.
- Definire nomenclatura unica nomi componenti, callbacks etc.
- Inserire qualche info nel readme.
- Valutare se utilizzare lodash per intero o piccoli moduli separati (nel caso di lodash valutare build con webpack e webpack plugin lodash)
- Valutare se utilizzare moduli specifici al posto di lodash
- Come gestire tutte le peer dependencies???
- Trovare modo di esportare componenti Form in index libreria
- Esportare anche i singoli file CSS?

## Componenti
- A molti componenti vengono passati esplicitamente props come name, onChange, onFocus quando forse basterebbe usare lo spread operator
per semplificarli e ridurre le propTypes

### Regular Components

#### Checkbox

#### Datepicker & DateRangePicker

#### LoadingButton

#### Modal

#### Paginator

#### RadioGroup

#### Select & SelectAsync
- Fixare highlight su SelectAsync (https://github.com/JedWatson/react-select/pull/1231)
- Utilizzare debounce input per ricerca con Async?

#### Switch

#### Table

#### TimeAgo

#### Tooltip

### Form Components
- Meglio Component regolare o functional component per InputGroupHoc?
- Scrivere storie per i componenti Form
- Gestire opzioni disabled per i vari fields

#### CheckboxField

#### InputField

#### RadioGroupField

#### SelectField

#### SelectAsyncField

#### TextareaField

### Componenti da sviluppare
- Dropdown
- NumberPicker
- DebounceInput
- Form/Dropzone, vedi [esempio](https://github.com/BBB/dropzone-redux-form-example)