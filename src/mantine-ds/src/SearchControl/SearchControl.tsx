import React from 'react';
import cx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { UnstyledButton, Text, Group, BoxProps, ElementProps } from '@mantine/core';
import classes from './SearchControl.module.css';

interface SearchControlProps extends BoxProps, ElementProps<'button'> {}

export function SearchControl({ className, ...others }: SearchControlProps) {
  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group gap="xs">
        <IconSearch style={{ width: '0.9rem', height: '0.9rem' }} stroke={1.5} />
        <Text fz="sm" color="dimmed" pr={80}>
          Search
        </Text>
        <Text fw={700} className={classes.shortcut}>
          Ctrl + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}
