import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  createVarsResolver,
  PolymorphicFactory,
} from '../../core';
import classes from './Center.module.css';

export type CenterStylesNames = 'root';
export type CenterVariant = string;
export type CenterCssVariables = {
  root: '--center-display';
};

export interface CenterProps extends BoxProps, StylesApiProps<CenterFactory> {
  /** Content that should be centered vertically and horizontally */
  children?: React.ReactNode;

  /** Determines whether `inline-flex` should be used instead of `flex`, `false` by default */
  inline?: boolean;
}

export type CenterFactory = PolymorphicFactory<{
  props: CenterProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: CenterStylesNames;
  vars: CenterCssVariables;
  variant: CenterVariant;
}>;

const defaultProps: Partial<CenterProps> = {};

const varsResolver = createVarsResolver<CenterFactory>((_, { inline }) => ({
  root: { '--center-display': inline ? 'inline-flex' : 'flex' },
}));

export const Center = polymorphicFactory<CenterFactory>((_props, ref) => {
  const props = useProps('Center', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<CenterFactory>({
    name: 'Center',
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

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

Center.classes = classes;
Center.displayName = '@mantine/core/Center';
