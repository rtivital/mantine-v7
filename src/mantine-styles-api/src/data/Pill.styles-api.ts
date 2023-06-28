import type { PillFactory, PillGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const PillStylesApi: StylesApiData<PillFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Pill label (children)',
    remove: 'Remove button',
  },

  vars: {
    root: {
      '--pill-fz': 'Controls `font-size`',
      '--pill-radius': 'Controls `border-radius`',
    },
  },

  modifiers: [
    { modifier: 'data-with-remove', selector: 'root', condition: '`withRemoveButton` is set' },
  ],
};

export const PillGroupStylesApi: StylesApiData<PillGroupFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--pg-gap': 'Controls `gap` between pills',
      '--pg-height': 'Controls `height` of the group',
    },
  },
};
