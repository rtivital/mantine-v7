import path from 'path';
import fs from 'fs/promises';
import remarkSlug from 'remark-slug';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent, Frontmatter } from '@/types';
import * as Demos from '@/demos';
import { contentPath } from './content-path';

export async function getMdxContent(filePath: string): Promise<MdxContent> {
  const content = await fs.readFile(path.join(contentPath, `${filePath}.mdx`), 'utf-8');
  const serialized = await serialize(content.toString(), {
    scope: { hello: 'there' },
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkSlug],
    },
  });

  // const dependencies: string[] = Array.isArray(serialized.frontmatter?.demos)
  //   ? serialized.frontmatter!.demos
  //   : [];
  // const scope = dependencies.reduce<Record<string, any>>((acc, dependency) => {
  //   acc[dependency] = (Demos as any)[dependency];
  //   return acc;
  // }, {});

  // console.log({ scope });

  // const serialized2 = await serialize(content.toString(), {
  //   parseFrontmatter: true,
  //   scope: { LoaderDemos: 'hello' },
  //   mdxOptions: {
  //     remarkPlugins: [remarkSlug],
  //   },
  // });

  return {
    slug: `${filePath}/`,
    content: serialized.compiledSource,
    data: serialized.frontmatter as unknown as Frontmatter,
  };
}
