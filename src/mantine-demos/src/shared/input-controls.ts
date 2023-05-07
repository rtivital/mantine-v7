import { ConfiguratorControlOptions } from '@mantine/ds';

export const inputOnlyControls: ConfiguratorControlOptions[] = [
  {
    type: 'segmented',
    prop: 'variant',
    data: ['default', 'filled', 'unstyled'],
    initialValue: 'default',
    libraryValue: 'default',
  },
  { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
  { type: 'boolean', prop: 'disabled', initialValue: false, libraryValue: false },
  { type: 'boolean', prop: 'error', initialValue: false, libraryValue: false },
];
