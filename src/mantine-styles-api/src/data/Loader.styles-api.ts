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
    '--loader-size': 'Loader width, controlled by size prop',
    '--loader-color': 'Svg stroke/fille color, controlled by color prop',
  },
};
