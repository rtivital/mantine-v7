import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { NavbarData, Frontmatter } from '@/types';
import { contentPath } from './content-path';

export async function getNavbarData(): Promise<NavbarData> {
  const content = await fs.readdir(contentPath);
  const folders = await Promise.all(
    content.map(async (folder) => {
      const folderContent = await fs.readdir(path.join(contentPath, folder));
      return { folder, content: folderContent };
    })
  );

  const data = await Promise.all(
    folders.map(async (folder) =>
      Promise.all(
        folder.content.map(async (file) => {
          const fileContent = await fs.readFile(
            path.join(contentPath, folder.folder, file),
            'utf-8'
          );
          const serialized = await serialize(fileContent, { parseFrontmatter: true });
          return {
            slug: `/${folder.folder}/${file.replace('.mdx', '')}/`,
            data: serialized.frontmatter as unknown as Frontmatter,
          };
        })
      )
    )
  );

  return { items: data.reduce((acc, curr) => [...acc, ...curr], []) };
}
