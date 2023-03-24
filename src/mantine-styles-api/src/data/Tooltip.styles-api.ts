import type { TooltipFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TooltipStylesApi: StylesApiData<TooltipFactory> = {
  selectors: {
    tooltip: 'Root element',
    arrow: 'Tooltip arrow, rendered inside tooltip',
  },

  params: ['color', 'radius'],

  vars: {
    '--tooltip-bg': '',
    '--tooltip-radius': '',
  },

  modifiers: [
    { modifier: 'data-multiline', selector: 'tooltip', condition: 'multiline prop is set' },
  ],
};
