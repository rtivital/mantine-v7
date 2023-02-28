import '@mantine/core/esm/index.css';

import React from 'react';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MdxProvider } from '@/components/MdxProvider';
import { getNavbarData } from '@/mdx';
import { NavbarData } from '@/types';

interface AppProps extends NextAppProps {
  navbarData: NavbarData;
}

export default function App({ Component, pageProps, navbarData }: AppProps) {
  return (
    <MantineProvider>
      <MdxProvider>
        <Component {...pageProps} />
      </MdxProvider>
    </MantineProvider>
  );
}

export const getInitialProps = async (appContext: AppContext) => {
  const navbarData = await getNavbarData();
  const appProps = await NextApp.getInitialProps(appContext);

  return {
    ...appProps,
    navbarData,
  };
};

App.getInitialProps = getInitialProps;
