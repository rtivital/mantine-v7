import React, { forwardRef } from 'react';
import {
  Box,
  MantineSize,
  MantineColor,
  BoxProps,
  useComponentDefaultProps,
  useMantineTheme,
  getThemeColor,
  StylesApiProps,
  useStylesApi,
  isNumberLike,
  rem,
} from '../../core';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';
import type { MantineLoader, MantineLoadersRecord } from './Loader.types';
import classes from './Loader.module.css';

export type LoaderStylesNames = 'root';
export type LoaderVariant = string;
export type LoaderCssVariables = '--mantine-loader-size' | '--mantine-loader-color';

export const defaultLoaders: MantineLoadersRecord = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

export interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderStylesNames, LoaderVariant, LoaderCssVariables>,
    Omit<React.ComponentPropsWithoutRef<'svg'>, keyof BoxProps> {
  /** Width of the loader. Loader has predefined xs-xl values, number value (in px) ix converted to rem (1rem = 16px). */
  size?: MantineSize | string | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor | string;

  /** Loader type, default value is `theme.loader` */
  type?: MantineLoader;

  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: MantineLoadersRecord;
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  loaders: defaultLoaders,
};

export const Loader = forwardRef<SVGSVGElement, LoaderProps>((props, ref) => {
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    ...others
  } = useComponentDefaultProps('Loader', defaultProps, props);

  const getStyles = useStylesApi({
    name: 'Loader',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const theme = useMantineTheme();
  const loader = type! in loaders! ? type! : theme.loader;

  return (
    <Box
      {...getStyles('root')}
      ref={ref}
      component={loaders![loader]}
      vars={{
        '--mantine-loader-size': isNumberLike(size)
          ? rem(size)
          : `var(--mantine-loader-size-${size})`,
        '--mantine-loader-color': getThemeColor(color, theme),
        ...vars,
      }}
      {...others}
    />
  );
});

Loader.displayName = '@mantine/core/Loader';
