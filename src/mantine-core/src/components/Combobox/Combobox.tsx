import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '../../core';
import { ComboboxProvider } from './Combobox.context';
import classes from './Combobox.module.css';

export type ComboboxStylesNames = 'root';
export type ComboboxVariant = string;
export type ComboboxCssVariables = {
  root: '--test';
};

export interface ComboboxProps
  extends BoxProps,
    StylesApiProps<ComboboxFactory>,
    ElementProps<'div'> {}

export type ComboboxFactory = Factory<{
  props: ComboboxProps;
  ref: HTMLDivElement;
  stylesNames: ComboboxStylesNames;
  vars: ComboboxCssVariables;
  variant: ComboboxVariant;
}>;

const defaultProps: Partial<ComboboxProps> = {};

const varsResolver = createVarsResolver<ComboboxFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export function Combobox(_props: ComboboxProps) {
  const props = useProps('Combobox', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, children } = props;

  const getStyles = useStyles<ComboboxFactory>({
    name: 'Combobox',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <ComboboxProvider value={{ getStyles }}>{children}</ComboboxProvider>;
}

Combobox.classes = classes;
Combobox.displayName = '@mantine/core/Combobox';
