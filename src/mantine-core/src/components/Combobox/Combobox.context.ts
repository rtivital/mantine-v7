import { createSafeContext, GetStylesApi } from '../../core';
import type { ComboboxFactory } from './Combobox';
import type { ComboboxStore } from './use-combobox';

export interface ComboboxContextValue {
  getStyles: GetStylesApi<ComboboxFactory>;
  store: ComboboxStore;
}

export const [ComboboxProvider, useComboboxContext] = createSafeContext<ComboboxContextValue>(
  'Combobox component was not found in tree'
);
