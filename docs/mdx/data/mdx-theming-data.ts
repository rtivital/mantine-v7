import { Frontmatter } from '@/types';

export const MDX_THEMING_DATA: Record<string, Frontmatter> = {
  MantineProvider: {
    title: 'MantineProvider',
    slug: '/theming/mantine-provider',
    search: 'Theme context, CSS reset, CSS variables, context classes and styles',
  },

  ThemeObject: {
    title: 'Theme object',
    slug: '/theming/theme-object',
    search: 'use-mantine-theme, theme override, MantineTheme',
  },

  ColorSchemes: {
    title: 'Color schemes',
    slug: '/theming/color-schemes',
    search: 'use-mantine-color-scheme, color schemes management, data-mantine-color-scheme',
  },

  Colors: {
    title: 'Colors',
    slug: '/theming/colors',
    search: 'Default colors, primaryColor, primaryShade',
  },

  ColorFunctions: {
    title: 'Color functions',
    slug: '/styles/color-functions',
    search: 'Functions to manipulate colors, darken, lighten, parse',
  },

  Typography: {
    title: 'Typography',
    slug: '/theming/typography',
    search: 'Change fonts, @font-face',
  },

  DefaultProps: {
    title: 'Default props',
    slug: '/theming/default-props',
    search: 'Default props for components',
  },

  DefaultTheme: {
    title: 'Default theme',
    slug: '/theming/default-theme',
  },
};
