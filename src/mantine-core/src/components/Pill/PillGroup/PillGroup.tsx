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
  MantineSize,
  getSize,
} from '../../../core';
import classes from './PillGroup.module.css';

export type PillGroupStylesNames = 'root';
export type PillGroupCssVariables = {
  root: '--pg-gap' | '--pg-height';
};

export interface PillGroupProps
  extends BoxProps,
    StylesApiProps<PillGroupFactory>,
    ElementProps<'div'> {
  /** Controls spacing between pills, by default controlled by `size` */
  gap?: MantineSize | (string & {}) | number;

  /** Controls height of the group, `'sm'` by default */
  size?: MantineSize;
}

export type PillGroupFactory = Factory<{
  props: PillGroupProps;
  ref: HTMLDivElement;
  stylesNames: PillGroupStylesNames;
  vars: PillGroupCssVariables;
}>;

const defaultProps: Partial<PillGroupProps> = {};

const varsResolver = createVarsResolver<PillGroupFactory>((_, { gap, size }) => ({
  root: {
    '--pg-gap': typeof gap !== 'undefined' ? getSize(gap) : getSize(size, 'pg-gap'),
    '--pg-height': getSize(size, 'pg-height'),
  },
}));

export const PillGroup = factory<PillGroupFactory>((_props, ref) => {
  const props = useProps('PillGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<PillGroupFactory>({
    name: 'PillGroup',
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

PillGroup.classes = classes;
PillGroup.displayName = '@mantine/core/PillGroup';
