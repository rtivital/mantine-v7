import type { AlertFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AlertStylesApi: StylesApiData<AlertFactory> = {
  selectors: {
    root: 'Root element',
    wrapper: 'Wraps body and icon',
    body: 'Body element, wraps title and message',
    title: 'Title element, contains label and icon',
    label: 'Title label',
    message: 'Alert message, defined by children',
    icon: 'Icon wrapper',
    closeButton: 'Close button, defined by withCloseButton prop',
  },

  vars: {
    root: {
      '--alert-bd': 'Controls border',
      '--alert-bg': 'Controls background color',
      '--alert-color': 'Controls text color',
      '--alert-radius': 'Controls border-radius',
    },
  },

  modifiers: [
    {
      modifier: 'data-with-close-button',
      selector: 'title',
      condition: '`withCloseButton` prop is set',
    },
  ],
};
