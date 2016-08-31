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
- Importare Classnames come dipendenza strutturale
- Trovare modo di esportare componenti Form in index libreria

## Componenti
- A molti componenti vengono passati esplicitamente props come name, onChange, onFocus quando forse basterebbe usare lo spread operator
per semplificarli e ridurre le propTypes
- Unificare in componente base per Checkbox e Switch che hanno lo stesso comportamento
- Unificare in componente base per Select e SelectAsync che condividono gran parte delle funzioni
- Unificare componenti Form che utilizzano stessa logica per disegnare eventuali label e messaggi di errore
- Scrivere storie per i componenti Form

### Regular Components

#### Checkbox

#### Datepicker & DateRangePicker
- Attendere che react-dates rimuova dipendenza da jquery
- Passare piu props come numberofmonths, placeholders input etc.

#### LoadingButton

#### Modal

#### Paginator
- Migliorare aspetto select change size e info text (renderlo personalizzabile???)

#### Select & SelectAsync
- Attendere che react-select 1.x implementi nuovamento l'opzione *allowCreate* per creare nuovi tags dinamicamente

#### Switch

#### Table
- Risolvere warning react per passaggio checkbox header select da uncontrolled a controlled (valore iniziale null)

#### TimeAgo
- Possibilità di specificare direzione tooltip

#### Tooltip

### Form Components

#### CheckboxField

#### InputField
- Gestione tipi diversi da text?

#### SelectField

#### SelectAsyncField

#### TextareaField

### Componenti da sviluppare
- Dropdown
- Radio
- NumberPicker
- Form/Radio