import React from 'react';
import Link from 'next/link';
import cx from 'clsx';
import { Center } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import classes from './ComboboxNavbar.module.css';

export function ComboboxNavbar() {
  return (
    <div className={classes.navbar}>
      <Center className={classes.backLink} component={Link} inline href="/core/combobox">
        <IconArrowLeft className={cx(classes.backIcon, 'mantine-rotate-rtl')} />
        <span>Back to Combobox documentation</span>
      </Center>
    </div>
  );
}
