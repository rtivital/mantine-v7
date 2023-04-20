import React from 'react';
import { CodeHighlight } from '@mantine/code-highlight';

interface PreProps {
  children?: React.ReactNode;
}

function getLanguage(children: any) {
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  return matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';
}

function getCode(children: any) {
  return children.props.children;
}

export function Pre({ children }: PreProps) {
  return (
    <CodeHighlight
      code={getCode(children)}
      language={getLanguage(children)}
      style={{ borderRadius: 'var(--mantine-radius-md)' }}
    />
  );
}
