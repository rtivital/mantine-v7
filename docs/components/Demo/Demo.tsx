import React from 'react';
import { CodeBlock } from '@/components/CodeBlock';

export function Demo({ data: { component: Component, code } }: any) {
  return (
    <div>
      <div>
        <Component />
      </div>
      <div>
        <CodeBlock language="tsx">{code}</CodeBlock>
      </div>
    </div>
  );
}
