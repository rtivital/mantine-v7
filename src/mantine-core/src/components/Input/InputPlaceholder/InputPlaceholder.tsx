import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  createVarsResolver,
  Factory,
} from '../../../core';
import classes from './InputPlaceholder.module.css';

export type InputPlaceholderStylesNames = 'placeholder';
export type InputPlaceholderVariant = string;
export type InputPlaceholderCssVariables = '--input-placeholder-color';

export interface InputPlaceholderProps
  extends BoxProps,
    StylesApiProps<InputPlaceholderFactory>,
    ElementProps<'span'> {
  __staticSelector?: string;
}

export type InputPlaceholderFactory = Factory<{
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
  vars: InputPlaceholderCssVariables;
  variant: InputPlaceholderVariant;
}>;

const defaultProps: Partial<InputPlaceholderProps> = {};

const varsResolver = createVarsResolver<InputPlaceholderFactory>(() => ({
  '--input-placeholder-color': 'var(--mantine-color-placeholder)',
}));

export const InputPlaceholder = factory<InputPlaceholderFactory>((_props, ref) => {
  const props = useProps('InputPlaceholder', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    ...others
  } = useProps('InputPlaceholder', defaultProps, props);

  const getStyles = useStyles<InputPlaceholderFactory>({
    name: ['InputPlaceholder', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'placeholder',
  });

  const _vars = useVars<InputPlaceholderFactory>({
    name: 'InputPlaceholder',
    resolver: varsResolver,
    props,
    vars,
  });

  return (
    <Box
      {...getStyles('placeholder')}
      component="span"
      variant={variant}
      ref={ref}
      vars={_vars}
      {...others}
    />
  );
});

InputPlaceholder.displayName = '@mantine/core/InputPlaceholder';
