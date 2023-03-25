import React from 'react';
import { StylesApiProps, factory, ElementProps, useProps, useStylesApi, useVars } from '../../core';
import { Text, TextVariant, TextProps, TextCssVariables } from '../Text';
import { getTitleSize } from './get-title-size';
import classes from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'];

export type TitleStylesNames = 'root';
export type TitleVariant = TextVariant;
export type TitleCssVariables = '--title-fw' | '--title-lh' | '--title-fz' | TextCssVariables;

export interface TitleStylesParams {
  size: TitleSize | undefined;
  order: TitleOrder | undefined;
}

export interface TitleProps
  extends Omit<TextProps, 'vars'>,
    StylesApiProps<TitleStylesNames, TitleVariant, TitleCssVariables, TitleStylesParams>,
    ElementProps<'h1'> {
  /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
  order?: TitleOrder;

  /** Changes title size, if not set size is controlled by `order`  */
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

export const Title = factory<TitleFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, order, vars, inherit, size, ...others } =
    useProps('Title', defaultProps, props);

  const getStyles = useStylesApi({
    name: 'Title',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<TitleStylesParams>('Title', vars, {
    size,
    order,
  });

  const sizeVariables = getTitleSize(order!, size);

  if (![1, 2, 3, 4, 5, 6].includes(order!)) {
    return null;
  }

  return (
    <Text
      {...getStyles('root')}
      component={`h${order!}`}
      ref={ref}
      vars={{
        '--title-fw': sizeVariables.fontWeight,
        '--title-lh': sizeVariables.lineHeight,
        '--title-fz': sizeVariables.fontSize,
        ..._vars,
      }}
      inherit={inherit || false}
      data-order={order}
      {...others}
    />
  );
});

Title.displayName = '@mantine/core/Title';
