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
import {
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableTr,
  TableThead,
} from './Table.components';
import { TableProvider } from './Table.context';
import classes from './Table.module.css';

export type TableStylesNames =
  | 'root'
  | 'thead'
  | 'tbody'
  | 'tfoot'
  | 'tr'
  | 'th'
  | 'td'
  | 'caption';

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
  staticComponents: {
    Thead: typeof TableThead;
    Tbody: typeof TableTbody;
    Tfoot: typeof TableTfoot;
    Td: typeof TableTd;
    Th: typeof TableTh;
    Tr: typeof TableTr;
    Caption: typeof TableCaption;
  };
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

  return (
    <TableProvider value={{ getStyles }}>
      <Box component="table" ref={ref} {...getStyles('root')} {...others} />
    </TableProvider>
  );
});

Table.displayName = '@mantine/core/Table';
Table.Td = TableTd;
Table.Th = TableTh;
Table.Tr = TableTr;
Table.Thead = TableThead;
Table.Tbody = TableTbody;
Table.Tfoot = TableTfoot;
Table.Caption = TableCaption;
