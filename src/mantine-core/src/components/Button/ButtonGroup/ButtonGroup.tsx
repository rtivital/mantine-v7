import React from 'react';
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useProps,
  useStyles,
  rem,
  createVarsResolver,
  Factory,
} from '../../../core';
import classes from './ButtonGroup.module.css';

export type ButtonGroupStylesNames = 'root';
export type ButtonGroupVariant = string;
export type ButtonGroupCssVariables = {
  root: '--button-border-width';
};

export interface ButtonGroupProps extends BoxProps, StylesApiProps<ButtonGroupFactory> {
  /** `Button` components */
  children?: React.ReactNode;

  /** Orientation of the group, `horizontal` by default */
  orientation?: 'horizontal' | 'vertical';

  /** `border-width` of the child `Button` components. Numbers are converted to rem. Default value in `1`. */
  borderWidth?: number | string;
}

export type ButtonGroupFactory = Factory<{
  props: ButtonGroupProps;
  ref: HTMLDivElement;
  variant: ButtonGroupVariant;
  stylesNames: ButtonGroupStylesNames;
  vars: ButtonGroupCssVariables;
}>;

const defaultProps: Partial<ButtonGroupProps> = {
  orientation: 'horizontal',
  borderWidth: 1,
};

const varsResolver = createVarsResolver<ButtonGroupFactory>((_, { borderWidth }) => ({
  root: { '--button-border-width': rem(borderWidth) },
}));

export const ButtonGroup = factory<ButtonGroupFactory>((_props, ref) => {
  const props = useProps('ButtonGroup', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    ...others
  } = useProps('ButtonGroup', defaultProps, _props);

  const getStyles = useStyles<ButtonGroupFactory>({
    name: 'ButtonGroup',
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
      {...getStyles('root')}
      ref={ref}
      variant={variant}
      mod={{ 'data-orientation': orientation }}
      role="group"
      {...others}
    />
  );
});

ButtonGroup.displayName = '@mantine/core/ButtonGroup';
