import React from 'react';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { YarnIcon, NpmIcon } from '@mantine/ds';
import classes from './MdxNpmScript.module.css';

interface MdxNpmScriptProps {
  yarnScript: string;
  npmScript: string;
}

export function MdxNpmScript({ yarnScript, npmScript }: MdxNpmScriptProps) {
  return (
    <CodeHighlightTabs
      classNames={{ root: classes.root }}
      code={[
        {
          fileName: 'yarn',
          code: yarnScript,
          language: 'bash',
          icon: <YarnIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'npm',
          code: npmScript,
          language: 'bash',
          icon: <NpmIcon className={classes.icon} size={16} />,
        },
      ]}
    />
  );
}
