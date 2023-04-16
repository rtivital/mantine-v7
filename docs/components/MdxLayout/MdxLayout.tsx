import React from 'react';
import Head from 'next/head';
import { Frontmatter } from '@/types';
import { Shell } from '@/components/Shell';

interface MdxLayoutProps {
  meta: Frontmatter;
  children: React.ReactNode;
}

export function MdxLayout({ meta, children }: MdxLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${meta.title} | Mantine`}</title>
      </Head>
      <Shell>{children}</Shell>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
