import { createSafeContext, GetStylesApi } from '../../core';
import type { TableStylesNames } from './Table';

interface TableContextValue {
  getStyles: GetStylesApi<TableStylesNames>;
}

export const [TableProvider, useTableContext] = createSafeContext<TableContextValue>(
  'Table component was not found in the tree'
);
