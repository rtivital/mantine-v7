import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  ElementProps,
  factory,
  useComponentDefaultProps,
  FactoryPayload,
} from '../../core';
import { useTableContext, TableContextValue } from './Table.context';

export interface TableElementProps<Selector extends string>
  extends BoxProps,
    StylesApiProps<Selector> {}

export interface TableThProps extends TableElementProps<'th'>, ElementProps<'th'> {}
export interface TableTdProps extends TableElementProps<'td'>, ElementProps<'td'> {}
export interface TableTrProps extends TableElementProps<'tr'>, ElementProps<'tr'> {}
export interface TableTheadProps extends TableElementProps<'thead'>, ElementProps<'thead'> {}
export interface TableTbodyProps extends TableElementProps<'tbody'>, ElementProps<'tbody'> {}
export interface TableTfootProps extends TableElementProps<'tfoot'>, ElementProps<'tfoot'> {}
export interface TableCaptionProps extends TableElementProps<'caption'>, ElementProps<'caption'> {}

export interface TableThFactory {
  props: TableThProps;
  ref: HTMLTableCellElement;
  stylesNames: 'th';
}

export interface TableTdFactory {
  props: TableTdProps;
  ref: HTMLTableCellElement;
  stylesNames: 'td';
}

export interface TableTrFactory {
  props: TableTrProps;
  ref: HTMLTableRowElement;
  stylesNames: 'tr';
}

export interface TableTheadFactory {
  props: TableTheadProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'thead';
}

export interface TableTbodyFactory {
  props: TableTbodyProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tbody';
}

export interface TableTfootFactory {
  props: TableTfootProps;
  ref: HTMLTableSectionElement;
  stylesNames: 'tfoot';
}

export interface TableCaptionFactory {
  props: TableCaptionProps;
  ref: HTMLTableCaptionElement;
  stylesNames: 'caption';
}

interface TableElementOptions {
  columnBorder?: true;
  rowBorder?: true;
  striped?: true;
  highlightOnHover?: true;
}

function getDataAttributes(ctx: TableContextValue, options?: TableElementOptions) {
  if (!options) {
    return undefined;
  }

  const data: Record<string, boolean | string> = {};

  if (options.columnBorder && ctx.withColumnBorders) {
    data['data-with-column-border'] = true;
  }

  if (options.rowBorder && ctx.withRowBorders) {
    data['data-with-row-border'] = true;
  }

  if (options.striped && ctx.striped) {
    data['data-striped'] = true;
  }

  if (options.highlightOnHover && ctx.highlightOnHover) {
    data['data-hover'] = true;
  }

  return data;
}

export function tableElement<Factory extends FactoryPayload>(
  element: 'th' | 'td' | 'tr' | 'thead' | 'tbody' | 'tfoot' | 'caption',
  options?: TableElementOptions
) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = factory<Factory>((props, ref) => {
    const { classNames, className, style, styles, unstyled, ...others } = useComponentDefaultProps(
      name,
      {},
      props
    );

    const ctx = useTableContext();

    return (
      <Box
        component={element}
        ref={ref}
        {...getDataAttributes(ctx, options)}
        {...ctx.getStyles(element, { className, classNames, style, styles })}
        {...others}
      />
    );
  });

  Component.displayName = `@mantine/core/${name}`;
  return Component;
}

export const TableTh = tableElement<TableThFactory>('th', { columnBorder: true });
export const TableTd = tableElement<TableTdFactory>('td', { columnBorder: true });
export const TableTr = tableElement<TableTrFactory>('tr', {
  rowBorder: true,
  striped: true,
  highlightOnHover: true,
});
export const TableThead = tableElement<TableTheadFactory>('thead');
export const TableTbody = tableElement<TableTbodyFactory>('tbody');
export const TableTfoot = tableElement<TableTfootFactory>('tfoot');
export const TableCaption = tableElement<TableCaptionFactory>('caption');
