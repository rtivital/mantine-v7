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
import { useAppShellContext } from '../AppShell.context';
import classes from '../AppShell.module.css';

export type AppShellSectionStylesNames = 'section';

export interface AppShellSectionProps
  extends BoxProps,
    StylesApiProps<AppShellSectionFactory>,
    ElementProps<'div'> {
  /** Determines whether the section should take all available space, `false` by default */
  grow?: boolean;
}

export type AppShellSectionFactory = Factory<{
  props: AppShellSectionProps;
  ref: HTMLDivElement;
  stylesNames: AppShellSectionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AppShellSectionProps> = {};

export const AppShellSection = factory<AppShellSectionFactory>((_props, ref) => {
  const props = useProps('AppShellSection', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, grow, ...others } = props;
  const ctx = useAppShellContext();

  return (
    <Box
      ref={ref}
      mod={{ grow }}
      {...ctx.getStyles('section', { className, style, classNames, styles })}
      {...others}
    />
  );
});

AppShellSection.classes = classes;
AppShellSection.displayName = '@mantine/core/AppShellSection';
