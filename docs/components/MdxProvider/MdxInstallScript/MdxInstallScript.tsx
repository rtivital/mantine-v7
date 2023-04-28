import React from 'react';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { YarnIcon, NpmIcon } from '@mantine/ds';
import classes from './MdxInstallScript.module.css';

interface MdxInstallScriptProps {
  packages: string;
  dev?: boolean;
}

export function MdxInstallScript({ packages, dev }: MdxInstallScriptProps) {
  return (
    <CodeHighlightTabs
      classNames={{ root: classes.root }}
      code={[
        {
          fileName: 'yarn',
          code: `yarn add ${dev ? '--dev ' : ''}${packages}`,
          language: 'bash',
          icon: <YarnIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'npm',
          code: `npm install ${dev ? '--save-dev ' : ''}${packages}`,
          language: 'bash',
          icon: <NpmIcon className={classes.icon} size={16} />,
        },
      ]}
    />
  );
}
