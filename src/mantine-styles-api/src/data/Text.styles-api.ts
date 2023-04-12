import type { TextFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TextStylesApi: StylesApiData<TextFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    '--text-gradient': 'Text fill gradient, controlled by gradient prop',
    '--text-line-clamp': 'Number of lines that should be visible, controlled by lineClamp prop',
  },

  modifiers: [
    { modifier: 'data-variant', selector: 'root', value: 'Value of variant prop' },
    {
      modifier: 'data-truncate',
      selector: 'root',
      value: 'Value of truncate prop',
      condition: 'truncate prop is set',
    },
    { modifier: 'data-line-clamp', selector: 'root', condition: 'lineClamp prop is a number' },
    { modifier: 'data-inline', selector: 'root', condition: 'inline prop is set' },
    { modifier: 'data-inherit', selector: 'root', condition: 'inherit prop is set' },
  ],
};
