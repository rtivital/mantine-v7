import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLayout } from '@/components/MdxLayout';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Test: () => <div>Test</div>,
        MdxLayout,
        Layout: (meta: any) => (props: any) => <MdxLayout meta={meta} {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  );
}
