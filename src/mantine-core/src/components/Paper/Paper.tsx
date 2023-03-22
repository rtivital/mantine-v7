import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useComponentDefaultProps,
  useComponentVars,
  useStylesApi,
  MantineShadow,
  MantineRadius,
  getRadius,
  getShadow,
  useMantineTheme,
} from '../../core';
import classes from './Paper.module.css';

export type PaperStylesNames = 'root';
export type PaperVariant = string;
export type PaperCssVariables = '--paper-radius' | '--paper-shadow';

export interface PaperStylesParams {
  radius: MantineRadius | number | string | undefined;
  shadow: MantineShadow | string | undefined;
}

export interface PaperProps
  extends BoxProps,
    StylesApiProps<PaperStylesNames, PaperVariant, PaperCssVariables> {
  /** Key of `theme.shadows` or any valid CSS value to set box-shadow, `none` by default */
  shadow?: MantineShadow | string;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem (1rem = 16px), `theme.defaultRadius` by default */
  radius?: MantineRadius | number | string;

  /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
  withBorder?: boolean;
}

export interface PaperFactory {
  props: PaperProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: PaperStylesNames;
  vars: PaperCssVariables;
  stylesParams: PaperStylesParams;
}

const defaultProps: Partial<PaperProps> = {};

export const Paper = polymorphicFactory<PaperFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    ...others
  } = useComponentDefaultProps('Paper', defaultProps, props);

  const theme = useMantineTheme();

  const getStyles = useStylesApi({
    name: 'Paper',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useComponentVars<PaperStylesParams>('Paper', vars, { radius, shadow });

  return (
    <Box
      ref={ref}
      data-with-border={withBorder || undefined}
      {...getStyles('root')}
      vars={{
        '--paper-radius': getRadius(theme, radius),
        '--paper-shadow': getShadow(shadow),
        ..._vars,
      }}
      {...others}
    />
  );
});

Paper.displayName = '@mantine/core/Paper';
