import React from 'react';
import { MDXProvider } from '@mdx-js/react';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Test: () => <div>Test</div>,
      }}
    >
      {children}
    </MDXProvider>
  );
}
