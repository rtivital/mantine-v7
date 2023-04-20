import React from 'react';
import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';
import { NextLink } from './NextLink/NextLink';
import { DataTable } from './DataTable/DataTable';
import { Pre } from './Pre/Pre';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        NextLink,
        DataTable,
        pre: Pre,
      }}
    >
      {children}
    </MDXProvider>
  );
}
