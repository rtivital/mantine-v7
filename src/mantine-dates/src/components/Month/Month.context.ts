import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { MonthFactory } from './Month';

interface MonthContext {
  getStyles: GetStylesApi<MonthFactory>;
}

export const [MonthProvider, useMonthContext] = createSafeContext<MonthContext>(
  'Month component was not found in tree'
);
