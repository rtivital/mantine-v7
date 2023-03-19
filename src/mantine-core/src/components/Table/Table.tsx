import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useComponentDefaultProps,
  useStylesApi,
  useComponentVars,
  MantineColor,
  MantineSpacing,
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
export type TableCssVariables =
  | '--table-caption-side'
  | '--table-horizontal-spacing'
  | '--table-vertical-spacing';

export interface TableStylesParams {
  captionSide: 'top' | 'bottom' | undefined;
  horizontalSpacing: MantineSpacing | number | string | undefined;
  verticalSpacing: MantineSpacing | number | string | undefined;
}

export interface TableProps
  extends BoxProps,
    StylesApiProps<TableStylesNames, TableVariant, TableCssVariables>,
    ElementProps<'table'> {
  /** Determines on which side `Table.Caption` will be displayed, `bottom` by default */
  captionSide?: 'top' | 'bottom';

  /** Determines whether table should have outer border, `false` by default */
  withTableBorder?: boolean;

  /** Determines whether table should have borders between columns, `false` by default */
  withColumnBorders?: boolean;

  /** Determines whether table should have borders between rows, `true` by default */
  withRowBorders?: boolean;

  /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem (1rem = 16px), default value is `xs` */
  horizontalSpacing?: MantineSpacing | number | string;

  /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem (1rem = 16px), default value is `xs` */
  verticalSpacing?: MantineSpacing | number | string;

  /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
  striped?: boolean | 'odd' | 'even';

  /** Background color of striped rows, key of `theme.colors` or any valid CSS color, by default color is inferred from current color scheme */
  stripedColor?: MantineColor | string;

  /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
  highlightOnHover?: boolean;

  /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color, by default color is inferred from current color scheme */
  highlightOnHoverColor?: MantineColor | string;
}

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

const defaultProps: Partial<TableProps> = {
  captionSide: 'bottom',
  withRowBorders: true,
};

export const Table = factory<TableFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    horizontalSpacing,
    verticalSpacing,
    captionSide,
    ...others
  } = useComponentDefaultProps('Table', defaultProps, props);

  const _vars = useComponentVars<TableStylesParams>('Table', vars, {
    captionSide,
    horizontalSpacing,
    verticalSpacing,
  });

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
      <Box
        component="table"
        ref={ref}
        vars={{
          '--table-caption-side': captionSide,
          '--table-horizontal-spacing': horizontalSpacing,
          '--table-vertical-spacing': verticalSpacing,
          ..._vars,
        }}
        {...getStyles('root')}
        {...others}
      />
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
