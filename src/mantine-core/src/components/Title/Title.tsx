import React from 'react';
import {
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  createVarsResolver,
  Factory,
} from '../../core';
import { Text, TextVariant, TextProps } from '../Text';
import { getTitleSize } from './get-title-size';
import classes from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = `h${TitleOrder}` | React.CSSProperties['fontSize'];

export type TitleStylesNames = 'root';
export type TitleVariant = TextVariant;
export type TitleCssVariables = '--title-fw' | '--title-lh' | '--title-fz';

export interface TitleProps
  extends Omit<TextProps, 'vars' | 'styles'>,
    StylesApiProps<TitleFactory>,
    ElementProps<'h1'> {
  /** Determines which tag will be used (h1-h6), controls `font-size` style if `size` prop is not set, `1` by default */
  order?: TitleOrder;

  /** Changes title size, if not set, then size is controlled by `order` prop */
  size?: TitleSize;
}

export type TitleFactory = Factory<{
  props: TitleProps;
  ref: HTMLHeadingElement;
  stylesNames: TitleStylesNames;
  vars: TitleCssVariables;
  variant: TitleVariant;
}>;

const defaultProps: Partial<TitleProps> = {
  order: 1,
};

const varsResolver = createVarsResolver<TitleFactory>((_, { order, size }) => {
  const sizeVariables = getTitleSize(order!, size);
  return {
    '--title-fw': sizeVariables.fontWeight,
    '--title-lh': sizeVariables.lineHeight,
    '--title-fz': sizeVariables.fontSize,
  };
});

export const Title = factory<TitleFactory>((_props, ref) => {
  const props = useProps('Title', defaultProps, _props);
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
  } = props;

  const getStyles = useStyles<TitleFactory>({
    name: 'Title',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<TitleFactory>({
    name: 'Title',
    resolver: varsResolver,
    vars,
    props,
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
