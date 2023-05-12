import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, Tooltip, Box } from '@mantine/core';

const Wrapper = (props: any) => (
  <Box p="xl">
    <Group justify="center">
      <Tooltip.Floating {...props} label="Tooltip">
        <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
          Hover over the box to see tooltip
        </Box>
      </Tooltip.Floating>
    </Group>
  </Box>
);

const code = `
import { Tooltip, Box } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Tooltip"{{props}}>
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`;

export const floating: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'color',
      type: 'color',
      initialValue: 'blue',
      libraryValue: '__none__',
    },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
  ],
};
