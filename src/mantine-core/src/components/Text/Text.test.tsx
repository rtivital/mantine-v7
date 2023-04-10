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
    refType: HTMLParagraphElement,
    displayName: '@mantine/core/Text',
    stylesApiSelectors: ['root'],
  });

  it('sets data-truncate attribute based on truncate prop', () => {
    const { container, rerender } = render(<Text truncate="start" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'start');

    rerender(<Text truncate="end" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'end');

    rerender(<Text truncate data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-truncate', 'end');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).not.toHaveAttribute('data-truncate');
  });

  it('sets data-variant attribute based on variant prop', () => {
    const { container, rerender } = render(<Text variant="text" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-variant', 'text');

    rerender(<Text variant="gradient" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-variant', 'gradient');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-variant', 'text');
  });

  it('sets data-inline attribute based on inline prop', () => {
    const { container, rerender } = render(<Text inline data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-inline');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).not.toHaveAttribute('data-inline');
  });

  it('sets data-inherit attribute based on inherit prop', () => {
    const { container, rerender } = render(<Text inherit data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-inherit');

    rerender(<Text data-test inherit={false} />);
    expect(container.querySelector('[data-test]')).not.toHaveAttribute('data-inherit');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-inherit');
  });

  it('sets data-line-clamp attribute based on lineClamp prop', () => {
    const { container, rerender } = render(<Text lineClamp={3} data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-line-clamp');

    rerender(<Text data-test />);
    expect(container.querySelector('[data-test]')).not.toHaveAttribute('data-line-clamp');
  });

  it('changes root element to span if span prop is set', () => {
    const { container } = render(<Text span data-test />);
    expect(container.querySelector('[data-test]')!.nodeName.toLowerCase()).toBe('span');
  });
});
