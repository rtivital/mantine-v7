import React from 'react';
import {
  Box,
  MantineSize,
  MantineColor,
  BoxProps,
  useProps,
  useMantineTheme,
  getThemeColor,
  StylesApiProps,
  useStyles,
  factory,
  useVars,
  getSize,
  createVarsResolver,
  Factory,
} from '../../core';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';
import type { MantineLoader, MantineLoadersRecord } from './Loader.types';
import classes from './Loader.module.css';

export type LoaderStylesNames = 'root';
export type LoaderVariant = string;
export type LoaderCssVariables = '--loader-size' | '--loader-color';

export interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderFactory>,
    Omit<React.ComponentPropsWithoutRef<'svg'>, keyof BoxProps> {
  /** Width of the loader. Loader has predefined xs-xl values, number value (in px) ix converted to rem (1rem = 16px). */
  size?: MantineSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: MantineColor;

  /** Loader type, default value is `theme.loader` */
  type?: MantineLoader;

  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: MantineLoadersRecord;
}

export type LoaderFactory = Factory<{
  props: LoaderProps;
  ref: SVGSVGElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
}>;

export const defaultLoaders: MantineLoadersRecord = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  loaders: defaultLoaders,
};

const varsResolver = createVarsResolver<LoaderFactory>((theme, { size, color }) => ({
  '--loader-size': getSize(size, 'loader-size'),
  '--loader-color': getThemeColor(color, theme),
}));

export const Loader = factory<LoaderFactory>((_props, ref) => {
  const props = useProps('Loader', defaultProps, _props);
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
    variant,
    ...others
  } = props;

  const _vars = useVars<LoaderFactory>({
    name: 'Loader',
    resolver: varsResolver,
    vars,
    props,
  });

  const getStyles = useStyles<LoaderFactory>({
    name: 'Loader',
    props,
    classes,
    className,
    style,
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
      variant={variant}
      size={size}
      vars={_vars}
      {...others}
    />
  );
});

Loader.displayName = '@mantine/core/Loader';
