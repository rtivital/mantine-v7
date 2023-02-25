import type { MantineColorScheme, MantineTheme, MantineColorShade } from '../../theme.types';
import { getPrimaryShade } from '../get-primary-shade/get-primary-shade';

interface ParseThemeColorOptions {
  color: unknown;
  colorScheme: MantineColorScheme;
  theme: MantineTheme;
}

interface ParseThemeColorResult {
  color: string;
  shade: MantineColorShade;
  variable: `--${string}` | undefined;
}

export function parseThemeColor({
  color,
  colorScheme,
  theme,
}: ParseThemeColorOptions): ParseThemeColorResult {
  if (typeof color !== 'string') {
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof color}`);
  }

  const [_color, shade] = color.split('.');
  const primaryShade = getPrimaryShade(theme, colorScheme);
  const colorShade = shade ? (Number(shade) as MantineColorShade) : primaryShade;

  if (_color in theme.colors) {
    return {
      color: _color,
      shade: colorShade,
      variable: shade
        ? `--mantine-color-${_color}-${colorShade}`
        : `--mantine-color-${_color}-filled`,
    };
  }

  return {
    color,
    shade: colorShade,
    variable: undefined,
  };
}
