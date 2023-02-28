import React from 'react';
import Head from 'next/head';
import { Frontmatter } from '@/types';

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
      <div>Header: {meta.title}</div>
      <div>Navbar</div>
      <div style={{ background: 'pink' }}>{children}</div>
      <div>Footer</div>
    </>
  );
}

export function Layout(meta: Frontmatter) {
  return ({ children }: { children: React.ReactNode }) => (
    <MdxLayout meta={meta}>{children}</MdxLayout>
  );
}
