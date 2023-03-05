import React from 'react';
import { useMantineStyleNonce } from '../Mantine.context';
import type { MantineTheme } from '../theme.types';
import { generateCssVariables } from './generate-css-variables';

interface MantineCssVariablesProps {
  theme: MantineTheme;
  cssVariablesSelector: string;
}

export function MantineCssVariables({ theme, cssVariablesSelector }: MantineCssVariablesProps) {
  const nonce = useMantineStyleNonce();
  const css = generateCssVariables(theme, cssVariablesSelector);

  return <style data-mantine-styles nonce={nonce} dangerouslySetInnerHTML={{ __html: css }} />;
}

MantineCssVariables.displayName = '@mantine/CssVariables';
