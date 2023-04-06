import React from 'react';
import { useMantineStyleNonce, useMantineCssVariablesResolver } from '../Mantine.context';
import type { MantineTheme } from '../theme.types';
import { convertCssVariables } from '../convert-css-variables/convert-css-variables';

interface MantineCssVariablesProps {
  theme: MantineTheme;
  cssVariablesSelector: string;
}

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}

export function MantineCssVariables({ theme, cssVariablesSelector }: MantineCssVariablesProps) {
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const css = convertCssVariables(generator(theme), cssVariablesSelector);

  return (
    <style
      data-mantine-styles
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `${css}${getColorSchemeCssVariables(cssVariablesSelector)}`,
      }}
    />
  );
}

MantineCssVariables.displayName = '@mantine/CssVariables';
