import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getMdxPaths } from '@/mdx';

export default function MdxPage() {
  return <div>Mdx page</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getMdxPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  return {
    props: {},
  };
};
