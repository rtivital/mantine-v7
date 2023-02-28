import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Demo } from '@/components/Demo';
import { CodeBlock } from '@/components/CodeBlock';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        pre: (props: any) => {
          const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);
          return (
            <CodeBlock
              language={
                matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx'
              }
            >
              {props.children.props.children}
            </CodeBlock>
          );
        },
      }}
    >
      {children}
    </MDXProvider>
  );
}
