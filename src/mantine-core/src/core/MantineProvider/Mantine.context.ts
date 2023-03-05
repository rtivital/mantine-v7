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
  classNamesPrefix: string;
  styleNonce: string | undefined;
  generateCssVariables(theme: MantineTheme, selector: string): string;
}

export const MantineContext = createContext<MantineContextValue | null>(null);

export function useMantineContext() {
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx;
}

export function useMantineTheme() {
  return useMantineContext().theme;
}

export function useMantineCssVariablesGenerator() {
  return useMantineContext().generateCssVariables;
}

export function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}

export function useSafeMantineTheme() {
  return useContext(MantineContext)?.theme || DEFAULT_THEME;
}

export function useMantineStyleNonce() {
  return useMantineContext().styleNonce;
}
