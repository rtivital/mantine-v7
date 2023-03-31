import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  polymorphicFactory,
  useProps,
  useStyles,
  useVars,
  MantineRadius,
  getRadius,
} from '../../core';
import classes from './BackgroundImage.module.css';

export type BackgroundImageStylesNames = 'root';
export type BackgroundImageVariant = string;
export type BackgroundImageCssVariables = '--bi-radius';

export interface BackgroundImageStylesParams {
  radius: MantineRadius | string | number | undefined;
  variant: BackgroundImageVariant | undefined;
}

export interface BackgroundImageProps
  extends BoxProps,
    StylesApiProps<
      BackgroundImageStylesNames,
      BackgroundImageVariant,
      BackgroundImageCssVariables,
      BackgroundImageStylesParams
    > {
  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem (1rem = 16px), `0` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Image url */
  src: string;
}

export interface BackgroundImageFactory {
  props: BackgroundImageProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: BackgroundImageStylesNames;
  vars: BackgroundImageCssVariables;
  stylesParams: BackgroundImageStylesParams;
}

const defaultProps: Partial<BackgroundImageProps> = {
  radius: 0,
};

export const BackgroundImage = polymorphicFactory<BackgroundImageFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, radius, src, variant, ...others } =
    useProps('BackgroundImage', defaultProps, props);

  const getStyles = useStyles({
    name: 'BackgroundImage',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<BackgroundImageStylesParams>('BackgroundImage', vars, { radius, variant });

  return (
    <Box
      ref={ref}
      {...getStyles('root', { style: { backgroundImage: `url(${src})` } })}
      vars={{
        '--bi-radius': getRadius(radius),
        ..._vars,
      }}
      {...others}
    />
  );
});

BackgroundImage.displayName = '@mantine/core/BackgroundImage';
