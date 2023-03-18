import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useComponentDefaultProps,
  useStylesApi,
} from '../../core';
import classes from './Table.module.css';

export type TableStylesNames = 'root';
export type TableVariant = string;
export type TableCssVariables = '--test';

export interface TableStylesParams {}

export interface TableProps
  extends BoxProps,
    StylesApiProps<TableStylesNames, TableVariant, TableCssVariables>,
    ElementProps<'table'> {}

export interface TableFactory {
  props: TableProps;
  ref: HTMLTableElement;
  stylesNames: TableStylesNames;
  vars: TableCssVariables;
  stylesParams: TableStylesParams;
}

const defaultProps: Partial<TableProps> = {};

export const Table = factory<TableFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, ...others } = useComponentDefaultProps(
    'Table',
    defaultProps,
    props
  );

  const getStyles = useStylesApi({
    name: 'Table',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return <Box component="table" ref={ref} {...getStyles('root')} {...others} />;
});

Table.displayName = '@mantine/core/Table';
