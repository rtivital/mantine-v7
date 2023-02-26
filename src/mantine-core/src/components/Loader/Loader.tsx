import React from 'react';
import {
  Box,
  MantineSize,
  MantineColor,
  BoxProps,
  useComponentDefaultProps,
  useMantineTheme,
  parseThemeColor,
  StylesApiProps,
  useStylesApi,
} from '../../core';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';
import { MantineLoader } from './Loader.types';
import classes from './Loader.module.css';

export type LoaderStylesNames = 'root';
export type LoaderVariant = string;
export type LoaderCssVariables = '--mantine-loader-size';

const LOADERS = {
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
}

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
};

export function Loader(props: LoaderProps) {
  const { size, color, type, vars, className, style, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps('Loader', defaultProps, props);

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
  const loader = type! in LOADERS ? type! : theme.loader;
  const _loaderColor = parseThemeColor({ color: color || theme.primaryColor, theme });
  const loaderColor = _loaderColor.variable ? `var(${_loaderColor.variable})` : color;

  return (
    <Box
      {...getStyles('root')}
      component={LOADERS[loader] || LOADERS.bars}
      vars={{
        '--mantine-loader-size': 'blue',
        ...vars,
      }}
      size="5rem"
      color={loaderColor}
      {...others}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
