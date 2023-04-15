import type { PaperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PaperStylesApi: StylesApiData<PaperFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--paper-radius': 'Border radius',
      '--paper-shadow': 'Box shadow',
    },
  },

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: 'withBorderProp is set' },
  ],
};
