import React from 'react';
import { useMantineStyleNonce, useMantineCssVariablesGenerator } from '../Mantine.context';
import type { MantineTheme } from '../theme.types';

interface MantineCssVariablesProps {
  theme: MantineTheme;
  cssVariablesSelector: string;
}

export function MantineCssVariables({ theme, cssVariablesSelector }: MantineCssVariablesProps) {
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesGenerator();
  const css = generator(theme, cssVariablesSelector);

  return <style data-mantine-styles nonce={nonce} dangerouslySetInnerHTML={{ __html: css }} />;
}

MantineCssVariables.displayName = '@mantine/CssVariables';
