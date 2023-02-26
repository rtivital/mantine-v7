import type { MantineTheme, MantineColorShade } from '../../theme.types';

interface ParseThemeColorOptions {
  color: unknown;
  theme: MantineTheme;
}

interface ParseThemeColorResult {
  color: string;
  shade: MantineColorShade | undefined;
  variable: `--${string}` | undefined;
}

export function parseThemeColor({ color, theme }: ParseThemeColorOptions): ParseThemeColorResult {
  if (typeof color !== 'string') {
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof color}`);
  }

  const [_color, shade] = color.split('.');
  const colorShade = shade ? (Number(shade) as MantineColorShade) : undefined;

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
