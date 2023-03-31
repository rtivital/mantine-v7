import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useVars,
  useStyles,
  MantineShadow,
  MantineRadius,
  getRadius,
  getShadow,
} from '../../core';
import classes from './Paper.module.css';

export type PaperStylesNames = 'root';
export type PaperVariant = string;
export type PaperCssVariables = '--paper-radius' | '--paper-shadow';

export interface PaperStylesParams {
  radius: MantineRadius | number | string | undefined;
  shadow: MantineShadow | string | undefined;
  variant: PaperVariant | undefined;
}

export interface PaperProps
  extends BoxProps,
    StylesApiProps<PaperStylesNames, PaperVariant, PaperCssVariables, PaperStylesParams> {
  /** Key of `theme.shadows` or any valid CSS value to set box-shadow, `none` by default */
  shadow?: MantineShadow | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem (1rem = 16px), `theme.defaultRadius` by default */
  radius?: MantineRadius | number | (string & {});

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
    variant,
    ...others
  } = useProps('Paper', defaultProps, props);

  const getStyles = useStyles({
    name: 'Paper',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<PaperStylesParams>('Paper', vars, { radius, shadow, variant });

  return (
    <Box
      ref={ref}
      mod={{ 'data-with-border': withBorder }}
      {...getStyles('root')}
      vars={{
        '--paper-radius': getRadius(radius),
        '--paper-shadow': getShadow(shadow),
        ..._vars,
      }}
      {...others}
    />
  );
});

Paper.displayName = '@mantine/core/Paper';
