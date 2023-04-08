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
  rem,
  MantineRadius,
  getRadius,
} from '../../../core';
import classes from './SliderRoot.module.css';

export type SliderRootStylesNames = 'root';
export type SliderCssVariables =
  | '--slider-size'
  | '--slider-color'
  | '--slider-thumb-size'
  | '--slider-radius';
export type SliderVariant = string;

export interface SliderStylesParams {
  size: MantineSize | (string & {}) | number | undefined;
  color: MantineColor | undefined;
  thumbSize: string | number | undefined;
  radius: MantineRadius | (string & {}) | number | undefined;
  variant: SliderVariant | undefined;
}

export interface SliderRootProps
  extends BoxProps,
    StylesApiProps<SliderRootStylesNames, SliderVariant, SliderCssVariables, SliderStylesParams>,
    ElementProps<'div'> {
  size: MantineSize | (string & {}) | number;
  children: React.ReactNode;
  color: MantineColor | undefined;
  disabled: boolean | undefined;
  variant?: string;
  thumbSize: string | number | undefined;
  radius: MantineRadius | (string & {}) | number | undefined;
}

const varsResolver = createVarsResolver<SliderCssVariables, SliderStylesParams>(
  ({ size, color, thumbSize, radius }, theme) => ({
    '--slider-size': getSize(size, 'slider-size'),
    '--slider-color': getThemeColor(color, theme),
    '--slider-radius': getRadius(radius),
    '--slider-thumb-size':
      typeof thumbSize !== 'undefined' ? rem(thumbSize) : 'calc(var(--slider-size) * 2)',
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
      thumbSize,
      radius,
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

    const _vars = useVars('Slider', varsResolver, vars, {
      size,
      color,
      thumbSize,
      variant,
      radius,
    });

    return (
      <Box
        tabIndex={-1}
        variant={variant}
        size={size}
        vars={_vars}
        ref={ref}
        {...getStyles('root')}
        {...others}
      />
    );
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
