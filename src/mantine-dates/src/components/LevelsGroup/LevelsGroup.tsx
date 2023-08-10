import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from '@mantine/core';
import classes from './LevelsGroup.module.css';

export type LevelsGroupStylesNames = 'levelsGroup';

export interface LevelsGroupProps
  extends BoxProps,
    StylesApiProps<LevelsGroupFactory>,
    ElementProps<'div'> {}

export type LevelsGroupFactory = Factory<{
  props: LevelsGroupProps;
  ref: HTMLDivElement;
  stylesNames: LevelsGroupStylesNames;
}>;

const defaultProps: Partial<LevelsGroupProps> = {};

export const LevelsGroup = factory<LevelsGroupFactory>((_props, ref) => {
  const props = useProps('LevelsGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<LevelsGroupFactory>({
    name: 'LevelsGroup',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    rootSelector: 'levelsGroup',
  });

  return <Box ref={ref} {...getStyles('levelsGroup')} {...others} />;
});

LevelsGroup.classes = classes;
LevelsGroup.displayName = '@mantine/dates/LevelsGroup';
