import React from 'react';
import { screen } from '@testing-library/react';
import { tests, render } from '@mantine/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps = {};

describe('@mantine/core/Box', () => {
  tests.itSupportsSystemProps<BoxProps>({
    component: Box,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Box',
    providerName: null,
  });

  it('sets data-variant attribute based on variant prop', () => {
    render(<Box variant="test">test</Box>);
    expect(screen.getByText('test')).toHaveAttribute('data-variant', 'test');
  });
});
