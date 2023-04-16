import React from 'react';
import { CodeHighlight } from '@mantine/code-highlight';
import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
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
