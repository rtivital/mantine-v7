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
    wrapper: {
      '--cp-body-spacing': 'Controls spacing between sliders and saturation',
      '--cp-preview-size': 'Controls size of the preview swatch',
      '--cp-width': 'Controls width of the root element',
      '--cp-swatch-size': 'Controls swatch width and height',
      '--cp-thumb-size': 'Controls thumb width and height in all sliders and saturation picker',
      '--cp-saturation-height': 'Controls height of the saturation picker',
    },
  },
};
