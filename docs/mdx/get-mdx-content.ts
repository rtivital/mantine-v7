import path from 'path';
import fs from 'fs/promises';
import remarkSlug from 'remark-slug';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent, Frontmatter } from '@/types';
import { contentPath } from './content-path';

export async function getMdxContent(filePath: string): Promise<MdxContent> {
  const content = await fs.readFile(path.join(contentPath, `${filePath}.mdx`), 'utf-8');
  const serialized = await serialize(content.toString(), {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
    },
  });

  return {
    slug: `${filePath}/`,
    content: serialized.compiledSource,
    data: serialized.frontmatter as unknown as Frontmatter,
  };
}
