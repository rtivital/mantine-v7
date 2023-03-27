import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineColor,
  MantineSpacing,
  getSpacing,
  useMantineTheme,
  getThemeColor,
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
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tfoot'
  | 'tr'
  | 'th'
  | 'td'
  | 'caption';

export type TableVariant = string;
export type TableCssVariables =
  | '--table-layout'
  | '--table-border-color'
  | '--table-caption-side'
  | '--table-horizontal-spacing'
  | '--table-vertical-spacing'
  | '--table-striped-color'
  | '--table-highlight-on-hover-color';

export interface TableStylesParams {
  borderColor: MantineColor | string | undefined;
  captionSide: 'top' | 'bottom' | undefined;
  horizontalSpacing: MantineSpacing | number | string | undefined;
  verticalSpacing: MantineSpacing | number | string | undefined;
  stripedColor: MantineColor | string | undefined;
  highlightOnHoverColor: MantineColor | string | undefined;
  layout: React.CSSProperties['tableLayout'] | undefined;
}

export interface TableProps
  extends BoxProps,
    StylesApiProps<TableStylesNames, TableVariant, TableCssVariables, TableStylesParams>,
    ElementProps<'table'> {
  /** Value of `table-layout` style, `unset` by default */
  layout?: React.CSSProperties['tableLayout'];

  /** Determines on which side `Table.Caption` is displayed, `bottom` by default */
  captionSide?: 'top' | 'bottom';

  /** Color of border, key of `theme.colors` or any valid CSS color, by default inferred from current color scheme */
  borderColor?: MantineColor;

  /** Determines whether the table should have outer border, `false` by default */
  withTableBorder?: boolean;

  /** Determines whether the table should have borders between columns, `false` by default */
  withColumnBorders?: boolean;

  /** Determines whether the table should have borders between rows, `true` by default */
  withRowBorders?: boolean;

  /** Horizontal cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem (1rem = 16px), default value is `xs` */
  horizontalSpacing?: MantineSpacing | number | (string & {});

  /** Vertical cells spacing, key of `theme.spacing` or any valid CSS value for padding, numbers are converted to rem (1rem = 16px), default value is `xs` */
  verticalSpacing?: MantineSpacing | number | (string & {});

  /** Determines whether every odd/even row background should be changed to `strippedColor`, if set to `true`, then `odd` value will be used, `false` by default  */
  striped?: boolean | 'odd' | 'even';

  /** Background color of striped rows, key of `theme.colors` or any valid CSS color, by default color is inferred from current color scheme */
  stripedColor?: MantineColor;

  /** Determines whether table rows background should change to `highlightOnHoverColor` when hovered, `false` by default */
  highlightOnHover?: boolean;

  /** Background color of table rows when hovered, key of `theme.colors` or any valid CSS color, by default color is inferred from current color scheme */
  highlightOnHoverColor?: MantineColor;
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
  verticalSpacing: 7,
  horizontalSpacing: 'xs',
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
    stripedColor,
    highlightOnHoverColor,
    striped,
    highlightOnHover,
    withColumnBorders,
    withRowBorders,
    withTableBorder,
    borderColor,
    layout,
    ...others
  } = useProps('Table', defaultProps, props);

  const theme = useMantineTheme();

  const _vars = useVars<TableStylesParams>('Table', vars, {
    layout,
    borderColor,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    stripedColor,
    highlightOnHoverColor,
  });

  const getStyles = useStyles<TableStylesNames>({
    name: 'Table',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'table',
  });

  return (
    <TableProvider
      value={{
        getStyles,
        striped: striped === true ? 'odd' : striped || undefined,
        highlightOnHover,
        withColumnBorders,
        withRowBorders,
        captionSide: captionSide || 'bottom',
      }}
    >
      <Box
        component="table"
        ref={ref}
        data-with-table-border={withTableBorder || undefined}
        vars={{
          '--table-layout': layout,
          '--table-caption-side': captionSide,
          '--table-horizontal-spacing': getSpacing(horizontalSpacing),
          '--table-vertical-spacing': getSpacing(verticalSpacing),
          '--table-border-color': borderColor ? getThemeColor(borderColor, theme) : undefined,
          '--table-striped-color':
            striped && stripedColor ? getThemeColor(stripedColor, theme) : undefined,
          '--table-highlight-on-hover-color':
            highlightOnHover && highlightOnHoverColor
              ? getThemeColor(highlightOnHoverColor, theme)
              : undefined,
          ..._vars,
        }}
        {...getStyles('table')}
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
