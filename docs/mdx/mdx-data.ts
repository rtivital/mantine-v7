export const MDX_DATA = {
  // ----------------------------------- Theming -----------------------------------
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

  // ----------------------------------- Guides ------------------------------------
  Polymorphic: {
    title: 'Polymorphic components',
    slug: '/guides/polymorphic',
    search: 'createPolymorphicComponent, change root element, component prop',
  },

  // ------------------------------- Core components -------------------------------
  Loader: {
    title: 'Loader',
    package: '@mantine/core',
    slug: '/core/loader',
    category: 'feedback',
    description: 'Indicate loading state',
    props: ['Loader'],
    styles: ['Loader'],
    import: "import { Loader } from '@mantine/core';",
    source: 'mantine-core/src/components/Loader/Loader.tsx',
    docs: 'core/Loader.mdx',
  },
};
