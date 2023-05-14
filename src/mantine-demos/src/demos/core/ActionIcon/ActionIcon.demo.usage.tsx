import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IconAdjustments } from '@tabler/icons-react';
import { ActionIcon, rem } from '@mantine/core';
import { interactiveVariantsControl } from '../../../shared';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments />
    </ActionIcon>
  );
}
`;

const iconSizes: Record<string, string> = {
  xs: rem(12),
  sm: rem(14),
  md: rem(18),
  lg: rem(26),
  xl: rem(34),
};

function Wrapper(props: any) {
  return (
    <ActionIcon {...props} aria-label="Settings">
      <IconAdjustments
        style={{ width: iconSizes[props.size], height: iconSizes[props.size] }}
        stroke={1.5}
      />
    </ActionIcon>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  striped: true,
  controls: [
    interactiveVariantsControl,
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
  ],
};
