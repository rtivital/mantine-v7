import React from 'react';
import { Tooltip, Group, Button, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import {
  FLOATING_ARROW_POSITION_DATA,
  FLOATING_POSITION_DATA,
} from '../../../shared/floating-position-data';

function Wrapper(props: any) {
  return (
    <Box p="xl">
      <Group justify="center">
        <Tooltip label="Tooltip" {...props}>
          <Button variant="outline" size="xl">
            With tooltip
          </Button>
        </Tooltip>
      </Group>
    </Box>
  );
}

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip"
      {{props}}
    >
      <Button variant="outline" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const configurator: MantineDemo = {
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
    {
      prop: 'position',
      type: 'select',
      data: FLOATING_POSITION_DATA,
      initialValue: 'top',
      libraryValue: 'top',
    },
    { prop: 'withArrow', type: 'boolean', initialValue: true, libraryValue: false },
    {
      prop: 'arrowPosition',
      type: 'select',
      data: FLOATING_ARROW_POSITION_DATA,
      initialValue: 'side',
      libraryValue: 'side',
    },
  ],
};
