import type { ActionIconFactory, ActionIconGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ActionIconStylesApi: StylesApiData<ActionIconFactory> = {
  selectors: {
    root: 'Root element',
    loader: 'Loader component, rendered inside root element when loading prop is set',
  },

  params: {
    size: 'size prop',
    color: 'color prop',
    radius: 'radius prop',
    gradient: 'gradient prop',
    variant: 'variant prop',
  },

  vars: {
    '--ai-bg': 'Background style, controlled by color and variant props',
    '--ai-bd': 'Border styles, controlled by color and variant props',
    '--ai-hover': 'Background style while hovered, controlled by color and variant props',
    '--ai-color': 'Color style, controlled by color and variant props',
    '--ai-radius': 'Border radius style, controlled by radius prop',
    '--ai-size': 'Width, height, min-width and min-height styles, controlled by size prop',
  },

  modifiers: [
    { modifier: 'data-variant', selector: 'root', value: 'Value of variant prop' },
    { modifier: 'data-disabled', selector: 'root', condition: 'disabled prop is set' },
    { modifier: 'data-loading', selector: 'root', condition: 'loading prop is set' },
    { modifier: 'data-action-icon', selector: 'root' },
  ],
};

export const ActionIconGroupStylesApi: StylesApiData<ActionIconGroupFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    '--ai-border-width':
      'Controls border width of child ActionIcon components that are placed beside one another',
  },

  params: {
    borderWidth: 'Inferred from borderWidth prop',
    orientation: 'Inferred from orientation prop',
  },

  modifiers: [
    { modifier: 'data-orientation', selector: 'root', value: 'Value of orientation prop' },
  ],
};
