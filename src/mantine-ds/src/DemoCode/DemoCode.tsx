import React from 'react';
import { CodeHighlight, CodeHighlightCode } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '../Icons';
import classes from './DemoCode.module.css';

export function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }
  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }
  return null;
}

export interface DemoCodeProps {
  code?: CodeHighlightCode | CodeHighlightCode[];
  defaultExpanded?: boolean;
}

export function DemoCode({ code, defaultExpanded = true }: DemoCodeProps) {
  return (
    <>
      {code && (
        <CodeHighlight
          code={code}
          className={classes.code}
          getFileIcon={getFileIcon}
          withExpandButton
          defaultExpanded={defaultExpanded}
        />
      )}
    </>
  );
}
