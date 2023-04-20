import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineColor,
  getThemeColor,
  parseThemeColor,
  rgba,
} from '../../core';
import classes from './Blockquote.module.css';

export type BlockquoteStylesNames = 'root' | 'icon';
export type BlockquoteVariant = string;
export type BlockquoteCssVariables = {
  root: '--bq-bg-light' | '--bq-bg-dark' | '--bq-bd';
};

export interface BlockquoteProps
  extends BoxProps,
    StylesApiProps<BlockquoteFactory>,
    ElementProps<'blockquote'> {
  /** Blockquote icon, displayed on the top left */
  icon?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;
}

export type BlockquoteFactory = Factory<{
  props: BlockquoteProps;
  ref: HTMLQuoteElement;
  stylesNames: BlockquoteStylesNames;
  vars: BlockquoteCssVariables;
  variant: BlockquoteVariant;
}>;

const defaultProps: Partial<BlockquoteProps> = {};

const varsResolver = createVarsResolver<BlockquoteFactory>((theme, { color }) => {
  const darkParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: 'dark',
  });

  const lightParsed = parseThemeColor({
    color: color || theme.primaryColor,
    theme,
    colorScheme: 'light',
  });

  return {
    root: {
      '--bq-bg-light': rgba(lightParsed.value, 0.1),
      '--bq-bg-dark': rgba(darkParsed.value, 0.1),
      '--bq-bd': getThemeColor(color, theme),
    },
  };
});

export const Blockquote = factory<BlockquoteFactory>((_props, ref) => {
  const props = useProps('Blockquote', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, children, ...others } = props;

  const getStyles = useStyles<BlockquoteFactory>({
    name: 'Blockquote',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box component="blockquote" ref={ref} {...getStyles('root')} {...others}>
      {children}
    </Box>
  );
});

Blockquote.displayName = '@mantine/core/Blockquote';
