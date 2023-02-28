export interface Frontmatter {
  title: string;
  package: string;
}

export interface MdxContent {
  slug: string;
  content: string;
  data: Frontmatter;
}
