# Vivi TODO

## Strutturali
- Decidere libreria per tests e scriverli per i vari componenti. Come Runner si potrebbero utilizzare mocha o ava, come librerie enzyme o jest.
- Decidere metodologia di gestire style dei vari componenti e come generare il file CSS pubblico.
- Decidere quale libreria usare per mostrare i componenti in ambiente isolato, carte-blanche o storybook?
- Decidere se creare un bundle con le varie dipendenze o mantenerle come peer depedencies e compilare semplicemente i files sorgenti con babel.
- Definire nomenclatura unica nomi componenti, callbacks etc.
- Inserire qualche info nel readme.
- Valutare se utilizzare lodash per intero o piccoli moduli separati (nel caso di lodash valutare build con webpack e webpack plugin lodash)
- Come gestire tutte le peer dependencies???

## Componenti
- Unificare componente base per Checkbox e Switch che hanno lo stesso comportamento

### Checkbox

### Datepicker & DateRangePicker
- Attendere che react-dates rimuova dipendenza da jquery
- Passare piu props come numberofmonths, placeholders input etc.

### LoadingButton

### Switch

### Table
- Risolvere warning react per passaggio checkbox header select da uncontrolled a controlled (valore iniziale null)
