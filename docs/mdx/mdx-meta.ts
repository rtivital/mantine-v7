import { MdxPagesGroup } from '@/types';

// Theming
import { meta as ThemeObjectMeta } from '@/pages/theming/theme-object.mdx';
import { meta as MantineProviderMeta } from '@/pages/theming/mantine-provider.mdx';

// Guides
import { meta as PolymorphicMeta } from '@/pages/guides/polymorphic.mdx';

// Core components
import { meta as LoaderMeta } from '@/pages/core/loader.mdx';

export const MDX_META = {
  // Theming
  ThemeObject: ThemeObjectMeta,
  MantineProvider: MantineProviderMeta,

  // Guides
  Polymorphic: PolymorphicMeta,

  // Core components
  Loader: LoaderMeta,
};

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  { group: 'theming', pages: [ThemeObjectMeta, MantineProviderMeta] },
  { group: 'guides', pages: [PolymorphicMeta] },
  { group: 'core', pages: [{ category: 'feedback', pages: [LoaderMeta] }] },
];
