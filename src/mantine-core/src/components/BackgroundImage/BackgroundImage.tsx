import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  MantineRadius,
  getRadius,
  createVarsResolver,
  PolymorphicFactory,
} from '../../core';
import classes from './BackgroundImage.module.css';

export type BackgroundImageStylesNames = 'root';
export type BackgroundImageVariant = string;
export type BackgroundImageCssVariables = {
  root: '--bi-radius';
};

export interface BackgroundImageProps extends BoxProps, StylesApiProps<BackgroundImageFactory> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem (1rem = 16px), `0` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Image url */
  src: string;
}

export type BackgroundImageFactory = PolymorphicFactory<{
  props: BackgroundImageProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  variant: BackgroundImageVariant;
  stylesNames: BackgroundImageStylesNames;
  vars: BackgroundImageCssVariables;
}>;

const defaultProps: Partial<BackgroundImageProps> = {
  radius: 0,
};

const varsResolver = createVarsResolver<BackgroundImageFactory>((_, { radius }) => ({
  root: { '--bi-radius': getRadius(radius) },
}));

export const BackgroundImage = polymorphicFactory<BackgroundImageFactory>((_props, ref) => {
  const props = useProps('BackgroundImage', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, radius, src, variant, ...others } =
    props;

  const getStyles = useStyles<BackgroundImageFactory>({
    name: 'BackgroundImage',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box
      ref={ref}
      variant={variant}
      {...getStyles('root', { style: { backgroundImage: `url(${src})` } })}
      {...others}
    />
  );
});

BackgroundImage.displayName = '@mantine/core/BackgroundImage';
