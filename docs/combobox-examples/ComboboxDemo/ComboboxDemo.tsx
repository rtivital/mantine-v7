import React from 'react';
import cx from 'clsx';
import { RemoveScroll } from '@mantine/core';
import { useRouter } from 'next/router';
import { getCodeFileIcon } from '@mantine/ds';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { COMBOBOX_EXAMPLES_COMPONENTS, ComboboxExampleId } from '../examples';
import classes from './ComboboxDemo.module.css';

export function ComboboxDemo() {
  const router = useRouter();
  const id = router.query.e as ComboboxExampleId;
  const data = COMBOBOX_EXAMPLES_COMPONENTS[id];

  if (!data) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={cx(classes.preview, RemoveScroll.classNames.zeroRight)}>
        <div className={classes.wrapper}>
          <data.component />
        </div>
      </div>
      <div className={classes.code}>
        <CodeHighlightTabs code={data.code} getFileIcon={getCodeFileIcon} />
      </div>
    </div>
  );
}
