import React, { createContext, useContext, useMemo } from 'react';
import { MantineTheme, MantineThemeOverride } from '../theme.types';
import { DEFAULT_THEME } from '../default-theme';
import { mergeMantineTheme } from '../merge-mantine-theme';

export const MantineThemeContext = createContext<MantineTheme | null>(null);

export const useSafeMantineTheme = () => useContext(MantineThemeContext) || DEFAULT_THEME;

export function useMantineTheme() {
  const ctx = useContext(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      '@mantine/core: MantineThemeProvider is not found in component tree, make sure you have it in your app'
    );
  }

  return ctx;
}

export interface MantineThemeProviderProps {
  /** Determines whether theme should be inherited from parent MantineProvider, `false` by default */
  inherit?: boolean;

  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Your application or part of the application that requires different theme */
  children: React.ReactNode;
}

export function MantineThemeProvider({ theme, children, inherit }: MantineThemeProviderProps) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );

  return (
    <MantineThemeContext.Provider value={mergedTheme}>{children}</MantineThemeContext.Provider>
  );
}

MantineThemeProvider.displayName = '@mantine/core/MantineThemeProvider';