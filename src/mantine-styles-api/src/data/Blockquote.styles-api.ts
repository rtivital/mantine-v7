import type { BlockquoteFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BlockquoteStylesApi: StylesApiData<BlockquoteFactory> = {
  selectors: {
    root: 'Root element',
    icon: 'Icon element',
    cite: 'Cite element',
  },

  vars: {
    root: {
      '--bq-bd': 'Controls border color',
      '--bq-bg-dark': 'Controls background color in dark color scheme',
      '--bq-bg-light': 'Controls background color in light color scheme',
      '--bq-icon-size': 'Controls width and height of icon',
      '--bq-radius': 'Controls border-radius',
    },
  },
};
