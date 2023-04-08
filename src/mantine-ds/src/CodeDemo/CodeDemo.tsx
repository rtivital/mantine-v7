import React from 'react';
import { Box, rem } from '@mantine/core';
import { CodeHighlightCode, CodeHighlight } from '@mantine/code-highlight';
import { getFileIcon } from '../get-file-icon/get-file-icon';
import classes from './CodeDemo.module.css';

export interface CodeDemoProps {
  code?: CodeHighlightCode | CodeHighlightCode[];
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number;
}

export function CodeDemo({
  code,
  children,
  withPadding = true,
  centered = false,
  maxWidth,
}: CodeDemoProps) {
  return (
    <div className={classes.root}>
      <Box
        className={classes.demo}
        mod={{ 'with-padding': withPadding, centered: centered && !maxWidth }}
        vars={{
          '--demo-max-width': maxWidth ? rem(maxWidth) : undefined,
          '--demo-margin-y': maxWidth && centered ? 'auto' : undefined,
        }}
      >
        <div className={classes.demoInner}>{children}</div>
      </Box>
      {code && <CodeHighlight code={code} className={classes.code} getFileIcon={getFileIcon} />}
    </div>
  );
}
