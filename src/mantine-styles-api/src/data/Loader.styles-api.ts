import type { LoaderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const LoaderStylesApi: StylesApiData<LoaderFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--loader-size': 'Loader width, controlled by `size` prop',
      '--loader-color': 'SVG `stroke`/`fill` color, controlled by `color` prop',
    },
  },
};
