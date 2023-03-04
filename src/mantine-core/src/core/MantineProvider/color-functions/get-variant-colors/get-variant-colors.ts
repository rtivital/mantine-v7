import { MantineColor, MantineTheme } from '../../theme.types';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';
import { darken } from '../darken/darken';
import { rgba } from '../rgba/rgba';
import { rem } from '../../../utils';

interface GetVariantColorsInput {
  color: MantineColor | undefined;
  theme: MantineTheme;
  variant: string;
  name: string;
}

type GetVariantColorsResult = Record<`--${string}`, string>;

export function getVariantColors({
  color,
  theme,
  variant,
  name,
}: GetVariantColorsInput): GetVariantColorsResult {
  const parsed = parseThemeColor({ color, theme });

  if (variant === 'filled') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [`--mantine-${name}-bg`]: `var(--mantine-color-${color}-filled)`,
          [`--mantine-${name}-hover`]: `var(--mantine-color-${color}-filled-hover)`,
          [`--mantine-${name}-color`]: 'var(--mantine-color-white)',
          [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
        };
      }

      return {
        [`--mantine-${name}-bg`]: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        [`--mantine-${name}-hover`]: `var(--mantine-color-${parsed.color}-${
          parsed.shade === 9 ? 8 : parsed.shade + 1
        })`,
        [`--mantine-${name}-color`]: 'var(--mantine-color-white)',
        [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [`--mantine-${name}-bg`]: color!,
      [`--mantine-${name}-hover`]: darken(color!, 0.1),
      [`--mantine-${name}-color`]: 'var(--mantine-color-white)',
      [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'light') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [`--mantine-${name}-bg`]: `var(--mantine-color-${color}-light)`,
          [`--mantine-${name}-hover`]: `var(--mantine-color-${color}-light-hover)`,
          [`--mantine-${name}-color`]: `var(--mantine-color-${color}-light-color)`,
          [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        [`--mantine-${name}-bg`]: rgba(parsedColor, 0.1),
        [`--mantine-${name}-hover`]: rgba(parsedColor, 0.12),
        [`--mantine-${name}-color`]: `var(--mantine-color-${parsed.color}-${Math.min(
          parsed.shade,
          6
        )})`,
        [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [`--mantine-${name}-bg`]: rgba(color!, 0.1),
      [`--mantine-${name}-hover`]: rgba(color!, 0.12),
      [`--mantine-${name}-color`]: color!,
      [`--mantine-${name}-border`]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'outline') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [`--mantine-${name}-bg`]: 'transparent',
          [`--mantine-${name}-hover`]: `var(--mantine-color-${color}-outline-hover)`,
          [`--mantine-${name}-color`]: `var(--mantine-color-${color}-outline)`,
          [`--mantine-${name}-border`]: `${rem(1)} solid var(--mantine-color-${color}-outline)`,
        };
      }

      return {
        [`--mantine-${name}-bg`]: 'transparent',
        [`--mantine-${name}-hover`]: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        [`--mantine-${name}-color`]: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        [`--mantine-${name}-border`]: `${rem(1)} solid var(--mantine-color-${parsed.color}-${
          parsed.shade
        })`,
      };
    }

    return {
      [`--mantine-${name}-bg`]: 'transparent',
      [`--mantine-${name}-hover`]: rgba(color!, 0.05),
      [`--mantine-${name}-color`]: color!,
      [`--mantine-${name}-border`]: `${rem(1)} solid ${color}`,
    };
  }

  if (variant === 'subtle') {
    return {};
  }

  if (variant === 'transparent') {
    return {};
  }

  if (variant === 'gradient') {
    return {};
  }

  if (variant === 'default') {
    return {};
  }

  return {};
}
