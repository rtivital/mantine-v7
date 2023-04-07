import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useVars,
  useStyles,
  MantineColor,
  createVarsResolver,
} from '../../core';
import { getMarkColor } from './get-mark-color';
import classes from './Mark.module.css';

export type MarkStylesNames = 'root';
export type MarkVariant = string;
export type MarkCssVariables = '--mark-bg-dark' | '--mark-bg-light';

export interface MarkStylesParams {
  color: MantineColor | undefined;
  variant: MarkVariant | undefined;
}

export interface MarkProps
  extends BoxProps,
    StylesApiProps<MarkStylesNames, MarkVariant, MarkCssVariables, MarkStylesParams>,
    ElementProps<'mark'> {
  /** Key of `theme.colors` or any valid CSS color, `yellow` by default */
  color?: MantineColor;
}

export interface MarkFactory {
  props: MarkProps;
  ref: HTMLElement;
  stylesNames: MarkStylesNames;
  vars: MarkCssVariables;
  stylesParams: MarkStylesParams;
}

const defaultProps: Partial<MarkProps> = {
  color: 'yellow',
};

const varsResolver = createVarsResolver<MarkCssVariables, MarkStylesParams>(({ color }, theme) => ({
  '--mark-bg-dark': getMarkColor({ color, theme, defaultShade: 5 }),
  '--mark-bg-light': getMarkColor({ color, theme, defaultShade: 2 }),
}));

export const Mark = factory<MarkFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, color, variant, ...others } =
    useProps('Mark', defaultProps, props);

  const getStyles = useStyles({
    name: 'Mark',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<MarkStylesParams>('Mark', varsResolver, vars, { color, variant });

  return (
    <Box
      component="mark"
      ref={ref}
      variant={variant}
      {...getStyles('root')}
      vars={_vars}
      {...others}
    />
  );
});

Mark.displayName = '@mantine/core/Mark';
