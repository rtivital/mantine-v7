import { keys } from '../../../utils';
import { MantineTheme } from '../../theme.types';
import { getPrimaryShade } from '../../color-functions';

export function getVariantsCssVariables(theme: MantineTheme, selector: string) {
  const darkPrimaryShade = getPrimaryShade(theme, 'dark');
  const lightPrimaryShade = getPrimaryShade(theme, 'light');

  const colors = keys(theme.colors).reduce<{ light: string; dark: string }>(
    (acc, color) => {
      const lightFilledHover =
        lightPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][lightPrimaryShade];
      const darkFilledHover =
        darkPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][darkPrimaryShade];

      acc.light = `${acc.light}
      --mantine-color-${color}-filled: ${theme.colors[color][lightPrimaryShade]};
      --mantine-color-${color}-filled-hover: ${lightFilledHover};`;

      acc.dark = `${acc.dark}
      --mantine-color-${color}-filled: ${theme.colors[color][darkPrimaryShade]};
      --mantine-color-${color}-filled-hover: ${darkFilledHover};`;

      return acc;
    },
    { light: '', dark: '' }
  );

  return `
  ${selector}[data-mantine-color-scheme="dark"] {${colors.dark}}
  ${selector}[data-mantine-color-scheme="light"] {${colors.light}}
  @media (prefers-color-scheme: dark) { ${selector} {${colors.dark}} }
  @media (prefers-color-scheme: light) { ${selector} {${colors.light}} }`;
}
