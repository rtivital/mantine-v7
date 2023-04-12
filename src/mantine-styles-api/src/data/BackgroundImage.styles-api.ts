import type { BackgroundImageFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BackgroundImageStylesApi: StylesApiData<BackgroundImageFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    '--bi-radius': 'Border radius',
  },
};
