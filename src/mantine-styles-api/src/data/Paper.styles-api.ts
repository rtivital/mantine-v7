import type { PaperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PaperStylesApi: StylesApiData<PaperFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    '--paper-radius': 'Border radius',
    '--paper-shadow': 'Box shadow',
  },

  params: ['radius', 'shadow', 'variant'],

  modifiers: [
    { modifier: 'data-with-border', selector: 'root', condition: 'withBorderProp is set' },
  ],
};
