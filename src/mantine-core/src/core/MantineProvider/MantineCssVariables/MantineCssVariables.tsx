import React from 'react';
import { getThemeCssVariables, getVariantsCssVariables } from './get-theme-css-variables';
import type { MantineColorScheme, MantineTheme } from '../theme.types';

interface MantineCssVariablesProps {
  theme: MantineTheme;
  colorScheme: MantineColorScheme;
  cssVariablesSelector: string;
}

export function MantineCssVariables({
  theme,
  colorScheme,
  cssVariablesSelector,
}: MantineCssVariablesProps) {
  return (
    <style data-mantine-styles>
      {`${cssVariablesSelector}{${getThemeCssVariables(
        theme,
        colorScheme
      )}} ${getVariantsCssVariables(theme, cssVariablesSelector)}`}
    </style>
  );
}

MantineCssVariables.displayName = '@mantine/CssVariables';
