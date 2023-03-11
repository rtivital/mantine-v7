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

  it('adds data-truncate attribute based on truncate prop', () => {
    const { container, rerender } = render(<Text truncate="start" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'start');

    rerender(<Text truncate="end" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'end');

    rerender(<Text truncate data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'end');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).not.toHaveAttribute('data-truncate');
  });
});
