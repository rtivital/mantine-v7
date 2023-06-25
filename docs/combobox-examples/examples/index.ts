import { BasicSelect } from './BasicSelect/BasicSelect';
import { BasicAutocomplete } from './BasicAutocomplete/BasicAutocomplete';
import { SearchableSelect } from './SearchableSelect/SearchableSelect';
import { AutocompleteLimit } from './AutocompleteLimit/AutocompleteLimit';
import { AsyncAutocomplete } from './AsyncAutocomplete/AsyncAutocomplete';
import { AutocompleteHighlight } from './AutocompleteHighlight/AutocompleteHighlight';
import { SelectActive } from './SelectActive/SelectActive';
import { SelectOptionComponent } from './SelectOptionComponent/SelectOptionComponent';
import { SelectLimit } from './SelectLimit/SelectLimit';
import { SelectAsync } from './SelectAsync/SelectAsync';
import { AutocompleteSelectFirstOption } from './AutocompleteSelectFirstOption/AutocompleteSelectFirstOption';
import { SelectClearable } from './SelectClearable/SelectClearable';

import BasicSelectCode from './BasicSelect/code.json';
import BasicAutocompleteCode from './BasicAutocomplete/code.json';
import SearchableSelectCode from './SearchableSelect/code.json';
import AutocompleteLimitCode from './AutocompleteLimit/code.json';
import AsyncAutocompleteCode from './AsyncAutocomplete/code.json';
import AutocompleteHighlightCode from './AutocompleteHighlight/code.json';
import SelectActiveCode from './SelectActive/code.json';
import SelectOptionComponentCode from './SelectOptionComponent/code.json';
import SelectLimitCode from './SelectLimit/code.json';
import SelectAsyncCode from './SelectAsync/code.json';
import AutocompleteSelectFirstOptionCode from './AutocompleteSelectFirstOption/code.json';
import SelectClearableCode from './SelectClearable/code.json';

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

  SelectLimit: {
    component: SelectLimit,
    code: SelectLimitCode,
  },

  SelectAsync: {
    component: SelectAsync,
    code: SelectAsyncCode,
  },

  AutocompleteSelectFirstOption: {
    component: AutocompleteSelectFirstOption,
    code: AutocompleteSelectFirstOptionCode,
  },

  SelectClearable: {
    component: SelectClearable,
    code: SelectClearableCode,
  },
} satisfies Record<string, ComboboxExampleComponent>;

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
