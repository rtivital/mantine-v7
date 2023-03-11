import type { TextFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TextStylesApi: StylesApiData<TextFactory> = {
  selectors: {
    root: 'Root element',
  },

  params: {
    gradient: 'gradient prop',
    lineClamp: 'lineClamp prop',
  },

  vars: {
    '--gradient': 'Text fill gradient, controlled by gradient prop',
    '--line-clamp': 'Number of lines that should be visible, controlled by lineClamp prop',
  },
};
