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
  getGradient,
  useMantineTheme,
} from '../../core';
import classes from './Text.module.css';

type TextTruncate = 'end' | 'start' | true;

function getTextTruncate(truncate: TextTruncate | undefined) {
  if (truncate === 'start') {
    return 'start';
  }

  if (truncate === 'end' || truncate) {
    return 'end';
  }

  return undefined;
}

export type TextStylesNames = 'root';
export type TextVariant = 'text' | 'gradient';
export type TextCssVariables = '--gradient' | '--line-clamp';
export interface TextStylesParams {
  gradient: MantineGradient | undefined;
  lineClamp: number | undefined;
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
  props: TextProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: TextStylesNames;
  vars: TextCssVariables;
  variant: TextVariant;
  stylesParams: TextStylesParams;
}

const defaultProps: Partial<TextProps> = {
  variant: 'text',
  inherit: true,
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
    variant,
    ...others
  } = useComponentDefaultProps('Text', defaultProps, props);

  const theme = useMantineTheme();

  const _vars = useComponentVars<TextStylesParams>('Text', vars, {
    lineClamp,
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
      data-variant={variant}
      data-truncate={getTextTruncate(truncate)}
      data-line-clamp={typeof lineClamp === 'number' || undefined}
      data-inline={inline || undefined}
      data-inherit={inherit || undefined}
      vars={{
        ..._vars,
        '--gradient': variant === 'gradient' ? getGradient(theme, gradient) : undefined,
        '--line-clamp': typeof lineClamp === 'number' ? lineClamp.toString() : undefined,
      }}
      {...others}
    />
  );
});

Text.displayName = '@mantine/core/Text';
