import type { ActionIconFactory, ActionIconGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ActionIconStylesApi: StylesApiData<ActionIconFactory> = {
  selectors: {
    root: 'Root element',
    loader: 'Loader component, rendered inside root element when loading prop is set',
  },

  vars: {
    root: {
      '--ai-bg': 'Controls background',
      '--ai-bd': 'Control border',
      '--ai-hover': 'Controls background when hovered',
      '--ai-color': 'Control color',
      '--ai-radius': 'Controls border-radius',
      '--ai-size': 'Controls width, height, min-width and min-height styles',
    },
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
    root: {
      '--ai-border-width':
        'Controls border width of child ActionIcon components that are placed beside one another',
    },
  },

  modifiers: [
    { modifier: 'data-orientation', selector: 'root', value: 'Value of orientation prop' },
  ],
};
