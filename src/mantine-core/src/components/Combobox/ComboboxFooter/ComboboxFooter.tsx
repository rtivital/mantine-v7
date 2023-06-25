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

export type ComboboxFooterStylesNames = 'footer';

export interface ComboboxFooterProps
  extends BoxProps,
    StylesApiProps<ComboboxFooterFactory>,
    ElementProps<'div'> {}

export type ComboboxFooterFactory = Factory<{
  props: ComboboxFooterProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxFooterStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ComboboxFooterProps> = {};

export const ComboboxFooter = factory<ComboboxFooterFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } = useProps(
    'ComboboxFooter',
    defaultProps,
    props
  );
  const ctx = useComboboxContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('footer', { className, classNames, style, styles })}
      {...others}
    />
  );
});

ComboboxFooter.classes = classes;
ComboboxFooter.displayName = '@mantine/core/ComboboxFooter';
