import { MantineColor, MantineTheme, MantineGradient } from '../../theme.types';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';
import { getGradient } from '../get-gradient/get-gradient';
import { darken } from '../darken/darken';
import { rgba } from '../rgba/rgba';
import { rem } from '../../../utils';

interface GetVariantColorsInput {
  color: MantineColor | undefined;
  theme: MantineTheme;
  variant: string;
  gradient?: MantineGradient;
}

type GetVariantColorsResult = Record<`--${string}`, string>;

export function getVariantColors({
  color,
  theme,
  variant,
  gradient,
}: GetVariantColorsInput): GetVariantColorsResult {
  const parsed = parseThemeColor({ color, theme });

  if (variant === 'filled') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': `var(--mantine-color-${color}-filled)`,
          '--hover': `var(--mantine-color-${color}-filled-hover)`,
          '--color': 'var(--mantine-color-white)',
          '--border': `${rem(1)} solid transparent`,
        };
      }

      return {
        '--bg': `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        '--hover': `var(--mantine-color-${parsed.color}-${
          parsed.shade === 9 ? 8 : parsed.shade + 1
        })`,
        '--color': 'var(--mantine-color-white)',
        '--border': `${rem(1)} solid transparent`,
      };
    }

    return {
      '--bg': color!,
      '--hover': darken(color!, 0.1),
      '--color': 'var(--mantine-color-white)',
      '--border': `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'light') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': `var(--mantine-color-${color}-light)`,
          '--hover': `var(--mantine-color-${color}-light-hover)`,
          '--color': `var(--mantine-color-${color}-light-color)`,
          '--border': `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        '--bg': rgba(parsedColor, 0.1),
        '--hover': rgba(parsedColor, 0.12),
        '--color': `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        '--border': `${rem(1)} solid transparent`,
      };
    }

    return {
      '--bg': rgba(color!, 0.1),
      '--hover': rgba(color!, 0.12),
      '--color': color!,
      '--border': `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'outline') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': 'transparent',
          '--hover': `var(--mantine-color-${color}-outline-hover)`,
          '--color': `var(--mantine-color-${color}-outline)`,
          '--border': `${rem(1)} solid var(--mantine-color-${color}-outline)`,
        };
      }

      return {
        '--bg': 'transparent',
        '--hover': rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        '--color': `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        '--border': `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`,
      };
    }

    return {
      '--bg': 'transparent',
      '--hover': rgba(color!, 0.05),
      '--color': color!,
      '--border': `${rem(1)} solid ${color}`,
    };
  }

  if (variant === 'subtle') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': 'transparent',
          '--hover': `var(--mantine-color-${color}-light-hover)`,
          '--color': `var(--mantine-color-${color}-light-color)`,
          '--border': `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        '--bg': 'transparent',
        '--hover': rgba(parsedColor, 0.12),
        '--color': `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        '--border': `${rem(1)} solid transparent`,
      };
    }

    return {
      '--bg': 'transparent',
      '--hover': rgba(color!, 0.12),
      '--color': color!,
      '--border': `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'transparent') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': 'transparent',
          '--hover': 'transparent',
          '--color': `var(--mantine-color-${color}-light-color)`,
          '--border': `${rem(1)} solid transparent`,
        };
      }

      return {
        '--bg': 'transparent',
        '--hover': 'transparent',
        '--color': `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        '--border': `${rem(1)} solid transparent`,
      };
    }

    return {
      '--bg': 'transparent',
      '--hover': 'transparent',
      '--color': color!,
      '--border': `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'white') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          '--bg': 'var(--mantine-color-white)',
          '--hover': darken(theme.white, 0.01),
          '--color': `var(--mantine-color-${color}-filled)`,
          '--border': `${rem(1)} solid transparent`,
        };
      }

      return {
        '--bg': 'var(--mantine-color-white)',
        '--hover': darken(theme.white, 0.01),
        '--color': `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        '--border': `${rem(1)} solid transparent`,
      };
    }

    return {
      '--bg': 'var(--mantine-color-white)',
      '--hover': darken(theme.white, 0.01),
      '--color': color!,
      '--border': `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'gradient') {
    return {
      '--bg': getGradient(theme, gradient),
      '--hover': getGradient(theme, gradient),
      '--color': 'var(--mantine-color-white)',
      '--border': 'none',
    };
  }

  if (variant === 'default') {
    return {
      '--bg': 'var(--mantine-color-default)',
      '--hover': 'var(--mantine-color-default-hover)',
      '--color': 'var(--mantine-color-default-color)',
      '--border': `${rem(1)} solid var(--mantine-color-default-border)`,
    };
  }

  return {};
}
