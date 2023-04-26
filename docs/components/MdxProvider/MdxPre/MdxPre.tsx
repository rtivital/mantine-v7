import React from 'react';
import { CodeHighlight, CodeHighlightProps } from '@mantine/code-highlight';

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

export function MdxCodeHighlight(props: CodeHighlightProps) {
  return <CodeHighlight style={{ borderRadius: 'var(--mantine-radius-md)' }} mb="md" {...props} />;
}

export function MdxPre({ children }: PreProps) {
  return <MdxCodeHighlight code={getCode(children)} language={getLanguage(children)} />;
}
