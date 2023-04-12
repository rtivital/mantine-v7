import type { CloseButtonFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ActionIconStylesApi } from './ActionIcon.styles-api';

export const CloseButtonStylesApi: StylesApiData<CloseButtonFactory> = {
  ...ActionIconStylesApi,
  vars: {
    '--cb-icon-size': 'Size of close icon, controlled by iconSize prop',
  },
};
