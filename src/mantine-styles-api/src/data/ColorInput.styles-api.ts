import type { ColorInputFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';
import { ColorPickerStylesApi } from './ColorPicker.styles-api';

export const ColorInputStylesApi: StylesApiData<ColorInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ColorPickerStylesApi.selectors,
    dropdown: '',
    colorPreview: '',
    eyeDropperButton: '',
    eyeDropperIcon: '',
  },

  vars: {
    colorPreview: {
      '--ci-preview-size': 'Controls `width` and `height` of color preview',
    },

    eyeDropperIcon: {
      '--ci-eye-dropper-icon-size': 'Controls width and height of the eye dropper icon',
    },
  },
};
