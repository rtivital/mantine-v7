import '@mantine/core/esm/index.css';

import React from 'react';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { getNavbarData, getMdxPaths } from '@/mdx';
import { NavbarData } from '@/types';
import { MdxProvider } from '@/components/MdxProvider';
import { AppProvider } from '@/components/AppContext';

interface AppProps extends NextAppProps {
  navbarData: NavbarData;
}

export default function App({ Component, pageProps, navbarData }: AppProps) {
  return (
    <AppProvider value={{ navbarData }}>
      <MantineProvider>
        <MdxProvider>
          <Component {...pageProps} />
        </MdxProvider>
      </MantineProvider>
    </AppProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const navbarData = await getNavbarData();
  const appProps = await NextApp.getInitialProps(appContext);
  console.log(await getMdxPaths());

  return {
    ...appProps,
    navbarData,
  };
};
