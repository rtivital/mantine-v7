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
  PolymorphicFactory,
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

export interface TextProps extends BoxProps, StylesApiProps<TextFactory> {
  __staticSelector?: string;
  __size?: any;
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

export type TextFactory = PolymorphicFactory<{
  props: TextProps;
  defaultComponent: 'div';
  defaultRef: HTMLParagraphElement;
  stylesNames: TextStylesNames;
  vars: TextCssVariables;
  variant: TextVariant;
}>;

const defaultProps: Partial<TextProps> = {
  variant: 'text',
  inherit: true,
};

const varsResolver = createVarsResolver<TextFactory>((theme, { variant, lineClamp, gradient }) => ({
  '--text-gradient': variant === 'gradient' ? getGradient(gradient, theme) : undefined,
  '--text-line-clamp': typeof lineClamp === 'number' ? lineClamp.toString() : undefined,
}));

export const Text = polymorphicFactory<TextFactory>((_props, ref) => {
  const props = useProps('Text', defaultProps, _props);
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
    __size,
    ...others
  } = useProps('Text', defaultProps, props);

  const _vars = useVars<TextFactory>({
    name: 'Text',
    resolver: varsResolver,
    vars,
    props,
  });

  const getStyles = useStyles<TextFactory>({
    name: ['Text', __staticSelector],
    props,
    classes,
    className,
    style,
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
      size={__size}
      {...others}
    />
  );
});

Text.displayName = '@mantine/core/Text';
