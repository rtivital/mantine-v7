import { createSafeContext, GetStylesApi } from '../../core';
import type { AppShellFactory } from './AppShell';

export interface AppShellContext {
  getStyles: GetStylesApi<AppShellFactory>;
  withBorder: boolean | undefined;
}

export const [AppShellProvider, useAppShellContext] = createSafeContext<AppShellContext>(
  'AppShell was not found in tree'
);
