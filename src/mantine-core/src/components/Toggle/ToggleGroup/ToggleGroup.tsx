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
} from '../../../core';
import classes from '../Toggle.module.css';

export type ToggleGroupStylesNames = 'group';
export type ToggleGroupCssVariables = {
  root: '--test';
};

export interface ToggleGroupProps
  extends BoxProps,
    StylesApiProps<ToggleGroupFactory>,
    ElementProps<'div'> {}

export type ToggleGroupFactory = Factory<{
  props: ToggleGroupProps;
  ref: HTMLDivElement;
  stylesNames: ToggleGroupStylesNames;
  vars: ToggleGroupCssVariables;
}>;

const defaultProps: Partial<ToggleGroupProps> = {};

const varsResolver = createVarsResolver<ToggleGroupFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const ToggleGroup = factory<ToggleGroupFactory>((_props, ref) => {
  const props = useProps('ToggleGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<ToggleGroupFactory>({
    name: 'ToggleGroup',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    rootSelector: 'group',
  });

  return <Box ref={ref} {...getStyles('group')} {...others} />;
});

ToggleGroup.classes = classes;
ToggleGroup.displayName = '@mantine/core/ToggleGroup';
