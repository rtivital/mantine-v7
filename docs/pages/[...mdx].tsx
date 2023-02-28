import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxPaths, getMdxContent } from '@/mdx';
import { MdxContent } from '@/types';

interface MdxPageProps {
  page: MdxContent;
}

export default function MdxPage({ page }: MdxPageProps) {
  return <MDXRemote compiledSource={page.content} components={{}} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getMdxPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ page: MdxContent }, { mdx: string[] }> = async (
  context
) => {
  const filePath = context.params!.mdx.join('/');
  const mdxContent = await getMdxContent(filePath);

  return {
    props: {
      page: mdxContent,
    },
  };
};
