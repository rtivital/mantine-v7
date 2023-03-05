import type { MantineTheme, MantineColorShade } from '../../theme.types';

interface ParseThemeColorOptions {
  color: unknown;
  theme: MantineTheme;
}

interface ParseThemeColorResult {
  color: string;
  shade: MantineColorShade | undefined;
  variable: `--${string}` | undefined;
  isThemeColor: boolean;
}

export function parseThemeColor({ color, theme }: ParseThemeColorOptions): ParseThemeColorResult {
  if (typeof color !== 'string') {
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof color}`);
  }

  if (color === 'white' || color === 'black') {
    return {
      color,
      shade: undefined,
      isThemeColor: false,
      variable: `--mantine-color-${color}`,
    };
  }

  const [_color, shade] = color.split('.');
  const colorShade = shade ? (Number(shade) as MantineColorShade) : undefined;
  const isThemeColor = _color in theme.colors;

  if (isThemeColor) {
    return {
      color: _color,
      shade: colorShade,
      isThemeColor,
      variable: shade
        ? `--mantine-color-${_color}-${colorShade}`
        : `--mantine-color-${_color}-filled`,
    };
  }

  return {
    color,
    isThemeColor,
    shade: colorShade,
    variable: undefined,
  };
}
