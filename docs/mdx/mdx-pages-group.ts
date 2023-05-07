import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { MDX_DATA } from './mdx-data';

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  {
    group: 'theming',
    pages: [
      MDX_DATA.MantineProvider,
      MDX_DATA.ThemeObject,
      MDX_DATA.Colors,
      MDX_DATA.ColorFunctions,
      MDX_DATA.ColorSchemes,
      MDX_DATA.Typography,
      MDX_DATA.DefaultProps,
    ],
  },
  {
    group: 'styles',
    pages: [
      MDX_DATA.CSSModules,
      MDX_DATA.PostCSSPreset,
      MDX_DATA.GlobalStyles,
      MDX_DATA.CssVariables,
      MDX_DATA.Rem,
      MDX_DATA.StyleProp,
      MDX_DATA.ResponsiveStyles,
      MDX_DATA.StylesApi,
      MDX_DATA.DataAttributes,
      MDX_DATA.VariantsAndSizes,
      MDX_DATA.UnstyledComponents,
      MDX_DATA.StyleProps,
      MDX_DATA.Rtl,
      MDX_DATA.StylesPerformance,
    ],
  },
  {
    group: 'guides',
    pages: [
      MDX_DATA.Polymorphic,
      MDX_DATA.NextJs,
      MDX_DATA.Vite,
      MDX_DATA.Remix,
      MDX_DATA.Gatsby,
      MDX_DATA.TypeScript,
      MDX_DATA.Storybook,
    ],
  },
  {
    group: 'mantine-core',
    pages: [
      { category: 'layout', pages: [MDX_DATA.Container] },
      { category: 'buttons', pages: [MDX_DATA.Button] },
      { category: 'feedback', pages: [MDX_DATA.Loader] },
    ],
  },
];

export const ALL_MDX_PAGES: Frontmatter[] = MDX_PAGES_GROUPS.reduce<Frontmatter[]>((acc, group) => {
  group.pages.forEach((item) => {
    if (item.category) {
      acc.push(...(item as MdxPagesCategory).pages);
    } else {
      acc.push(item as Frontmatter);
    }
  });

  return acc;
}, []);
