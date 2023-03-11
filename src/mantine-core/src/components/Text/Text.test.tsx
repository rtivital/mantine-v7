import React from 'react';
import { render, tests } from '@mantine/tests';
import { Text, TextProps, TextStylesNames } from './Text';

const defaultProps: TextProps = {};

describe('@mantine/core/Text', () => {
  tests.itSupportsSystemProps<TextProps, TextStylesNames>({
    component: Text,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Text',
    stylesApiSelectors: ['root'],
  });
});
