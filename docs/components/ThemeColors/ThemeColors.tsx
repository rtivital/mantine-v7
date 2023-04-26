import React from 'react';
import { useMantineTheme } from '@mantine/core';
import { ColorsGroup } from './ColorsGroup/ColorsGroup';
import classes from './ThemeColors.module.css';

export function ThemeColors() {
  const theme = useMantineTheme();
  const groups = Object.keys(theme.colors).map((group) => (
    <ColorsGroup group={group} key={group} />
  ));

  return <div className={classes.root}>{groups}</div>;
}
