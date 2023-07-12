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
    ElementProps<'div'> {}

export type AppShellNavbarFactory = Factory<{
  props: AppShellNavbarProps;
  ref: HTMLDivElement;
  stylesNames: AppShellNavbarStylesNames;
}>;

const defaultProps: Partial<AppShellNavbarProps> = {};

export const AppShellNavbar = factory<AppShellNavbarFactory>((_props, ref) => {
  const props = useProps('AppShellNavbar', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const ctx = useAppShellContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('navbar', { className, classNames, styles, style })}
      {...others}
    />
  );
});

AppShellNavbar.classes = classes;
AppShellNavbar.displayName = '@mantine/core/AppShellNavbar';
