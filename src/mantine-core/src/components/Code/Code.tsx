import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  MantineColor,
  useVars,
  getThemeColor,
  createVarsResolver,
  Factory,
} from '../../core';
import classes from './Code.module.css';

export type CodeStylesNames = 'root';
export type CodeVariant = string;
export type CodeCssVariables = '--code-bg';

export interface CodeProps extends BoxProps, StylesApiProps<CodeFactory>, ElementProps<'code'> {
  /** Key of `theme.colors` or any valid CSS color, controls background color of the code, by default value is calculated based on color scheme */
  color?: MantineColor;

  /** If set code will be block instead of inline */
  block?: boolean;
}

export type CodeFactory = Factory<{
  props: CodeProps;
  ref: HTMLElement;
  stylesNames: CodeStylesNames;
  vars: CodeCssVariables;
  variant: CodeVariant;
}>;

const defaultProps: Partial<CodeProps> = {};

const varsResolver = createVarsResolver<CodeFactory>((theme, { color }) => ({
  '--code-bg': color ? getThemeColor(color, theme) : undefined,
}));

export const Code = factory<CodeFactory>((_props, ref) => {
  const props = useProps('Code', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, color, block, variant, ...others } =
    props;

  const getStyles = useStyles<CodeFactory>({
    name: 'Code',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<CodeFactory>({
    name: 'Code',
    resolver: varsResolver,
    props,
    vars,
  });

  return (
    <Box<any>
      component={block ? 'pre' : 'code'}
      variant={variant}
      ref={ref}
      {...getStyles('root')}
      mod={{ block }}
      vars={_vars}
      {...others}
      dir="ltr"
    />
  );
});

Code.displayName = '@mantine/core/Code';
