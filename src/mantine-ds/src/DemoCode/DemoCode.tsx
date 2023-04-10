import React from 'react';
import { CodeHighlightTabs, CodeHighlightTabsCode } from '@mantine/code-highlight';
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
  code?: CodeHighlightTabsCode | CodeHighlightTabsCode[];
  defaultExpanded?: boolean;
}

export function DemoCode({ code, defaultExpanded = true }: DemoCodeProps) {
  return (
    <>
      {code && (
        <CodeHighlightTabs
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
