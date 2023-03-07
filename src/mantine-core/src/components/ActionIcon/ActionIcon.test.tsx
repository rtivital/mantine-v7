import React from 'react';
import { tests, render } from '@mantine/tests';
import { ActionIcon, ActionIconProps, ActionIconStylesNames } from './ActionIcon';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';

const defaultProps: ActionIconProps = {};

describe('@mantine/core/ActionIcon', () => {
  tests.itSupportsFocusEvents<ActionIconProps>({
    component: ActionIcon,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<ActionIconProps, ActionIconStylesNames>({
    component: ActionIcon,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/ActionIcon',
    stylesApiSelectors: ['root'],
  });

  it('sets data-loading attribute when loading prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon loading />);
    expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    rerender(<ActionIcon loading={false} />);
    expect(container.querySelector('[data-loading]')).not.toBeInTheDocument();
  });

  it('sets data-disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon disabled />);
    expect(container.querySelector('[data-disabled]')).toBeInTheDocument();
    rerender(<ActionIcon disabled={false} />);
    expect(container.querySelector('[data-disabled]')).not.toBeInTheDocument();
  });

  it('sets data-variant attribute', () => {
    const { container, rerender } = render(<ActionIcon variant="light" />);
    expect(container.querySelector('[data-variant="light"]')).toBeInTheDocument();
    rerender(<ActionIcon variant="filled" />);
    expect(container.querySelector('[data-variant="filled"]')).toBeInTheDocument();
  });

  it('has data-action-icon attribute', () => {
    const { container } = render(<ActionIcon />);
    expect(container.querySelector('[data-action-icon]')).toBeInTheDocument();
  });

  it('sets disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon disabled />);
    expect(container.querySelector('button')).toHaveAttribute('disabled');
    rerender(<ActionIcon disabled={false} />);
    expect(container.querySelector('button')).not.toHaveAttribute('disabled');
  });

  it('exposes ActionIcon.Group component', () => {
    expect(ActionIcon.Group).toBe(ActionIconGroup);
  });
});
