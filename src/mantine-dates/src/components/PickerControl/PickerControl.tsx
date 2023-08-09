import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  UnstyledButton,
} from '@mantine/core';

export interface PickerControlProps
  extends BoxProps,
    StylesApiProps<PickerControlFactory>,
    ElementProps<'button'> {
  /** Control children */
  children?: React.ReactNode;

  /** Determines whether control should be disabled */
  disabled?: boolean;

  /** Determines whether control should have selected styles */
  selected?: boolean;

  /** Determines whether control is selected in range */
  inRange?: boolean;

  /** Determines whether control is first in range selection */
  firstInRange?: boolean;

  /** Determines whether control is last in range selection */
  lastInRange?: boolean;
}

export type PickerControlFactory = Factory<{
  props: PickerControlProps;
  ref: HTMLButtonElement;
}>;

const defaultProps: Partial<PickerControlProps> = {};

export const PickerControl = factory<PickerControlFactory>((_props, ref) => {
  const props = useProps('PickerControl', defaultProps, _props);
  const { children, disabled, selected, inRange, firstInRange, lastInRange, vars, ...others } =
    props;

  return (
    <UnstyledButton
      ref={ref}
      data-picker-control
      data-selected={(selected && !disabled) || undefined}
      data-disabled={disabled || undefined}
      data-in-range={(inRange && !disabled && !selected) || undefined}
      data-first-in-range={(firstInRange && !disabled) || undefined}
      data-last-in-range={(lastInRange && !disabled) || undefined}
      disabled={disabled}
      {...others}
    >
      {children}
    </UnstyledButton>
  );
});

PickerControl.displayName = '@mantine/core/PickerControl';
