import React from 'react';
import { factory, useProps, Factory } from '../../../core';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxDropdownStylesNames = 'dropdown';

export interface ComboboxDropdownProps extends PopoverDropdownProps {}

export type ComboboxDropdownFactory = Factory<{
  props: ComboboxDropdownProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxDropdownStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxDropdownProps> = {};

export const ComboboxDropdown = factory<ComboboxDropdownFactory>((props, ref) => {
  const ctx = useComboboxContext();
  const { classNames, styles, className, style, ...others } = useProps(
    'ComboboxDropdown',
    defaultProps,
    props
  );

  return (
    <Popover.Dropdown
      {...others}
      ref={ref}
      {...others}
      role="presentation"
      tabIndex={-1}
      {...ctx.getStyles('dropdown', { className, style, classNames, styles })}
    />
  );
});

ComboboxDropdown.classes = classes;
ComboboxDropdown.displayName = '@mantine/core/ComboboxDropdown';
