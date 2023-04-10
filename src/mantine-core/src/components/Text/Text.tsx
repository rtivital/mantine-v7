import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  MantineGradient,
  useStyles,
  useProps,
  useVars,
  getGradient,
  BoxMod,
  packMod,
  createVarsResolver,
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
export type TextCssVariables = '--text-gradient' | '--text-line-clamp';
export interface TextStylesParams {
  gradient: MantineGradient | undefined;
  lineClamp: number | undefined;
  variant: TextVariant | (string & {}) | undefined;
}

export interface TextProps
  extends BoxProps,
    StylesApiProps<TextStylesNames, TextVariant, TextCssVariables, TextStylesParams> {
  __staticSelector?: string;
  mod?: BoxMod;

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
  defaultRef: HTMLParagraphElement;
  stylesNames: TextStylesNames;
  vars: TextCssVariables;
  variant: TextVariant;
  stylesParams: TextStylesParams;
}

const defaultProps: Partial<TextProps> = {
  variant: 'text',
  inherit: true,
};

const varsResolver = createVarsResolver<TextCssVariables, TextStylesParams>(
  ({ variant, lineClamp, gradient }, theme) => ({
    '--text-gradient': variant === 'gradient' ? getGradient(gradient, theme) : undefined,
    '--text-line-clamp': typeof lineClamp === 'number' ? lineClamp.toString() : undefined,
  })
);

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
    mod,
    ...others
  } = useProps('Text', defaultProps, props);

  const _vars = useVars<TextStylesParams>('Text', varsResolver, vars, {
    lineClamp,
    gradient,
    variant,
  });

  const getStyles = useStyles({
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
      component={span ? 'span' : 'p'}
      variant={variant}
      mod={[
        {
          'data-truncate': getTextTruncate(truncate),
          'data-line-clamp': typeof lineClamp === 'number',
          'data-inline': inline,
          'data-inherit': inherit,
        },
        ...packMod(mod),
      ]}
      vars={_vars}
      {...others}
    />
  );
});

Text.displayName = '@mantine/core/Text';
