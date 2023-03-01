import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorSchemeScript defaultColorScheme="auto" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
