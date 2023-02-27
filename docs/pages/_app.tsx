import '@mantine/core/esm/index.css';
import fs from 'fs/promises';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';
import { getNavbarData } from '@/mdx';

export default function App({ Component, pageProps, pages, ...others }: AppProps) {
  console.log(pages);
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}

// const corePath = path.join(process.cwd(), 'pages/core');

export const getInitialProps = async () => {
  const pages = await getNavbarData();

  return {
    pages,
  };
};

App.getInitialProps = getInitialProps;
