import React from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { VisuallyHidden, useMantineTheme } from '@mantine/core';
import { MantineLogo, MantineLogoProps } from '@mantine/ds';
import classes from './Logo.module.css';

export function Logo(props: MantineLogoProps) {
  const theme = useMantineTheme();
  return (
    <Link href="/" className={cx(classes.logo, theme.focusClassNames.auto)} aria-label="Mantine">
      <VisuallyHidden>
        Welcome to Mantine, React components library that you always wished for
      </VisuallyHidden>
      <MantineLogo size={30} {...props} />
    </Link>
  );
}
