export interface Frontmatter {
  title: string;
  package: string;
}

export interface NavbarItem {
  slug: string;
  data: Frontmatter;
}

export interface NavbarData {
  items: NavbarItem[];
}
