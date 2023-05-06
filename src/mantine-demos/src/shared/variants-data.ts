import { ConfiguratorControlOptions } from '@mantine/ds';

export const STATIC_VARIANTS = [
  'filled',
  'light',
  'outline',
  'transparent',
  'white',
  'default',
  'gradient',
];

export const INTERACTIVE_VARIANTS = [
  'filled',
  'light',
  'outline',
  'transparent',
  'white',
  'subtle',
  'default',
  'gradient',
];

export const interactiveVariantsControl: ConfiguratorControlOptions = {
  type: 'select',
  prop: 'variant',
  data: INTERACTIVE_VARIANTS,
  initialValue: 'filled',
  libraryValue: 'filled',
};

export const staticVariantsControl: ConfiguratorControlOptions = {
  type: 'select',
  prop: 'variant',
  data: STATIC_VARIANTS,
  initialValue: 'filled',
  libraryValue: 'filled',
};
