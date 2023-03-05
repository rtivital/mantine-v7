import React from 'react';
import {
  getThemeCssVariables,
  getVariantsCssVariables,
  getColorSchemeCssVariables,
} from './get-theme-css-variables';
import { useMantineStyleNonce } from '../Mantine.context';
import type { MantineTheme } from '../theme.types';

interface MantineCssVariablesProps {
  theme: MantineTheme;
  cssVariablesSelector: string;
}

export function MantineCssVariables({ theme, cssVariablesSelector }: MantineCssVariablesProps) {
  const nonce = useMantineStyleNonce();

  const css = `${cssVariablesSelector}{${getThemeCssVariables(theme)}} ${getColorSchemeCssVariables(
    cssVariablesSelector
  )} ${getVariantsCssVariables(theme, cssVariablesSelector)}`;

  return <style data-mantine-styles nonce={nonce} dangerouslySetInnerHTML={{ __html: css }} />;
}

MantineCssVariables.displayName = '@mantine/CssVariables';
