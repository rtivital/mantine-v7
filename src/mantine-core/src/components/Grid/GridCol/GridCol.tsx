import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  StyleProp,
} from '../../../core';
import classes from '../Grid.module.css';
import { useGridContext } from '../Grid.context';

export type GridColStylesNames = 'col';

export interface GridColProps
  extends BoxProps,
    StylesApiProps<GridColFactory>,
    ElementProps<'div'> {
  /** Column span, `12` by default */
  span?: StyleProp<number>;

  /** Column order, can be used to reorder columns at different viewport sizes */
  order?: StyleProp<number>;

  /** Column offset on the left side – number of columns that should be left empty before this column */
  offset?: StyleProp<number>;
}

export type GridColFactory = Factory<{
  props: GridColProps;
  ref: HTMLDivElement;
  stylesNames: GridColStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GridColProps> = {
  span: 12,
};

export const GridCol = factory<GridColFactory>((_props, ref) => {
  const props = useProps('GridCol', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const ctx = useGridContext();
  return (
    <Box
      ref={ref}
      {...ctx.getStyles('col', { className, style, classNames, styles })}
      {...others}
    />
  );
});

GridCol.classes = classes;
GridCol.displayName = '@mantine/core/GridCol';
