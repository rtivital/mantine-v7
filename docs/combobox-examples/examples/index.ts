import { BasicSelect } from './BasicSelect/BasicSelect';
import { BasicAutocomplete } from './BasicAutocomplete/BasicAutocomplete';
import { SearchableSelect } from './SearchableSelect/SearchableSelect';
import { AutocompleteLimit } from './AutocompleteLimit/AutocompleteLimit';
import { AsyncAutocomplete } from './AsyncAutocomplete/AsyncAutocomplete';
import { AutocompleteHighlight } from './AutocompleteHighlight/AutocompleteHighlight';
import { SelectActive } from './SelectActive/SelectActive';
import { SelectOptionComponent } from './SelectOptionComponent/SelectOptionComponent';

import BasicSelectCode from './BasicSelect/code.json';
import BasicAutocompleteCode from './BasicAutocomplete/code.json';
import SearchableSelectCode from './SearchableSelect/code.json';
import AutocompleteLimitCode from './AutocompleteLimit/code.json';
import AsyncAutocompleteCode from './AsyncAutocomplete/code.json';
import AutocompleteHighlightCode from './AutocompleteHighlight/code.json';
import SelectActiveCode from './SelectActive/code.json';
import SelectOptionComponentCode from './SelectOptionComponent/code.json';

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

  SearchableSelect: {
    component: SearchableSelect,
    code: SearchableSelectCode,
  },

  BasicAutocomplete: {
    component: BasicAutocomplete,
    code: BasicAutocompleteCode,
  },

  AutocompleteLimit: {
    component: AutocompleteLimit,
    code: AutocompleteLimitCode,
  },

  AsyncAutocomplete: {
    component: AsyncAutocomplete,
    code: AsyncAutocompleteCode,
  },

  AutocompleteHighlight: {
    component: AutocompleteHighlight,
    code: AutocompleteHighlightCode,
  },

  SelectActive: {
    component: SelectActive,
    code: SelectActiveCode,
  },

  SelectOptionComponent: {
    component: SelectOptionComponent,
    code: SelectOptionComponentCode,
  },
} satisfies Record<string, ComboboxExampleComponent>;

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
