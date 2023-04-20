import React from 'react';
import cx from 'clsx';
import { IconInfoCircle } from '@tabler/icons-react';
import { Blockquote, rgba, useMantineTheme } from '@mantine/core';
import classes from './MdxInfo.module.css';

export function MdxQuote({ className, ...others }: React.ComponentPropsWithoutRef<'blockquote'>) {
  const theme = useMantineTheme();
  return (
    <Blockquote
      className={cx(classes.root, className)}
      icon={<IconInfoCircle className={classes.icon} />}
      radius="md"
      __vars={{
        '--docs-bq-code-bg-light': rgba(theme.colors.blue[6], 0.2),
        '--docs-bq-code-bg-dark': rgba(theme.colors.blue[4], 0.2),
      }}
      {...others}
    />
  );
}
