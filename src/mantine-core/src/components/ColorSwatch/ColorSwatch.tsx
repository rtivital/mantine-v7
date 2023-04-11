import React from 'react';
import {
  Box,
  BoxProps,
  MantineRadius,
  StylesApiProps,
  getRadius,
  polymorphicFactory,
  rem,
  useProps,
  useStyles,
  useVars,
  createVarsResolver,
} from '../../core';
import classes from './ColorSwatch.module.css';

export type ColorSwatchStylesNames =
  | 'root'
  | 'alphaOverlay'
  | 'shadowOverlay'
  | 'colorOverlay'
  | 'childrenOverlay';
export type ColorSwatchVariant = string;
export type ColorSwatchCssVariables = '--cs-radius' | '--cs-size';

export interface ColorSwatchStylesParams {
  radius: MantineRadius | (string & {}) | number | undefined;
  size: React.CSSProperties['width'] | undefined;
  variant: ColorSwatchVariant | undefined;
}

export interface ColorSwatchProps
  extends BoxProps,
    StylesApiProps<ColorSwatchStylesNames, ColorSwatchVariant, ColorSwatchCssVariables> {
  /** Color to display */
  color: string;

  /** Width and height of the swatch, any valid CSS value, numbers are converted to rem (1rem = 16px), `'1.75rem'` by default */
  size?: React.CSSProperties['width'];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem (1rem = 16px), `'1.75rem'` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Determines whether the swatch should have inner box-shadow, `true` by default */
  withShadow?: boolean;

  /** Content rendered inside the swatch */
  children?: React.ReactNode;
}

export interface ColorSwatchFactory {
  props: ColorSwatchProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: ColorSwatchStylesNames;
  vars: ColorSwatchCssVariables;
  stylesParams: ColorSwatchStylesParams;
}

const defaultProps: Partial<ColorSwatchProps> = {
  size: '1.75rem',
  radius: '1.75rem',
  withShadow: true,
};

const varsResolver = createVarsResolver<ColorSwatchCssVariables, ColorSwatchStylesParams>(
  ({ radius, size }) => ({
    '--cs-radius': getRadius(radius),
    '--cs-size': rem(size),
  })
);

export const ColorSwatch = polymorphicFactory<ColorSwatchFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    size,
    radius,
    withShadow,
    children,
    variant,
    ...others
  } = useProps('ColorSwatch', defaultProps, props);

  const getStyles = useStyles({
    name: 'ColorSwatch',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<ColorSwatchStylesParams>('ColorSwatch', varsResolver, vars, {
    size,
    radius,
    variant,
  });

  return (
    <Box
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('root', { focusable: true })}
      vars={_vars}
      {...others}
    >
      <span {...getStyles('alphaOverlay')} />
      {withShadow && <span {...getStyles('shadowOverlay')} />}
      <span {...getStyles('colorOverlay', { style: { backgroundColor: color } })} />
      <span {...getStyles('childrenOverlay')}>{children}</span>
    </Box>
  );
});

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
