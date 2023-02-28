import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxPaths, getMdxContent } from '@/mdx';
import { MdxContent } from '@/types';

interface MdxPageProps {
  page: MdxContent;
}

export default function MdxPage({ page }: MdxPageProps) {
  return (
    <>
      <Head>
        <title>{`${page.data.title} | Mantine`}</title>
      </Head>
      <div>
        Header: {page.data.title}
        Package {page.data.package}
      </div>
      <div>Navbar</div>
      <MDXRemote compiledSource={page.content} components={{}} />
      <div>Footer</div>
    </>
  );
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
