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
  useRandomClassName,
  InlineStyles,
} from '../../core';
import classes from './SimpleGrid.module.css';

export type SimpleGridStylesNames = 'root';
export type SimpleGridCssVariables = {
  root: '--test';
};

export interface SimpleGridProps
  extends BoxProps,
    StylesApiProps<SimpleGridFactory>,
    ElementProps<'div'> {}

export type SimpleGridFactory = Factory<{
  props: SimpleGridProps;
  ref: HTMLDivElement;
  stylesNames: SimpleGridStylesNames;
  vars: SimpleGridCssVariables;
}>;

const defaultProps: Partial<SimpleGridProps> = {};

const varsResolver = createVarsResolver<SimpleGridFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const SimpleGrid = factory<SimpleGridFactory>((_props, ref) => {
  const props = useProps('SimpleGrid', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const responsiveClassName = useRandomClassName();

  const getStyles = useStyles<SimpleGridFactory>({
    name: 'SimpleGrid',
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

  return (
    <>
      <InlineStyles selector={`.${responsiveClassName}`} styles={{}} media={[]} />
      <Box ref={ref} {...getStyles('root')} {...others} />
    </>
  );
});

SimpleGrid.classes = classes;
SimpleGrid.displayName = '@mantine/core/SimpleGrid';
