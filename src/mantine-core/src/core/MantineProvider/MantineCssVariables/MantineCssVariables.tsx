import React from 'react';
import { getThemeCssVariables, getVariantsCssVariables } from './get-theme-css-variables';
import { useMantineStyleNonce } from '../Mantine.context';
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
  const nonce = useMantineStyleNonce();

  return (
    <style data-mantine-styles nonce={nonce}>
      {`${cssVariablesSelector}{${getThemeCssVariables(
        theme,
        colorScheme
      )}} ${getVariantsCssVariables(theme, cssVariablesSelector)}`}
    </style>
  );
}

MantineCssVariables.displayName = '@mantine/CssVariables';
