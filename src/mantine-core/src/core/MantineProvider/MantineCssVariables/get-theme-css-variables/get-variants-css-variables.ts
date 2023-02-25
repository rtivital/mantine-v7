import { keys } from '../../../utils';
import { MantineTheme } from '../../theme.types';
import { getPrimaryShade } from '../../color-functions';

export function getVariantsCssVariables(theme: MantineTheme, selector: string) {
  const darkPrimaryShade = getPrimaryShade(theme, 'dark');
  const lightPrimaryShade = getPrimaryShade(theme, 'light');

  const colors = keys(theme.colors).reduce<{ light: string; dark: string }>(
    (acc, color) => {
      acc.light = `${acc.light}--mantine-color-${color}-filled: ${theme.colors[color][lightPrimaryShade]};`;
      acc.dark = `${acc.dark}--mantine-color-${color}-filled: ${theme.colors[color][darkPrimaryShade]};`;
      return acc;
    },
    { light: '', dark: '' }
  );

  return `@media (prefers-color-scheme: dark) {${selector}{${colors.dark}}}\n@media (prefers-color-scheme: light) {${selector}{${colors.light}}}`;
}
