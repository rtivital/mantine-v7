import React from 'react';
import { CodeHighlightCode, CodeHighlight } from '@mantine/code-highlight';
import { DemoArea } from '../DemoArea';
import { getFileIcon } from '../get-file-icon/get-file-icon';
import classes from './CodeDemo.module.css';

export interface CodeDemoProps {
  code?: CodeHighlightCode | CodeHighlightCode[];
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number;
  defaultExpanded?: boolean;
}

export function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
}: CodeDemoProps) {
  return (
    <div className={classes.root}>
      <DemoArea withPadding={withPadding} centered={centered} maxWidth={maxWidth}>
        {children}
      </DemoArea>
      {code && (
        <CodeHighlight
          code={code}
          className={classes.code}
          getFileIcon={getFileIcon}
          withExpandButton
          defaultExpanded={defaultExpanded}
        />
      )}
    </div>
  );
}
