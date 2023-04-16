import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/ds/styles.css';

import React from 'react';
import { AppProps } from 'next/app';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { FontsStyle } from '@/fonts';
import '../styles/variables.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontsStyle />
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider>
          <MdxProvider>
            <HotKeysHandler />
            <Component {...pageProps} />
          </MdxProvider>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}
