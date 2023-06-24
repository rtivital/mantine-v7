import { BasicSelect } from './BasicSelect/BasicSelect';
import { BasicAutocomplete } from './BasicAutocomplete/BasicAutocomplete';
import { SearchableSelect } from './SearchableSelect/SearchableSelect';
import { AutocompleteLimit } from './AutocompleteLimit/AutocompleteLimit';

import BasicSelectCode from './BasicSelect/code.json';
import BasicAutocompleteCode from './BasicAutocomplete/code.json';
import SearchableSelectCode from './SearchableSelect/code.json';
import AutocompleteLimitCode from './AutocompleteLimit/code.json';

interface ComboboxExampleComponent {
  component: () => JSX.Element;
  code: {
    fileName: string;
    language: string;
    code: string;
  }[];
}

export const COMBOBOX_EXAMPLES_COMPONENTS = {
  BasicSelect: {
    component: BasicSelect,
    code: BasicSelectCode,
  },

  BasicAutocomplete: {
    component: BasicAutocomplete,
    code: BasicAutocompleteCode,
  },

  AutocompleteLimit: {
    component: AutocompleteLimit,
    code: AutocompleteLimitCode,
  },

  SearchableSelect: {
    component: SearchableSelect,
    code: SearchableSelectCode,
  },
} satisfies Record<string, ComboboxExampleComponent>;

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
