import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLayout } from '@/components/MdxLayout';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Test: () => <div>Test</div>,
        MdxLayout,
      }}
    >
      {children}
    </MDXProvider>
  );
}
