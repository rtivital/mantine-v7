import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import classes from './NextLink.module.css';

export function NextLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const theme = useMantineTheme();
  return <Link className={cx(classes.link, theme.focusClassNames.auto)} {...props} />;
}
