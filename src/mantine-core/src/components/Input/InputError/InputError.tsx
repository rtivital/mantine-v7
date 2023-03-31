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
  MantineSize,
  getFontSize,
  rem,
} from '../../../core';
import classes from './InputError.module.css';

export type InputErrorStylesNames = 'error';
export type InputErrorVariant = string;
export type InputErrorCssVariables = '--input-error-size';

export interface InputErrorStylesParams {
  size: MantineSize | (string & {}) | undefined;
  variant: InputErrorVariant | undefined;
}

export interface InputErrorProps
  extends BoxProps,
    StylesApiProps<InputErrorStylesNames, InputErrorVariant, InputErrorCssVariables>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Controls error `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export interface InputErrorFactory {
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
  stylesParams: InputErrorStylesParams;
}

const defaultProps: Partial<InputErrorProps> = {
  size: 'sm',
};

export const InputError = factory<InputErrorFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant,
    ...others
  } = useProps('InputError', defaultProps, props);

  const getStyles = useStyles<InputErrorStylesNames>({
    name: ['InputWrapper', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'error',
  });

  const _vars = useVars<InputErrorStylesParams>('InputError', vars, {
    size,
    variant,
  });

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      {...getStyles('error')}
      vars={{
        '--input-error-size': `calc(${getFontSize(size)} - ${rem(2)})`,
        ..._vars,
      }}
      {...others}
    />
  );
});

InputError.displayName = '@mantine/core/InputError';
