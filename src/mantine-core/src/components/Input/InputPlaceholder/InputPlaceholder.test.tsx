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
} from '../../../core';
import classes from './InputPlaceholder.module.css';

export type InputPlaceholderStylesNames = 'placeholder';
export type InputPlaceholderVariant = string;
export type InputPlaceholderCssVariables = '--input-placeholder-color';

export interface InputPlaceholderStylesParams {}

export interface InputPlaceholderProps
  extends BoxProps,
    StylesApiProps<
      InputPlaceholderStylesNames,
      InputPlaceholderVariant,
      InputPlaceholderCssVariables
    >,
    ElementProps<'span'> {
  __staticSelector?: string;
}

export interface InputPlaceholderFactory {
  props: InputPlaceholderProps;
  ref: HTMLSpanElement;
  stylesNames: InputPlaceholderStylesNames;
  vars: InputPlaceholderCssVariables;
  stylesParams: InputPlaceholderStylesParams;
}

const defaultProps: Partial<InputPlaceholderProps> = {};

export const InputPlaceholder = factory<InputPlaceholderFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, __staticSelector, ...others } =
    useProps('InputPlaceholder', defaultProps, props);

  const getStyles = useStyles({
    name: ['InputPlaceholder', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<InputPlaceholderStylesParams>('InputPlaceholder', vars, {});

  return (
    <Box
      {...getStyles('placeholder')}
      component="span"
      ref={ref}
      vars={{
        '--input-placeholder-color': 'var(--mantine-color-placeholder)',
        ..._vars,
      }}
      {...others}
    />
  );
});

InputPlaceholder.displayName = '@mantine/core/InputPlaceholder';
