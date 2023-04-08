import React from 'react';
import { CodeHighlightCode, CodeHighlight } from '@mantine/code-highlight';
import classes from './CodeDemo.module.css';

export interface CodeDemoProps {
  code?: CodeHighlightCode | CodeHighlightCode[];
  children?: React.ReactNode;
}

export function CodeDemo({ code, children }: CodeDemoProps) {
  return (
    <div className={classes.root}>
      <div className={classes.demo}>{children}</div>
      {code && <CodeHighlight code={code} className={classes.code} />}
    </div>
  );
}
