import React from 'react';
import hljs from 'highlight.js';

export interface CodeBlockProps {
  children: string;
  language: string;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  const highlighted = hljs.highlight(children.trim(), { language }).value;

  return (
    <pre>
      <code className="hljs" dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}
