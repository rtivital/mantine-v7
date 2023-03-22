import type { MarkFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const MarkStylesApi: StylesApiData<MarkFactory> = {
  selectors: {
    root: 'Root element',
  },

  params: ['color'],

  vars: {
    '--mark-bg-dark': 'Background color for dark color scheme',
    '--mark-bg-light': 'Background color for light color scheme',
  },
};
