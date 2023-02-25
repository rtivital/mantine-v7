import { deepMerge } from '../../utils';
import type { MantineTheme, MantineThemeOverride } from '../theme.types';

export const INVALID_PRIMARY_COLOR_ERROR =
  '[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color';

export function validateMantineTheme(theme: MantineTheme): asserts theme is MantineTheme {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
}

export function mergeMantineTheme(
  currentTheme: MantineTheme,
  themeOverride?: MantineThemeOverride
) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }

  const result = deepMerge(currentTheme, themeOverride);
  validateMantineTheme(result);
  return result;
}
