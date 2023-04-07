import React, { forwardRef } from 'react';
import {
  useStyles,
  StylesApiProps,
  BoxProps,
  Box,
  ElementProps,
  MantineSize,
  useVars,
  createVarsResolver,
  getSize,
  MantineColor,
  getThemeColor,
} from '../../../core';
import classes from './SliderRoot.module.css';

export type SliderRootStylesNames = 'root';
export type SliderCssVariables = '--slider-size' | '--slider-color';
export type SliderVariant = string;

export interface SliderStylesParams {
  size: MantineSize | (string & {}) | number | undefined;
  color: MantineColor | undefined;
}

export interface SliderRootProps
  extends BoxProps,
    StylesApiProps<SliderRootStylesNames, SliderVariant, SliderCssVariables, SliderStylesParams>,
    ElementProps<'div'> {
  size: MantineSize | (string & {});
  children: React.ReactNode;
  color: MantineColor | undefined;
  disabled: boolean;
  variant: string;
}

const varsResolver = createVarsResolver<SliderCssVariables, SliderStylesParams>(
  ({ size, color }, theme) => ({
    '--slider-size': getSize(size, 'slider-size'),
    '--slider-color': getThemeColor(color, theme),
  })
);

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  (
    {
      className,
      style,
      size,
      classNames,
      styles,
      disabled,
      unstyled,
      variant,
      vars,
      color,
      ...others
    }: SliderRootProps,
    ref
  ) => {
    const getStyles = useStyles({
      name: 'Slider',
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
    });

    const _vars = useVars('Slider', varsResolver, vars, { size, color });

    return <Box {...others} tabIndex={-1} {...getStyles('root')} vars={_vars} ref={ref} />;
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
