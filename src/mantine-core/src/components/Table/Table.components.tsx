import React from 'react';
import { Box, BoxProps, ElementProps, factory, useProps, FactoryPayload } from '../../core';
import { useTableContext, TableContextValue } from './Table.context';

export interface TableThProps extends BoxProps, ElementProps<'th'> {}
export interface TableTdProps extends BoxProps, ElementProps<'td'> {}
export interface TableTrProps extends BoxProps, ElementProps<'tr'> {}
export interface TableTheadProps extends BoxProps, ElementProps<'thead'> {}
export interface TableTbodyProps extends BoxProps, ElementProps<'tbody'> {}
export interface TableTfootProps extends BoxProps, ElementProps<'tfoot'> {}
export interface TableCaptionProps extends BoxProps, ElementProps<'caption'> {}

export interface TableThFactory {
  props: TableThProps;
  ref: HTMLTableCellElement;
}

export interface TableTdFactory {
  props: TableTdProps;
  ref: HTMLTableCellElement;
}

export interface TableTrFactory {
  props: TableTrProps;
  ref: HTMLTableRowElement;
}

export interface TableTheadFactory {
  props: TableTheadProps;
  ref: HTMLTableSectionElement;
}

export interface TableTbodyFactory {
  props: TableTbodyProps;
  ref: HTMLTableSectionElement;
}

export interface TableTfootFactory {
  props: TableTfootProps;
  ref: HTMLTableSectionElement;
}

export interface TableCaptionFactory {
  props: TableCaptionProps;
  ref: HTMLTableCaptionElement;
}

interface TableElementOptions {
  columnBorder?: true;
  rowBorder?: true;
  striped?: true;
  highlightOnHover?: true;
  captionSide?: true;
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
    data['data-striped'] = ctx.striped;
  }

  if (options.highlightOnHover && ctx.highlightOnHover) {
    data['data-hover'] = true;
  }

  if (options.captionSide && ctx.captionSide) {
    data['data-side'] = ctx.captionSide;
  }

  return data;
}

export function tableElement<Factory extends FactoryPayload>(
  element: 'th' | 'td' | 'tr' | 'thead' | 'tbody' | 'tfoot' | 'caption',
  options?: TableElementOptions
) {
  const name = `Table${element.charAt(0).toUpperCase()}${element.slice(1)}`;
  const Component = factory<Factory>((props, ref) => {
    const { classNames, className, style, styles, unstyled, ...others } = useProps(name, {}, props);

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
export const TableCaption = tableElement<TableCaptionFactory>('caption', { captionSide: true });
