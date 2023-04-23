import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button, Group } from '@mantine/core';

const code = (props: any) => `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: ${props.primaryShade} }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Group>
      <Button color={`blue.${props.primaryShade}`}>Filled</Button>
      <Button color={`blue.${props.primaryShade}`} variant="light">
        Light
      </Button>
      <Button color={`blue.${props.primaryShade}`} variant="outline">
        Outline
      </Button>
    </Group>
  );
}

export const primaryShadeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'number',
      prop: 'primaryShade',
      initialValue: 6,
      libraryValue: '__none__',
      min: 0,
      max: 9,
    },
  ],
};
