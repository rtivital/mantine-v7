import { createContext, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import type { MantineTheme, MantineColorScheme } from './theme.types';
import type { MantineColorSchemeManager } from './color-scheme-managers';
import { ConvertCSSVariablesInput } from './convert-css-variables';

interface MantineContextValue {
  theme: MantineTheme;
  colorScheme: MantineColorScheme;
  setColorScheme(colorScheme: MantineColorScheme): void;
  clearColorScheme(): void;
  colorSchemeManager: MantineColorSchemeManager;
  getRootElement(): HTMLElement | undefined;
  classNamesPrefix: string;
  styleNonce: string | undefined;
  cssVariablesResolver(theme: MantineTheme): ConvertCSSVariablesInput;
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

export function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
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
