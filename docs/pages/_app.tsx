import '@mantine/core/esm/index.css';

import React from 'react';
import NextApp, { AppContext, AppProps as NextAppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { getNavbarData, MDX_META } from '@/mdx';
import { NavbarData } from '@/types';
import { MdxProvider } from '@/components/MdxProvider';
import { AppProvider } from '@/components/AppContext';

interface AppProps extends NextAppProps {
  navbarData: NavbarData;
}

export default function App({ Component, pageProps, navbarData }: AppProps) {
  console.log(MDX_META);
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

  return {
    ...appProps,
    navbarData,
  };
};
