import '@mantine/core/esm/index.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';

export default function App({ Component, pageProps, ...others }: AppProps) {
  console.log(others);
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}

export const getInitialProps = async () =>
  Promise.resolve({
    hello: true,
  });

App.getInitialProps = getInitialProps;
