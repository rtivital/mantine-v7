import type { InputFactory, InputWrapperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const InputStylesApi: StylesApiData<InputFactory> = {
  selectors: {
    wrapper: 'Root element, contains input and left/right sections',
    input: 'Input element itself',
    leftSection: 'Left section',
    rightSection: 'Right section',
  },

  params: [
    'radius',
    'size',
    'variant',
    'leftSectionPointerEvents',
    'leftSectionWidth',
    'multiline',
    'offsetBottom',
    'offsetTop',
    'rightSectionPointerEvents',
    'rightSectionWidth',
  ],

  vars: {
    '--input-fz': 'font-size of the input element',
    '--input-height': 'height or min-height of the input element (depends on multiline prop)',
    '--input-left-section-width': 'width of the left section',
    '--input-right-section-width': 'width of the right section',
    '--input-margin-bottom':
      'margin-bottom of the input element, usually controlled by Input.Wrapper',
    '--input-margin-top': 'margin-top of the input element, usually controlled by Input.Wrapper',
    '--input-padding-y': 'padding-top and padding-bottom of the input element',
    '--input-radius': 'border-radius of the input element',
    '--input-left-section-pointer-events': 'Controls pointer-events of the left section',
    '--input-right-section-pointer-events': 'Controls pointer-events of the right section',
  },

  modifiers: [
    { modifier: 'data-error', selector: ['wrapper', 'input'], condition: 'error prop is set' },
    { modifier: 'data-disabled', selector: 'input', condition: 'disabled prop is set' },
    {
      modifier: 'data-with-right-section',
      selector: 'wrapper',
      condition: 'rightSection prop is set',
    },
    {
      modifier: 'data-with-left-section',
      selector: 'wrapper',
      condition: 'leftSection prop is set',
    },
    { modifier: 'data-multiline', selector: 'wrapper', condition: 'multiline prop is set' },
    { modifier: 'data-pointer', selector: 'wrapper', condition: 'pointer prop is set' },
  ],
};

export const InputWrapperStylesApi: StylesApiData<InputWrapperFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Label element',
    required: 'Required asterisk element, rendered inside label',
    description: 'Description element',
    error: 'Error element',
  },
};
