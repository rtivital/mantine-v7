import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Demo } from '@/components/Demo';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={{ Demo }}>{children}</MDXProvider>;
}
