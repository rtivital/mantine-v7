import type { Frontmatter } from './MdxContent';

export interface NavbarItem {
  slug: string;
  data: Frontmatter;
}

export interface NavbarData {
  items: NavbarItem[];
}
