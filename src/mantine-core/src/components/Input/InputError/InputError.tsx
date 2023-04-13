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
  createVarsResolver,
  Factory,
} from '../../../core';
import { useInputWrapperContext } from '../InputWrapper.context';
import classes from '../InputWrapper/InputWrapper.module.css';

export type InputErrorStylesNames = 'error';
export type InputErrorVariant = string;
export type InputErrorCssVariables = '--input-error-size';

export interface InputErrorProps
  extends BoxProps,
    StylesApiProps<InputErrorFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Controls error `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export type InputErrorFactory = Factory<{
  props: InputErrorProps;
  ref: HTMLParagraphElement;
  stylesNames: InputErrorStylesNames;
  vars: InputErrorCssVariables;
  variant: InputErrorVariant;
}>;

const defaultProps: Partial<InputErrorProps> = {
  size: 'sm',
};

const varsResolver = createVarsResolver<InputErrorFactory>((_, { size }) => ({
  '--input-error-size': `calc(${getFontSize(size)} - ${rem(2)})`,
}));

export const InputError = factory<InputErrorFactory>((_props, ref) => {
  const props = useProps('InputError', defaultProps, _props);
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

  const _getStyles = useStyles<InputErrorFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'error',
  });

  const ctx = useInputWrapperContext();
  const getStyles = ctx.getStyles || _getStyles;

  const _vars = useVars<InputErrorFactory>({
    name: 'InputError',
    resolver: varsResolver,
    props,
    vars,
  });

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('error')}
      vars={_vars}
      {...others}
    />
  );
});

InputError.displayName = '@mantine/core/InputError';
