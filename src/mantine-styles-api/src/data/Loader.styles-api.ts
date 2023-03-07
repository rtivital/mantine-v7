import type { LoaderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const LoaderStylesApi: StylesApiData<LoaderFactory> = {
  selectors: {
    root: 'Root element',
  },

  params: {
    size: 'size prop',
    color: 'color prop',
    variant: 'variant prop',
  },

  vars: {
    '--size': 'Loader width, controlled by size prop',
    '--color': 'Svg stroke/fille color, controlled by color prop',
  },
};
