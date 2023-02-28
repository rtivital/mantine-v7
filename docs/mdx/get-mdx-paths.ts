import path from 'path';
import glob from 'glob';
import util from 'util';
import { contentPath } from './content-path';

const globPromise = util.promisify(glob);

export async function getMdxPaths() {
  const paths = await globPromise(path.join(contentPath, '**/*.mdx'));
  return paths.map((p) => p.replace(contentPath, '').replace('.mdx', ''));
}
