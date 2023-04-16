import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';

import React from 'react';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';
import '../styles/variables.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}
