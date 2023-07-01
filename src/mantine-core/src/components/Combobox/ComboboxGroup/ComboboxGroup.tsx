import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import { useComboboxContext } from '../Combobox.context';
import classes from '../Combobox.module.css';

export type ComboboxGroupStylesNames = 'group' | 'groupLabel';

export interface ComboboxGroupProps
  extends BoxProps,
    StylesApiProps<ComboboxGroupFactory>,
    ElementProps<'div'> {
  /** Group label */
  label?: React.ReactNode;
}

export type ComboboxGroupFactory = Factory<{
  props: ComboboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxGroupProps> = {};

export const ComboboxGroup = factory<ComboboxGroupFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, children, label, ...others } =
    useProps('ComboboxGroup', defaultProps, props);

  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('group', { className, classNames, style, styles })}
      {...others}
    >
      {label && <div {...ctx.getStyles('groupLabel', { classNames, styles })}>{label}</div>}
      {children}
    </Box>
  );
});

ComboboxGroup.classes = classes;
ComboboxGroup.displayName = '@mantine/core/ComboboxGroup';
