import React from 'react';
import type { MantineColorScheme } from '../theme.types';

export interface ColorSchemeScriptProps extends React.ComponentPropsWithoutRef<'script'> {
  defaultColorScheme?: MantineColorScheme;
  localStorageKey?: string;
}

const getScript = ({
  defaultColorScheme,
  localStorageKey,
}: Pick<ColorSchemeScriptProps, 'defaultColorScheme' | 'localStorageKey'>) => `
  window.localStorage.getItem('${localStorageKey}') || '${defaultColorScheme}';
  document.documentElement.setAttribute('data-mantine-color-scheme', '${defaultColorScheme}');
`;

export function ColorSchemeScript({
  defaultColorScheme = 'auto',
  localStorageKey = 'mantine-color-scheme',
  ...others
}: ColorSchemeScriptProps) {
  return (
    <script
      {...others}
      dangerouslySetInnerHTML={{ __html: getScript({ defaultColorScheme, localStorageKey }) }}
    />
  );
}
