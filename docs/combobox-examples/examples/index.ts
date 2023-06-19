import { BasicSelect } from './BasicSelect/BasicSelect';

import BasicSelectCode from './BasicSelect/code.json';

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
} satisfies Record<string, ComboboxExampleComponent>;

export type ComboboxExampleId = keyof typeof COMBOBOX_EXAMPLES_COMPONENTS;
