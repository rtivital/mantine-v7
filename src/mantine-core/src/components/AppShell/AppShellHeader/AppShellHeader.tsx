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
import classes from '../AppShell.module.css';
import { useAppShellContext } from '../AppShell.context';

export type AppShellHeaderStylesNames = 'header';
export type AppShellHeaderVariant = string;
export type AppShellHeaderCssVariables = {
  root: '--test';
};

export interface AppShellHeaderProps
  extends BoxProps,
    StylesApiProps<AppShellHeaderFactory>,
    ElementProps<'header'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;
}

export type AppShellHeaderFactory = Factory<{
  props: AppShellHeaderProps;
  ref: HTMLElement;
  stylesNames: AppShellHeaderStylesNames;
  vars: AppShellHeaderCssVariables;
  variant: AppShellHeaderVariant;
}>;

const defaultProps: Partial<AppShellHeaderProps> = {};

export const AppShellHeader = factory<AppShellHeaderFactory>((_props, ref) => {
  const props = useProps('AppShellHeader', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, withBorder, ...others } = props;
  const ctx = useAppShellContext();

  return (
    <Box
      component="header"
      ref={ref}
      mod={{ 'with-border': withBorder ?? ctx.withBorder }}
      {...ctx.getStyles('header')}
      {...others}
    />
  );
});

AppShellHeader.classes = classes;
AppShellHeader.displayName = '@mantine/core/AppShellHeader';
