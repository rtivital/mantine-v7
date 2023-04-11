import React from 'react';
import {
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  createVarsResolver,
} from '../../core';
import { Text, TextVariant, TextProps } from '../Text';
import { getTitleSize } from './get-title-size';
import classes from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'];

export type TitleStylesNames = 'root';
export type TitleVariant = TextVariant;
export type TitleCssVariables = '--title-fw' | '--title-lh' | '--title-fz';

export interface TitleStylesParams {
  size: TitleSize | undefined;
  order: TitleOrder | undefined;
  variant: TitleVariant | (string & {}) | undefined;
}

export interface TitleProps
  extends Omit<TextProps, 'vars'>,
    StylesApiProps<TitleStylesNames, TitleVariant, TitleCssVariables, TitleStylesParams>,
    ElementProps<'h1'> {
  /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
  order?: TitleOrder;

  /** Changes title size, if not set, then size is controlled by `order` prop */
  size?: TitleSize;
}

export interface TitleFactory {
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
  stylesParams: TitleStylesParams;
}

const defaultProps: Partial<TitleProps> = {
  order: 1,
};

const varsResolver = createVarsResolver<TitleCssVariables, TitleStylesParams>(({ order, size }) => {
  const sizeVariables = getTitleSize(order!, size);
  return {
    '--title-fw': sizeVariables.fontWeight,
    '--title-lh': sizeVariables.lineHeight,
    '--title-fz': sizeVariables.fontSize,
  };
});

export const Title = factory<TitleFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    inherit,
    size,
    variant,
    ...others
  } = useProps('Title', defaultProps, props);

  const getStyles = useStyles({
    name: 'Title',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<TitleStylesParams>('Title', varsResolver, vars, {
    size,
    order,
    variant,
  });

  if (![1, 2, 3, 4, 5, 6].includes(order!)) {
    return null;
  }

  return (
    <Text
      {...getStyles('root')}
      component={`h${order!}`}
      variant={variant}
      ref={ref}
      vars={_vars}
      inherit={inherit || false}
      {...others}
      mod={{ order }}
      __size={size}
    />
  );
});

Title.displayName = '@mantine/core/Title';
