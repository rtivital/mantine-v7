import './styles/css-reset.css';
import './styles/global-styles.css';

import React, { useMemo } from 'react';
import { MantineCssVariables, defaultCssVariablesGenerator } from './MantineCssVariables';
import { mergeMantineTheme } from './merge-mantine-theme';
import type { MantineColorScheme, MantineTheme, MantineThemeOverride } from './theme.types';
import { localStorageColorSchemeManager, MantineColorSchemeManager } from './color-scheme-managers';
import { MantineContext, useSafeMantineTheme } from './Mantine.context';
import { DEFAULT_THEME } from './default-theme';
import { useProviderColorScheme } from './use-mantine-color-scheme';

export interface MantineProviderProps {
  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Determines whether theme should be inherited from parent MantineProvider, `false` by default */
  inherit?: boolean;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  colorSchemeManager?: MantineColorSchemeManager;

  /** Default value used when colorSchemeManager cannot retrieve value from external storage, `auto` by default */
  defaultColorScheme?: MantineColorScheme;

  /** CSS selector to which css variables should be added, `:root` by default */
  cssVariablesSelector?: string;

  /** Determines whether theme css variables should be added to given `cssVariablesSelector`, `true` by default */
  withCssVariables?: boolean;

  /** Function ro resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?: () => HTMLElement | undefined;

  /** A prefix for components static classNames (for example {selector}-Text-root), `mantine` by default */
  classNamesPrefix?: string;

  /** nonce attribute added to all generated `<style />` tags */
  styleNonce?: string;

  /** Function to generate CSS variables styles based on theme object */
  generateCssVariables?(theme: MantineTheme, selector: string): string;

  /** Your application */
  children?: React.ReactNode;
}

export function MantineProvider({
  theme,
  children,
  styleNonce,
  inherit = false,
  withCssVariables = true,
  cssVariablesSelector = ':root',
  classNamesPrefix = 'mantine',
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = 'auto',
  getRootElement = () => document.documentElement,
  generateCssVariables = defaultCssVariablesGenerator,
}: MantineProviderProps) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );

  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    manager: colorSchemeManager,
    getRootElement,
  });

  return (
    <MantineContext.Provider
      value={{
        theme: mergedTheme,
        colorSchemeManager,
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        styleNonce,
        generateCssVariables,
      }}
    >
      {withCssVariables && (
        <MantineCssVariables theme={mergedTheme} cssVariablesSelector={cssVariablesSelector} />
      )}
      {children}
    </MantineContext.Provider>
  );
}

MantineProvider.displayName = '@mantine/Provider';
