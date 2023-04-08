import React from 'react';
import { tests } from '@mantine/tests';
import { SliderRoot, SliderRootProps, SliderRootStylesNames } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  color: 'blue',
  thumbSize: 10,
  radius: 10,
  disabled: false,
};

describe('@mantine/core/SliderRoot', () => {
  tests.itSupportsSystemProps<SliderRootProps, SliderRootStylesNames>({
    component: SliderRoot,
    props: defaultProps,
    styleProps: true,
    children: true,
    variant: true,
    size: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SliderRoot',
    stylesApiName: 'Slider',
    providerName: null,
    stylesApiSelectors: ['root'],
  });
});
