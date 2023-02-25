import { createContext, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import type { MantineTheme, MantineColorScheme } from './theme.types';
import type { MantineColorSchemeManager } from './color-scheme-managers';

interface MantineContextValue {
  theme: MantineTheme;
  colorScheme: MantineColorScheme;
  setColorScheme(colorScheme: MantineColorScheme): void;
  clearColorScheme(): void;
  colorSchemeManager: MantineColorSchemeManager;
  getRootElement(): HTMLElement | undefined;
}

export const MantineContext = createContext<MantineContextValue | null>(null);

export function useMantineTheme() {
  const ctx = useContext(MantineContext);
  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx.theme;
}

export function useSafeMantineTheme() {
  return useContext(MantineContext)?.theme || DEFAULT_THEME;
}
