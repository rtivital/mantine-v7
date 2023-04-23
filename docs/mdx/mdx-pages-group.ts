import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { MDX_DATA } from './mdx-data';

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  { group: 'theming', pages: [MDX_DATA.ThemeObject, MDX_DATA.MantineProvider, MDX_DATA.Colors] },
  { group: 'guides', pages: [MDX_DATA.Polymorphic] },
  { group: 'mantine-core', pages: [{ category: 'feedback', pages: [MDX_DATA.Loader] }] },
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
