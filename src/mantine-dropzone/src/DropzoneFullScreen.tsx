import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '@mantine/core';
import classes from './Dropzone.module.css';

export type DropzoneFullScreenStylesNames = 'root';
export type DropzoneFullScreenVariant = string;
export type DropzoneFullScreenCssVariables = {
  root: '--test';
};

export interface DropzoneFullScreenProps
  extends BoxProps,
    StylesApiProps<DropzoneFullScreenFactory>,
    ElementProps<'div'> {}

export type DropzoneFullScreenFactory = Factory<{
  props: DropzoneFullScreenProps;
  ref: HTMLDivElement;
  stylesNames: DropzoneFullScreenStylesNames;
  vars: DropzoneFullScreenCssVariables;
  variant: DropzoneFullScreenVariant;
}>;

const defaultProps: Partial<DropzoneFullScreenProps> = {};

const varsResolver = createVarsResolver<DropzoneFullScreenFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const DropzoneFullScreen = factory<DropzoneFullScreenFactory>((_props, ref) => {
  const props = useProps('DropzoneFullScreen', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<DropzoneFullScreenFactory>({
    name: 'DropzoneFullScreen',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box ref={ref} {...getStyles('root')} {...others} />;
});

DropzoneFullScreen.displayName = '@mantine/core/DropzoneFullScreen';

export type DropzoneFullScreenType = typeof DropzoneFullScreen;
