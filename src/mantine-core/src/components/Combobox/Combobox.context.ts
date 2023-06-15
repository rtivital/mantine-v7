import { createSafeContext, GetStylesApi } from '../../core';
import type { ComboboxFactory } from './Combobox';

export interface ComboboxContextValue {
  getStyles: GetStylesApi<ComboboxFactory>;
}
export const [ComboboxProvider, useComboboxContext] = createSafeContext<ComboboxContextValue>(
  'Combobox component was not found in tree'
);
