import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from '../../../core';
import classes from './InputPlaceholder.module.css';

export type InputPlaceholderStylesNames = 'placeholder';
export type InputPlaceholderVariant = string;

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
  variant: InputPlaceholderVariant;
}>;

const defaultProps: Partial<InputPlaceholderProps> = {};

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

  return (
    <Box {...getStyles('placeholder')} component="span" variant={variant} ref={ref} {...others} />
  );
});

InputPlaceholder.classes = classes;
InputPlaceholder.displayName = '@mantine/core/InputPlaceholder';
