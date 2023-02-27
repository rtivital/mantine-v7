import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const dataPath = path.join(process.cwd(), 'content');

export async function getNavbarData() {
  const content = await fs.readdir(dataPath);
  const folders = await Promise.all(
    content.map(async (folder) => {
      const folderContent = await fs.readdir(path.join(dataPath, folder));
      return { folder, content: folderContent };
    })
  );

  const data = await Promise.all(
    folders.map(async (folder) =>
      Promise.all(
        folder.content.map(async (file) => {
          const fileContent = await fs.readFile(path.join(dataPath, folder.folder, file), 'utf-8');
          const serialized = await serialize(fileContent, { parseFrontmatter: true });
          return {
            slug: `/${folder.folder}/${file.replace('.mdx', '')}/`,
            data: serialized.frontmatter,
          };
        })
      )
    )
  );

  return data.reduce((acc, curr) => [...acc, ...curr], []);
}
