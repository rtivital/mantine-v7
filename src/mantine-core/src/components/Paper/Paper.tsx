import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  MantineShadow,
  MantineRadius,
  getRadius,
  getShadow,
  createVarsResolver,
  PolymorphicFactory,
} from '../../core';
import classes from './Paper.module.css';

export type PaperStylesNames = 'root';
export type PaperVariant = string;
export type PaperCssVariables = {
  root: '--paper-radius' | '--paper-shadow';
};

export interface PaperProps extends BoxProps, StylesApiProps<PaperFactory> {
  /** Key of `theme.shadows` or any valid CSS value to set box-shadow, `none` by default */
  shadow?: MantineShadow | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius | number | (string & {});

  /** Determines whether the paper should have border, border color depends on color scheme, `false` by default */
  withBorder?: boolean;
}

export type PaperFactory = PolymorphicFactory<{
  props: PaperProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: PaperStylesNames;
  vars: PaperCssVariables;
}>;

const defaultProps: Partial<PaperProps> = {};

const varsResolver = createVarsResolver<PaperFactory>((_, { radius, shadow }) => ({
  root: {
    '--paper-radius': getRadius(radius),
    '--paper-shadow': getShadow(shadow),
  },
}));

export const Paper = polymorphicFactory<PaperFactory>((_props, ref) => {
  const props = useProps('Paper', defaultProps, _props);
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
  } = props;

  const getStyles = useStyles<PaperFactory>({
    name: 'Paper',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      ref={ref}
      mod={{ 'data-with-border': withBorder }}
      {...getStyles('root')}
      variant={variant}
      {...others}
    />
  );
});

Paper.displayName = '@mantine/core/Paper';
