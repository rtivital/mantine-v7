import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  MantineGradient,
  useStylesApi,
  useComponentDefaultProps,
  useComponentVars,
} from '../../core';
import classes from './Text.module.css';

export type TextStylesNames = 'root';
export type TextVariant = 'text' | 'gradient';
export type TextCssVariables = '--placeholder';
export interface TextStylesParams {
  gradient: MantineGradient | undefined;
  lineClamp: number | undefined;
  truncate: 'end' | 'start' | true | undefined;
  inline: boolean | undefined;
  inherit: boolean | undefined;
}

export interface TextProps
  extends BoxProps,
    StylesApiProps<TextStylesNames, TextVariant, TextCssVariables, TextStylesParams> {
  __staticSelector?: string;

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** CSS truncate overflowing text with an ellipsis */
  truncate?: 'end' | 'start' | true;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

  /** Shorthand for component="span" */
  span?: boolean;
}

export interface TextFactory {
  props: Record<string, any>;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames?: TextStylesNames;
  vars?: TextCssVariables;
  variant?: TextVariant;
  stylesParams?: TextStylesParams;
}

const defaultProps: Partial<TextProps> = {
  variant: 'text',
};

export const Text = polymorphicFactory<TextFactory>((props, ref) => {
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('Text', defaultProps, props);

  const _vars = useComponentVars<TextStylesParams>('Text', vars, {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
  });

  const getStyles = useStylesApi({
    name: ['Text', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return (
    <Box
      {...getStyles('root', { focusable: true })}
      ref={ref}
      component={span ? 'span' : 'div'}
      vars={{
        ..._vars,
      }}
      {...others}
    />
  );
});

Text.displayName = '@mantine/core/Text';
