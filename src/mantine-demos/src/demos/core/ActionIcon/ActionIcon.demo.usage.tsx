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
    <ActionIcon{{props}}>
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
    <ActionIcon {...props}>
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
  controls: [
    { prop: 'color', type: 'color', initialValue: 'gray', libraryValue: 'gray' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    interactiveVariantsControl,
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'loading', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
