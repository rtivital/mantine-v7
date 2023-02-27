import '@mantine/core/esm/index.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}
