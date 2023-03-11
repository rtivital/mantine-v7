import { createSafeContext } from '../../core';

export interface TabsContextValue {
  id: string;
  value: string | null;
  orientation: 'horizontal' | 'vertical' | undefined;
  loop: boolean | undefined;
  activateTabWithKeyboard: boolean | undefined;
  allowTabDeactivation: boolean | undefined;
  onChange(value: string | null): void;
  getTabId(value: string): string;
  getPanelId(value: string): string;
  variant: string | undefined;
  color: string | undefined;
  radius: string | undefined;
  inverted: boolean | undefined;
  keepMounted: boolean | undefined;
  placement: 'right' | 'left' | undefined;
  unstyled: boolean | undefined;
  // classNames: ClassNames<TabsStylesNames>;
  // styles: Styles<TabsStylesNames, TabsStylesParams>;
}

export const [TabsProvider, useTabsContext] = createSafeContext<TabsContextValue>(
  'Tabs component was not found in the tree'
);
