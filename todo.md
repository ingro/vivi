# Vivi TODO

## Strutturali
- Decidere libreria per tests e scriverli per i vari componenti. Come Runner si potrebbero utilizzare mocha o ava, come librerie enzyme o jest.
- Decidere metodologia di gestire style dei vari componenti e come generare il file CSS pubblico.
- Decidere quale libreria usare per mostrare i componenti in ambiente isolato, carte-blanche o storybook?
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
- Unificare in componente base per Checkbox e Switch che hanno lo stesso comportamento
- Unificare in componente base per Select e SelectAsync che condividono gran parte delle funzioni

#### Checkbox

#### Datepicker & DateRangePicker
- Passare piu props come numberofmonths, placeholders input etc.

#### LoadingButton

#### Modal

#### Paginator
- Migliorare aspetto select change size e info text (renderlo personalizzabile???)

#### RadioGroup

#### Select & SelectAsync
- Implementare AsyncCreatable
- Utilizzare debounce input per ricerca con Async?

#### Switch

#### Table
- Migliorare stile: hover non copre tutta riga, select dovrebbe andare sopra hover, aggiungere bordi tra celle

#### TimeAgo
- Possibilità di specificare direzione tooltip

#### Tooltip

### Form Components
- Meglio Component regolare o functional component per InputGroupHoc?
- Scrivere storie per i componenti Form
- Gestire opzioni disabled per i vari fields

#### CheckboxField

#### InputField
- Gestione tipi diversi da text?

#### RadioGroupField

#### SelectField

#### SelectAsyncField

#### TextareaField

### Componenti da sviluppare
- Dropdown
- NumberPicker
- DebounceInput
- Form/Dropzone, vedi [esempio](https://github.com/BBB/dropzone-redux-form-example)