import { MantineColor, MantineTheme, MantineGradient } from '../../theme.types';
import { parseThemeColor } from '../parse-theme-color/parse-theme-color';
import { getGradient } from '../get-gradient/get-gradient';
import { darken } from '../darken/darken';
import { rgba } from '../rgba/rgba';
import { rem } from '../../../utils';

export interface VariantColorsResolverInput {
  color: MantineColor | undefined;
  theme: MantineTheme;
  variant: string;
  prefix: string;
  gradient?: MantineGradient;
}

export type VariantColorResolverResult = Record<`--${string}`, string>;

export type VariantColorsResolver = <Input extends VariantColorsResolverInput>(
  input: Input
) => Record<
  | `--${Input['prefix']}-bg`
  | `--${Input['prefix']}-hover`
  | `--${Input['prefix']}-color`
  | `--${Input['prefix']}-bd`,
  string
>;

export const defaultVariantColorsResolver: VariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  prefix,
}) => {
  const parsed = parseThemeColor({ color, theme });
  const bgVar = `--${prefix}-bg`;
  const hoverVar = `--${prefix}-hover`;
  const colorVar = `--${prefix}-color`;
  const bdVar = `--${prefix}-bd`;

  if (variant === 'filled') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: `var(--mantine-color-${color}-filled)`,
          [hoverVar]: `var(--mantine-color-${color}-filled-hover)`,
          [colorVar]: 'var(--mantine-color-white)',
          [bdVar]: `${rem(1)} solid transparent`,
        };
      }

      return {
        [bgVar]: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        [hoverVar]: `var(--mantine-color-${parsed.color}-${
          parsed.shade === 9 ? 8 : parsed.shade + 1
        })`,
        [colorVar]: 'var(--mantine-color-white)',
        [bdVar]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [bgVar]: color!,
      [hoverVar]: darken(color!, 0.1),
      [colorVar]: 'var(--mantine-color-white)',
      [bdVar]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'light') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: `var(--mantine-color-${color}-light)`,
          [hoverVar]: `var(--mantine-color-${color}-light-hover)`,
          [colorVar]: `var(--mantine-color-${color}-light-color)`,
          [bdVar]: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        [bgVar]: rgba(parsedColor, 0.1),
        [hoverVar]: rgba(parsedColor, 0.12),
        [colorVar]: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        [bdVar]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [bgVar]: rgba(color!, 0.1),
      [hoverVar]: rgba(color!, 0.12),
      [colorVar]: color!,
      [bdVar]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'outline') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: 'transparent',
          [hoverVar]: `var(--mantine-color-${color}-outline-hover)`,
          [colorVar]: `var(--mantine-color-${color}-outline)`,
          [bdVar]: `${rem(1)} solid var(--mantine-color-${color}-outline)`,
        };
      }

      return {
        [bgVar]: 'transparent',
        [hoverVar]: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
        [colorVar]: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        [bdVar]: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`,
      };
    }

    return {
      [bgVar]: 'transparent',
      [hoverVar]: rgba(color!, 0.05),
      [colorVar]: color!,
      [bdVar]: `${rem(1)} solid ${color}`,
    };
  }

  if (variant === 'subtle') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: 'transparent',
          [hoverVar]: `var(--mantine-color-${color}-light-hover)`,
          [colorVar]: `var(--mantine-color-${color}-light-color)`,
          [bdVar]: `${rem(1)} solid transparent`,
        };
      }

      const parsedColor = theme.colors[parsed.color][parsed.shade];

      return {
        [bgVar]: 'transparent',
        [hoverVar]: rgba(parsedColor, 0.12),
        [colorVar]: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        [bdVar]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [bgVar]: 'transparent',
      [hoverVar]: rgba(color!, 0.12),
      [colorVar]: color!,
      [bdVar]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'transparent') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: 'transparent',
          [hoverVar]: 'transparent',
          [colorVar]: `var(--mantine-color-${color}-light-color)`,
          [bdVar]: `${rem(1)} solid transparent`,
        };
      }

      return {
        [bgVar]: 'transparent',
        [hoverVar]: 'transparent',
        [colorVar]: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        [bdVar]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [bgVar]: 'transparent',
      [hoverVar]: 'transparent',
      [colorVar]: color!,
      [bdVar]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'white') {
    if (parsed.isThemeColor) {
      if (parsed.shade === undefined) {
        return {
          [bgVar]: 'var(--mantine-color-white)',
          [hoverVar]: darken(theme.white, 0.01),
          [colorVar]: `var(--mantine-color-${color}-filled)`,
          [bdVar]: `${rem(1)} solid transparent`,
        };
      }

      return {
        [bgVar]: 'var(--mantine-color-white)',
        [hoverVar]: darken(theme.white, 0.01),
        [colorVar]: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        [bdVar]: `${rem(1)} solid transparent`,
      };
    }

    return {
      [bgVar]: 'var(--mantine-color-white)',
      [hoverVar]: darken(theme.white, 0.01),
      [colorVar]: color!,
      [bdVar]: `${rem(1)} solid transparent`,
    };
  }

  if (variant === 'gradient') {
    return {
      [bgVar]: getGradient(gradient, theme),
      [hoverVar]: getGradient(gradient, theme),
      [colorVar]: 'var(--mantine-color-white)',
      [bdVar]: 'none',
    };
  }

  if (variant === 'default') {
    return {
      [bgVar]: 'var(--mantine-color-default)',
      [hoverVar]: 'var(--mantine-color-default-hover)',
      [colorVar]: 'var(--mantine-color-default-color)',
      [bdVar]: `${rem(1)} solid var(--mantine-color-default-border)`,
    };
  }

  return {} as VariantColorResolverResult;
};
