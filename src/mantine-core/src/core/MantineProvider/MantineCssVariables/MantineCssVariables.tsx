import React from 'react';
import { useMantineStyleNonce, useMantineCssVariablesResolver } from '../Mantine.context';
import { useMantineTheme } from '../MantineThemeProvider';
import { convertCssVariables } from '../convert-css-variables/convert-css-variables';
import { getMergedVariables } from './get-merged-variables';

interface MantineCssVariablesProps {
  cssVariablesSelector: string;
}

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}

export function MantineCssVariables({ cssVariablesSelector }: MantineCssVariablesProps) {
  const theme = useMantineTheme();
  const nonce = useMantineStyleNonce();
  const generator = useMantineCssVariablesResolver();
  const css = convertCssVariables(getMergedVariables({ theme, generator }), cssVariablesSelector);

  return (
    <style
      data-mantine-styles
      nonce={nonce?.()}
      dangerouslySetInnerHTML={{
        __html: `${css}${getColorSchemeCssVariables(cssVariablesSelector)}`,
      }}
    />
  );
}

MantineCssVariables.displayName = '@mantine/CssVariables';
