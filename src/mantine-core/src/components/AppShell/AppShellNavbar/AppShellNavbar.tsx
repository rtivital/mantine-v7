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

export type AppShellNavbarStylesNames = 'navbar';

export interface AppShellNavbarProps
  extends BoxProps,
    StylesApiProps<AppShellNavbarFactory>,
    ElementProps<'div'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;
}

export type AppShellNavbarFactory = Factory<{
  props: AppShellNavbarProps;
  ref: HTMLElement;
  stylesNames: AppShellNavbarStylesNames;
}>;

const defaultProps: Partial<AppShellNavbarProps> = {};

export const AppShellNavbar = factory<AppShellNavbarFactory>((_props, ref) => {
  const props = useProps('AppShellNavbar', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, withBorder, ...others } = props;
  const ctx = useAppShellContext();

  return (
    <Box
      component="nav"
      ref={ref}
      mod={{ 'with-border': withBorder ?? ctx.withBorder, collapsed: ctx.navbarCollapsed }}
      {...ctx.getStyles('navbar', { className, classNames, styles, style })}
      {...others}
    />
  );
});

AppShellNavbar.classes = classes;
AppShellNavbar.displayName = '@mantine/core/AppShellNavbar';
