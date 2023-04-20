import React from 'react';
import { CodeHighlight } from '@mantine/code-highlight';
import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';
import { NextLink } from './NextLink/NextLink';
import { DataTable } from './DataTable/DataTable';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        NextLink,
        DataTable,
        pre: (props: any) => {
          const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);
          return (
            <CodeHighlight
              code={props.children.props.children}
              language={
                matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx'
              }
            />
          );
        },
      }}
    >
      {children}
    </MDXProvider>
  );
}
