import { COMBOBOX_EXAMPLES_COMPONENTS } from './examples';

export interface ComboboxExample {
  /** Demo id, based on it component will render component on the page */
  id: keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;

  /** Name used in search */
  name: string;

  /** Short component description, used in search */
  description: string;

  /** Full component description, displayed on the page */
  fullDescription?: string;

  /** Type based on which components are ordered in the navbar, also used for filtering */
  type: 'select' | 'autocomplete' | 'multiselect';
}

export const COMBOBOX_EXAMPLES_DATA: ComboboxExample[] = [
  {
    id: 'BasicSelect',
    name: 'Basic select',
    description: 'Primitive select component',
    type: 'select',
  },
  {
    id: 'SelectActive',
    name: 'Select with active option',
    description: 'Active option is marked in the dropdown',
    type: 'select',
  },
  {
    id: 'SearchableSelect',
    name: 'Searchable select',
    description: 'Select with search',
    type: 'select',
  },
  {
    id: 'SelectLimit',
    name: 'Select with options limit',
    description: '100 000 options searchable select',
    fullDescription:
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below shows how to use the limit prop to only render 7 options at a time while performing a search in a data set of 100,000 options.',
    type: 'select',
  },
  {
    id: 'SelectOptionComponent',
    name: 'Select with custom option',
    description: 'Select with custom option and value component',
    type: 'select',
  },
  {
    id: 'SelectAsync',
    name: 'Select with async data',
    description: 'Data is requested only when the dropdown is opened',
    type: 'select',
  },
  {
    id: 'BasicAutocomplete',
    name: 'Basic autocomplete',
    description: 'Primitive autocomplete component',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteLimit',
    name: 'Autocomplete with options limit',
    description: '100 000 options search',
    fullDescription:
      'Limiting the number of options rendered at a time is the most efficient way to deal with large data sets. The example below shows how to use the limit prop to only render 7 options at a time while performing a search in a data set of 100,000 options.',
    type: 'autocomplete',
  },
  {
    id: 'AsyncAutocomplete',
    name: 'Async autocomplete',
    description: 'Autocomplete with async data',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteHighlight',
    name: 'Autocomplete with highlight',
    description: 'Autocomplete with highlighted search query in options',
    type: 'autocomplete',
  },
  {
    id: 'AutocompleteSelectFirstOption',
    name: 'Select first option on type',
    description: 'Autocomplete with first option selected when user types',
    type: 'autocomplete',
  },
];
