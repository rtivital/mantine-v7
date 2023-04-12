import type { ColorPickerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ColorPickerStylesApi: StylesApiData<ColorPickerFactory> = {
  selectors: {
    wrapper: 'Root element',
    preview: 'Color preview, displayed only for color formats that support alpha channel',
    body: 'Contains alpha and hue sliders and preview',
    slider: 'Alpha and Hue sliders root',
    sliderOverlay: 'Element used to display various overlays over Hue and Alpha sliders',
    saturation: 'Saturation picker',
    saturationOverlay: 'Element used to display various overlays over saturation picker',
    sliders: 'Contains Alpha and Hue sliders',
    thumb: 'Saturation, AlphaSlider and HueSlider thumb',
    swatch: 'Color swatch',
    swatches: 'Color swatches list',
  },

  vars: {
    '--cp-body-spacing': '',
    '--cp-preview-size': 'Controls size of the swatch',
    '--cp-width': 'Controls width of the root element',
  },
};
