import type { TitleFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { TextStylesApi } from './Text.styles-api';

export const TitleStylesApi: StylesApiData<TitleFactory> = {
  ...TextStylesApi,

  vars: {
    '--title-fw': 'Title font-weight, by default value from theme.headings',
    '--title-fz': 'Title font-size, by default value from theme.headings',
    '--title-lh': 'Title line-height, by default value from theme.headings',
    ...TextStylesApi.vars,
  },

  params: ['order', 'size'],

  modifiers: [
    ...TextStylesApi.modifiers!,
    { modifier: 'data-order', selector: 'root', value: 'Value of order prop' },
  ],
};
