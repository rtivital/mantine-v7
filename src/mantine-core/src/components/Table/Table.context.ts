import { createSafeContext, GetStylesApi } from '../../core';
import type { TableStylesNames } from './Table';

export interface TableContextValue {
  getStyles: GetStylesApi<TableStylesNames>;
  striped: 'odd' | 'even' | undefined;
  highlightOnHover: boolean | undefined;
  withColumnBorders: boolean | undefined;
  withRowBorders: boolean | undefined;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
  'Table component was not found in the tree'
);
