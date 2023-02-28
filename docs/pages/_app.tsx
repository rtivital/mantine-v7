import '@mantine/core/esm/index.css';

import React from 'react';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';
import '../styles/highlight-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}
