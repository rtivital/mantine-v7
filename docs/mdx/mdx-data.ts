import { Frontmatter } from '@/types';

export const MDX_DATA: Record<string, Frontmatter> = {
  // ----------------------------------- Meta --------------------------------------
  About: {
    title: 'About Mantine',
    slug: '/about',
    search: 'Browser support, releases cycle, previous versions documentation',
  },

  Overview: {
    title: 'Mantine API overview',
    slug: '/overview',
    search: 'Overview of Mantine components API',
  },

  Contribute: {
    title: 'Contributing to Mantine',
    slug: '/contribute',
    search: 'Learn how to contribute to Mantine',
  },

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
    slug: '/theming/color-functions',
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

  // ----------------------------------- Styles ------------------------------------
  CSSModules: {
    title: 'CSS modules',
    slug: '/styles/css-modules',
    search: 'Get started with CSS modules',
  },

  PostCSSPreset: {
    title: 'PostCSS preset',
    slug: '/styles/postcss-preset',
    search: 'postcss-preset-mantine, mixins, CSS functions',
  },

  GlobalStyles: {
    title: 'Global styles',
    slug: '/styles/global-styles',
    search: 'Global styles that are required for Mantine components to work properly',
  },

  CssVariables: {
    title: 'CSS variables',
    slug: '/styles/css-variables',
    search: 'Mantine CSS variables and resolvers',
  },

  CSSVariablesList: {
    title: 'CSS variables list',
    slug: '/styles/css-variables-list',
    search: 'List of all default CSS variables',
  },

  Rem: {
    title: 'rem, em and px units',
    slug: '/styles/rem',
    search: 'rem and em units with Mantine components, units conversion',
  },

  StyleProp: {
    title: 'style prop',
    slug: '/styles/style',
    search: 'style prop usage',
  },

  ResponsiveStyles: {
    title: 'Responsive styles',
    slug: '/styles/responsive',
    search: 'Media queries, breakpoints, inline responsive styles',
  },

  StylesApi: {
    title: 'Styles API',
    slug: '/styles/styles-api',
    search: 'classNames, styles and unstyled props',
  },

  DataAttributes: {
    title: 'data-* attributes',
    slug: '/styles/data-attributes',
    search: 'Usage of data-* attributes to apply styles',
  },

  VariantsAndSizes: {
    title: 'Variants and sizes',
    slug: '/styles/variants-sizes',
    search: 'Customize components sizes and variants',
  },

  StyleProps: {
    title: 'Style props',
    slug: '/styles/style-props',
    search: 'Props to add inline styles',
  },

  Rtl: {
    title: 'RTL (right-to-left)',
    slug: '/styles/rtl',
    search: 'Change text direction to right-to-left',
  },

  StylesPerformance: {
    title: 'Styles performance',
    slug: '/styles/styles-performance',
    search: 'Learn how to improve your styles performance',
  },

  UnstyledComponents: {
    title: 'Unstyled / headless',
    slug: '/styles/unstyled',
    search: 'Headless/unstyled components',
  },

  // ----------------------------------- Guides ------------------------------------
  Polymorphic: {
    title: 'Polymorphic components',
    slug: '/guides/polymorphic',
    search: 'createPolymorphicComponent, change root element, component prop',
  },

  NextJs: {
    title: 'Usage with Next.js',
    slug: '/guides/next',
    search: 'Get started with Next.js',
  },

  Vite: {
    title: 'Usage with Vite',
    slug: '/guides/vite',
    search: 'Get started with Vite',
  },

  Remix: {
    title: 'Usage with Remix',
    slug: '/guides/remix',
    search: 'Get started with Remix',
  },

  Gatsby: {
    title: 'Usage with Gatsby',
    slug: '/guides/gatsby',
    search: 'Get started with Gatsby',
  },

  Storybook: {
    title: 'Usage with Storybook',
    slug: '/guides/storybook',
    search: 'Setup Mantine with Storybook',
  },

  TypeScript: {
    title: 'Usage with TypeScript',
    slug: '/guides/typescript',
    search: 'Usage with TypeScript',
  },

  // ------------------------------- Core components -------------------------------
  Button: {
    title: 'Button',
    package: '@mantine/core',
    slug: '/core/button',
    description: 'Button component to render button or link',
    componentPrefix: 'Button',
    props: ['Button', 'ButtonGroup'],
    styles: ['Button', 'ButtonGroup'],
    import: "import { Button } from '@mantine/core';",
    source: 'mantine-core/src/components/Button/Button.tsx',
    docs: 'core/Button.mdx',
  },
  Loader: {
    title: 'Loader',
    package: '@mantine/core',
    slug: '/core/loader',
    description: 'Indicate loading state',
    props: ['Loader'],
    styles: ['Loader'],
    import: "import { Loader } from '@mantine/core';",
    source: 'mantine-core/src/components/Loader/Loader.tsx',
    docs: 'core/Loader.mdx',
  },
  Container: {
    title: 'Container',
    package: '@mantine/core',
    slug: '/core/container',
    description: 'Center content with padding and max-width',
    props: ['Container'],
    styles: ['Container'],
    import: "import { Container } from '@mantine/core';",
    source: 'mantine-core/src/components/Container/Container.tsx',
    docs: 'core/Container.mdx',
  },
  Anchor: {
    title: 'Anchor',
    package: '@mantine/core',
    slug: '/core/anchor',
    description: 'Display link with theme styles',
    props: ['Anchor'],
    styles: ['Anchor'],
    import: "import { Anchor } from '@mantine/core';",
    source: 'mantine-core/src/components/Anchor/Anchor.tsx',
    docs: 'core/Anchor.mdx',
  },
  Input: {
    title: 'Input',
    package: '@mantine/core',
    slug: '/core/input',
    description: 'Base component to create custom inputs',
    componentPrefix: 'Input',
    props: ['Input', 'InputWrapper', 'InputLabel', 'InputDescription', 'InputError'],
    styles: ['Input', 'InputWrapper'],
    polymorphic: true,
    import: "import { Input } from '@mantine/core';",
    source: 'mantine-core/src/components/Input/Input.tsx',
    docs: 'core/Input.mdx',
  },
  ActionIcon: {
    title: 'ActionIcon',
    package: '@mantine/core',
    slug: '/core/action-icon',
    description: 'Icon button',
    componentPrefix: 'ActionIcon',
    props: ['ActionIcon', 'ActionIconGroup'],
    styles: ['ActionIcon', 'ActionIconGroup'],
    polymorphic: true,
    import: "import { ActionIcon } from '@mantine/core';",
    source: 'mantine-core/src/components/ActionIcon/ActionIcon.tsx',
    docs: 'core/ActionIcon.mdx',
  },
  CloseButton: {
    title: 'CloseButton',
    package: '@mantine/core',
    slug: '/core/close-button',
    description: 'ActionIcon with close icon',
    props: ['CloseButton'],
    styles: ['CloseButton'],
    polymorphic: true,
    import: "import { CloseButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CloseButton/CloseButton.tsx',
    docs: 'core/CloseButton.mdx',
  },
  CopyButton: {
    title: 'CopyButton',
    package: '@mantine/core',
    slug: '/core/copy-button',
    description: 'Copies given text to clipboard',
    props: ['CopyButton'],
    import: "import { CopyButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CopyButton/CopyButton.tsx',
    docs: 'core/CopyButton.mdx',
  },
  FileButton: {
    title: 'FileButton',
    package: '@mantine/core',
    slug: '/core/file-button',
    description: 'Open file picker with a button click',
    props: ['FileButton'],
    import: "import { FileButton } from '@mantine/core';",
    source: 'mantine-core/src/components/FileButton/FileButton.tsx',
    docs: 'core/FileButton.mdx',
  },
  UnstyledButton: {
    title: 'UnstyledButton',
    package: '@mantine/core',
    slug: '/core/unstyled-button',
    description: 'Unstyled polymorphic button',
    polymorphic: true,
    import: "import { UnstyledButton } from '@mantine/core';",
    source: 'mantine-core/src/components/UnstyledButton/UnstyledButton.tsx',
    docs: 'core/UnstyledButton.mdx',
  },
  Tabs: {
    title: 'Tabs',
    package: '@mantine/core',
    slug: '/core/tabs',
    props: ['Tabs', 'TabsList', 'TabsTab', 'TabsPanel'],
    styles: ['Tabs'],
    description: 'Switch between different views',
    import: "import { Tabs } from '@mantine/core';",
    source: 'mantine-core/src/components/Tabs/Tabs.tsx',
    docs: 'core/Tabs.mdx',
  },
  BackgroundImage: {
    title: 'BackgroundImage',
    package: '@mantine/core',
    slug: '/core/background-image',
    description: 'Displays image as background',
    polymorphic: true,
    props: ['BackgroundImage'],
    styles: ['BackgroundImage'],
    import: "import { BackgroundImage } from '@mantine/core';",
    source: 'mantine-core/src/components/BackgroundImage/BackgroundImage.tsx',
    docs: 'core/BackgroundImage.mdx',
  },
  Blockquote: {
    title: 'Blockquote',
    package: '@mantine/core',
    slug: '/core/blockquote',
    props: ['Blockquote'],
    styles: ['Blockquote'],
    description: 'Blockquote with optional cite',
    import: "import { Blockquote } from '@mantine/core';",
    source: 'mantine-core/src/components/Blockquote/Blockquote.tsx',
    docs: 'core/Blockquote.mdx',
  },
  Breadcrumbs: {
    title: 'Breadcrumbs',
    package: '@mantine/core',
    slug: '/core/breadcrumbs',
    props: ['Breadcrumbs'],
    styles: ['Breadcrumbs'],
    description: 'Separates list of react nodes with given separator',
    import: "import { Breadcrumbs } from '@mantine/core';",
    source: 'mantine-core/src/components/Breadcrumbs/Breadcrumbs.tsx',
    docs: 'core/Breadcrumbs.mdx',
  },
  Burger: {
    title: 'Burger',
    package: '@mantine/core',
    slug: '/core/burger',
    props: ['Burger'],
    styles: ['Burger'],
    description: 'Open/close navigation button',
    import: "import { Burger } from '@mantine/core';",
    source: 'mantine-core/src/components/Burger/Burger.tsx',
    docs: 'core/Burger.mdx',
  },
  Center: {
    title: 'Center',
    package: '@mantine/core',
    slug: '/core/center',
    props: ['Center'],
    styles: ['Center'],
    polymorphic: true,
    description: 'Centers content vertically and horizontally',
    import: "import { Center } from '@mantine/core';",
    source: 'mantine-core/src/components/Center/Center.tsx',
    docs: 'core/Center.mdx',
  },
  Code: {
    title: 'Code',
    package: '@mantine/core',
    slug: '/core/code',
    props: ['Code'],
    styles: ['Code'],
    description: 'Inline and block code',
    import: "import { Code } from '@mantine/core';",
    source: 'mantine-core/src/components/Code/Code.tsx',
    docs: 'core/Code.mdx',
  },
  Collapse: {
    title: 'Collapse',
    package: '@mantine/core',
    slug: '/core/collapse',
    props: ['Collapse'],
    description: 'Animate presence with slide down/up transition',
    import: "import { Collapse } from '@mantine/core';",
    source: 'mantine-core/src/components/Collapse/Collapse.tsx',
    docs: 'core/Collapse.mdx',
  },
  ColorPicker: {
    title: 'ColorPicker',
    package: '@mantine/core',
    slug: '/core/color-picker',
    props: ['ColorPicker'],
    styles: ['ColorPicker'],
    description: 'Pick colors',
    import: "import { ColorPicker } from '@mantine/core';",
    source: 'mantine-core/src/components/ColorPicker/ColorPicker.tsx',
    docs: 'core/ColorPicker.mdx',
  },
};
